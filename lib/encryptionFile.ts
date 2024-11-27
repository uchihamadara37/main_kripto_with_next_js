import { DecryptAES, EncryptAES } from '@/app/lib/encryptAES';
import * as CryptoJS from 'crypto-js';

export function encryptFile(file: File, key: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const fileContent = event.target?.result;
                if (!fileContent) {
                    throw new Error('File reading failed');
                }

                // Konversi ArrayBuffer ke base64 dengan metode lebih aman
                const uint8Array = new Uint8Array(fileContent as ArrayBuffer);
                const base64Content = btoa(
                    uint8Array.reduce((data, byte) => data + String.fromCharCode(byte), '')
                );

                // Enkripsi dengan kunci yang diberikan
                if (key.length < 32){
                    for (let i = key.length ; i < 32; i++)
                        key += "&"
                }else if (key.length > 32){
                    key = key.slice(0, 32)
                }
                console.log("base64 content : ", base64Content)
                // const encrypted = CryptoJS.AES.encrypt(base64Content, key).ciphertext.toString();
                const encrypted = EncryptAES(base64Content, key);
                // console.log(key)
                // console.log("enkripted : ", encrypted)
                // const decrypted = DecryptAES(encrypted, key)
                // const base64Content2 = decrypted.toString(CryptoJS.enc.Utf8);
                // console.log("hasil dekripted : ", decrypted)
                // console.log("base64Content : ", base64Content2)



                resolve(encrypted);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = (error) => {
            reject(error);
        };

        // Baca file sebagai ArrayBuffer
        reader.readAsArrayBuffer(file);
    });
}

export function decryptFile(encryptedData: string, key: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
        try {
            if (key.length < 32){
                for (let i = key.length ; i < 32; i++)
                    key += "&"
            }else if (key.length > 32){
                key = key.slice(0, 32)
            }
            // Dekripsi dengan kunci yang sama
            // const decrypted = CryptoJS.AES.decrypt(encryptedData, key);
            // const base64Content = decrypted.toString(CryptoJS.enc.Utf8);
            const base64Content = DecryptAES(encryptedData, key)
            console.log("base64 content hasil dekrip : ", base64Content)

            if (!base64Content){
                return reject();
            }
            // Konversi base64 kembali ke Blob
            const byteCharacters = atob(base64Content);
            const byteNumbers = new Array(byteCharacters.length);

            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            // const blob = new Blob([byteArray], { type: 'application/pdf' });
            const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            resolve(blob);
        } catch (error) {
            reject();
        }
    });
}


export function stringToDownloadableFile(encryptedContent: string, filename: string, mimeType: string = 'application/pdf') {
    // Buat Blob dari string terenkripsi
    const blob = new Blob([encryptedContent], { type: mimeType });

    // const blob = stringToFile(encryptedContent)

    // Buat link download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = filename;

    // Simulasi klik untuk download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Bersihkan link setelah download
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);
}

export async function downloadOriginalFile(dekripBlob: Blob, key: string, originalFilename: string) {
    try {
        // Dekripsi menjadi Blob
        // const decryptedBlob = await decryptFile(encryptedString, key);
        
        // Buat link download
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(dekripBlob);
        downloadLink.download = originalFilename;
        
        // Simulasi klik download
        document.body.appendChild(downloadLink);
        downloadLink.click();
        
        // Bersihkan link
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
        console.error('Dekripsi dan download error:', error);
    }
}

// ===========================================================================================

// export function stringToFile(encryptedString: string): Blob {
//     // Konversi string ke byte array
//     const byteCharacters = atob(encryptedString);
//     const byteNumbers = new Array(byteCharacters.length);

//     for (let i = 0; i < byteCharacters.length; i++) {
//         byteNumbers[i] = byteCharacters.charCodeAt(i);
//     }

//     const byteArray = new Uint8Array(byteNumbers);
    
//     // Buat Blob dengan tipe PDF
//     return new Blob([byteArray], { type: 'application/pdf' });
// }

export function downloadEncryptedFile(file: File) {
    // Buat URL untuk file
    const url = URL.createObjectURL(file);
    
    // Buat element anchor untuk download
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name; // Gunakan nama file asli
    
    // Append link ke document, klik, lalu remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Bersihkan URL object untuk mencegah memory leak
    URL.revokeObjectURL(url);
}

// dipakai
export function stringToFile(str: string, filename: string = 'file.txt', mimeType: string = 'application/pdf'): File {
    // Langsung konversi string ke File
    return new File([str], filename, { type: mimeType });
}

export function fileToString(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (event) => {
            const result = event.target?.result;
            // Hasil dari readAsText() sudah berupa string
            if (typeof result === 'string') {
                resolve(result);
            } else {
                reject(new Error('Failed to convert file to string'));
            }
        };

        reader.onerror = () => {
            reject(new Error('Error reading file'));
        };

        // Menggunakan readAsText langsung
        reader.readAsText(file);
    });

    // 
}


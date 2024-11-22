import CryptoJS from 'crypto-js';

// Fungsi untuk mengkonversi ArrayBuffer menjadi string Base64
function arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

// Fungsi untuk mengkonversi string Base64 menjadi ArrayBuffer
function base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

// Fungsi untuk mengenkripsi file PDF
export function encryptFile(file: File, key: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const encrypted = CryptoJS.AES.encrypt(reader.result as string, key).toString();
            resolve(encrypted);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsText(file);
    });
}

// Fungsi untuk mendekripsi file PDF
export function decryptFile(encryptedData: string, key: string): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        try {
            const bytes = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Base64);
            const arrayBuffer = base64ToArrayBuffer(bytes);  // memakai fungsi custom
            resolve(arrayBuffer);
        } catch (error) {
            reject(error);
        }
    });
}
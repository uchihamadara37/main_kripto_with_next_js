interface SteganographyResult {
    encryptedImage: ImageData;
    originalImage?: ImageData;
    plaintext?: string;
}

// Fungsi untuk mengenkripsi pesan ke dalam gambar
export function encryptSteganography(
    plaintext: string,
    key: string,
    imageData: ImageData
): SteganographyResult {
    // Buat salinan ImageData agar tidak mengubah yang asli
    const encryptedImage = new ImageData(
        new Uint8ClampedArray(imageData.data),
        imageData.width,
        imageData.height
    );

    // Konversi plaintext ke binary string
    const binaryMessage = textToBinary(plaintext);

    // Enkripsi binary message menggunakan key
    const encryptedBinary = xorEncrypt(binaryMessage, key);

    // Simpan panjang pesan di 32 pixel pertama (32 bit)
    const messageLengthBinary = encryptedBinary.length.toString(2).padStart(32, '0');
    for (let i = 0; i < 32; i++) {
        const bit = parseInt(messageLengthBinary[i]);
        encryptedImage.data[i * 4] = (encryptedImage.data[i * 4] & 254) | bit;
    }

    // Sembunyikan pesan terenkripsi dalam LSB dari pixel
    let pixelIndex = 32; // Mulai setelah length header
    for (let i = 0; i < encryptedBinary.length; i++) {
        const bit = parseInt(encryptedBinary[i]);
        // Ubah LSB dari komponen merah setiap pixel
        encryptedImage.data[pixelIndex * 4] = (encryptedImage.data[pixelIndex * 4] & 254) | bit;
        pixelIndex++;
    }

    return { encryptedImage };
}

// Fungsi untuk mendekripsi pesan dari gambar
export function decryptSteganography(
    encryptedImage: ImageData,
    key: string
): SteganographyResult {
    // Baca panjang pesan dari 32 pixel pertama
    let messageLengthBinary = '';
    for (let i = 0; i < 32; i++) {
        messageLengthBinary += encryptedImage.data[i * 4] & 1;
    }
    const messageLength = parseInt(messageLengthBinary, 2);

    // Baca pesan terenkripsi dari LSB
    let encryptedBinary = '';
    for (let i = 0; i < messageLength; i++) {
        const pixelIndex = i + 32;
        encryptedBinary += encryptedImage.data[pixelIndex * 4] & 1;
    }

    // Dekripsi binary message menggunakan key
    const decryptedBinary = xorEncrypt(encryptedBinary, key);

    // Konversi kembali ke plaintext
    const plaintext = binaryToText(decryptedBinary);

    // Buat salinan gambar original dengan menghapus LSB
    const originalImage = new ImageData(
        new Uint8ClampedArray(encryptedImage.data),
        encryptedImage.width,
        encryptedImage.height
    );

    // Bersihkan LSB untuk mendapatkan gambar original
    for (let i = 0; i < originalImage.data.length; i += 4) {
        originalImage.data[i] &= 254;
    }

    return {
        encryptedImage,
        originalImage,
        plaintext
    };
}

// Fungsi helper untuk konversi text ke binary
function textToBinary(text: string): string {
    return text
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join('');
}

// Fungsi helper untuk konversi binary ke text
function binaryToText(binary: string): string {
    const bytes = binary.match(/.{1,8}/g) || [];
    return bytes
        .map(byte => String.fromCharCode(parseInt(byte, 2)))
        .join('');
}

// Fungsi untuk enkripsi XOR sederhana
function xorEncrypt(binary: string, key: string): string {
    const keyBinary = textToBinary(key);
    let result = '';
    for (let i = 0; i < binary.length; i++) {
        const keyBit = keyBinary[i % keyBinary.length];
        result += binary[i] === keyBit ? '0' : '1';
    }
    return result;
}
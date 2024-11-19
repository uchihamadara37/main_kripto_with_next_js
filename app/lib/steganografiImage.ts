interface ImageSteganographyResult {
    encryptedImage: ImageData | null;
    originalImage?: ImageData;
    hiddenImage?: ImageData;
}

// Fungsi untuk mengenkripsi gambar ke dalam gambar lain
export function encryptImageSteganography(
    hiddenImageData: ImageData,
    coverImageData: ImageData,
    key: string
): ImageSteganographyResult {
    // Pastikan gambar cover cukup besar
    if (hiddenImageData.width > coverImageData.width ||
        hiddenImageData.height > coverImageData.height) {
        throw new Error('Cover image must be larger than or equal to hidden image');
    }

    // Buat salinan gambar cover
    const encryptedImage = new ImageData(
        new Uint8ClampedArray(coverImageData.data),
        coverImageData.width,
        coverImageData.height
    );

    // Simpan dimensi gambar tersembunyi di 2 pixel pertama
    encryptedImage.data[0] = hiddenImageData.width;
    encryptedImage.data[1] = hiddenImageData.height;

    // Simpan data gambar tersembunyi di 4 bit MSB, gambar cover di 4 bit LSB
    for (let y = 0; y < hiddenImageData.height; y++) {
        for (let x = 0; x < hiddenImageData.width; x++) {
            const i = (y * coverImageData.width + x) * 4;

            // Ambil nilai RGB dari kedua gambar
            const hiddenR = hiddenImageData.data[i];
            const hiddenG = hiddenImageData.data[i + 1];
            const hiddenB = hiddenImageData.data[i + 2];

            const coverR = encryptedImage.data[i];
            const coverG = encryptedImage.data[i + 1];
            const coverB = encryptedImage.data[i + 2];

            // Gabungkan nilai: 4 bit MSB dari hidden, 4 bit LSB dari cover
            encryptedImage.data[i] = (hiddenR & 0xF0) | (coverR & 0x0F);
            encryptedImage.data[i + 1] = (hiddenG & 0xF0) | (coverG & 0x0F);
            encryptedImage.data[i + 2] = (hiddenB & 0xF0) | (coverB & 0x0F);
            // Alpha channel tetap sama
            encryptedImage.data[i + 3] = coverImageData.data[i + 3];
        }
    }

    return { encryptedImage };
}

// Fungsi untuk mendekripsi gambar
export function decryptImageSteganography(
    encryptedImage: ImageData,
    key: string
): ImageSteganographyResult {
    // Baca dimensi gambar tersembunyi
    const width = encryptedImage.data[0];
    const height = encryptedImage.data[1];

    // Buat ImageData untuk kedua gambar hasil
    const hiddenImage = new ImageData(width, height);
    const originalImage = new ImageData(
        encryptedImage.width,
        encryptedImage.height
    );

    // Ekstrak kedua gambar
    for (let y = 0; y < encryptedImage.height; y++) {
        for (let x = 0; x < encryptedImage.width; x++) {
            const i = (y * encryptedImage.width + x) * 4;

            if (x < width && y < height) {
                // Ekstrak gambar tersembunyi (4 bit MSB)
                hiddenImage.data[i] = (encryptedImage.data[i] & 0xF0) | ((encryptedImage.data[i] & 0xF0) >> 4);
                hiddenImage.data[i + 1] = (encryptedImage.data[i + 1] & 0xF0) | ((encryptedImage.data[i + 1] & 0xF0) >> 4);
                hiddenImage.data[i + 2] = (encryptedImage.data[i + 2] & 0xF0) | ((encryptedImage.data[i + 2] & 0xF0) >> 4);
                hiddenImage.data[i + 3] = 255;
            }

            // Ekstrak gambar original (4 bit LSB)
            originalImage.data[i] = (encryptedImage.data[i] & 0x0F) | ((encryptedImage.data[i] & 0x0F) << 4);
            originalImage.data[i + 1] = (encryptedImage.data[i + 1] & 0x0F) | ((encryptedImage.data[i + 1] & 0x0F) << 4);
            originalImage.data[i + 2] = (encryptedImage.data[i + 2] & 0x0F) | ((encryptedImage.data[i + 2] & 0x0F) << 4);
            originalImage.data[i + 3] = encryptedImage.data[i + 3];
        }
    }

    return {
        encryptedImage,
        originalImage,
        hiddenImage
    };
}

// Fungsi helper untuk random number generator dengan seed
// function seedRandom(seed: number) {
//     return function () {
//         seed = (seed * 9301 + 49297) % 233280;
//         return seed / 233280;
//     };
// }
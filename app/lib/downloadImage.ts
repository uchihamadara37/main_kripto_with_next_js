// Fungsi untuk mengkonversi ImageData ke Blob/File
export function imageDataToBlob(imageData: ImageData): Promise<Blob> {
    return new Promise((resolve) => {
        // Buat canvas baru dengan ukuran yang sama dengan ImageData
        const canvas = document.createElement('canvas');
        canvas.width = imageData.width;
        canvas.height = imageData.height;

        // Gambar ImageData ke canvas
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.putImageData(imageData, 0, 0);

            // Konversi canvas ke blob
            canvas.toBlob((blob) => {
                if (blob) {
                    resolve(blob);
                }
            }, 'image/png', 1.0); // Gunakan kualitas maksimum untuk menghindari kompresi
        }
    });
}

// Fungsi handle download untuk button
export async function handleDownload(
    imageData: ImageData,
    filename: string = 'encrypted-image.png'
) {
    try {
        // Konversi ImageData ke blob
        const blob = await imageDataToBlob(imageData);

        // Buat URL untuk blob
        const url = URL.createObjectURL(blob);

        // Buat element anchor untuk download
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;

        // Trigger download
        document.body.appendChild(a);
        a.click();

        // Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading image:', error);
        throw error;
    }
}
export function formatTanggalIndonesia(isoDateString: string): string {
    // Buat Date object
    const date = new Date(isoDateString)

    // Konversi ke zona waktu lokal (WIB)
    // Kurangi 7 jam dari UTC
    const localDate = new Date(date.getTime() + (7 * 60 * 60 * 1000))

    const bulanIndonesia = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]

    const hari = localDate.getUTCDate()
    const bulan = bulanIndonesia[localDate.getUTCMonth()]
    const tahun = localDate.getUTCFullYear()

    const jam = localDate.getUTCHours().toString().padStart(2, '0')
    const menit = localDate.getUTCMinutes().toString().padStart(2, '0')

    return `${hari} ${bulan} ${tahun} jam ${jam}:${menit}`
}
export function formatTanggalLahir(isoDateString: string): string {
    // Buat Date object
    const date = new Date(isoDateString)

    // Konversi ke zona waktu lokal (WIB)
    // Kurangi 7 jam dari UTC
    const localDate = new Date(date.getTime() + (7 * 60 * 60 * 1000))

    const bulanIndonesia = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]

    const hari = localDate.getUTCDate()
    const bulan = bulanIndonesia[localDate.getUTCMonth()]
    const tahun = localDate.getUTCFullYear()
    return `${hari} ${bulan} ${tahun}`
}
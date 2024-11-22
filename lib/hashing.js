export default hashPassword = async (password) => {
    const msgUint8 = new TextEncoder().encode(password); // Konversi teks ke Uint8Array 
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // Menghasilkan hash 
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Konversi hash ke array 
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // Konversi ke hex return hashHex; 
    return hashHex
}
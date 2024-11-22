export const EncryptVigenere = (text: string, key: string) => {
    let encrypted = '';
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < text.length; i++) {
        const c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            encrypted += String.fromCharCode((c - 65 + (key.charCodeAt(j % key.length) - 65)) % 26 + 65);
            j++;
        } else if (c >= 97 && c <= 122) {
            encrypted += String.fromCharCode((c - 97 + (key.charCodeAt(j % key.length) - 65)) % 26 + 97);
            j++;
        } else {
            encrypted += text.charAt(i);
        }
    }
    return encrypted;
}

export const DecryptVigenere = (text: string, key: string) => {
    let decrypted = '';
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < text.length; i++) {
        const c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            decrypted += String.fromCharCode((c - 65 - (key.charCodeAt(j % key.length) - 65) + 26) % 26 + 65);
            j++;
        } else if (c >= 97 && c <= 122) {
            decrypted += String.fromCharCode((c - 97 - (key.charCodeAt(j % key.length) - 65) + 26) % 26 + 97);
            j++;
        } else {
            decrypted += text.charAt(i);
        }
    } return decrypted;
}
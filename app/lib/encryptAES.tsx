import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

export function EncryptAES(plaintext: string, key: string): string {
    try {

        if (key.length < 32){
            for (let i = key.length ; i < 32; i++)
                key += "&"
        }else if (key.length > 32){
            key = key.slice(0, 32)
        }
        // console.log(key)
        
        const iv: any = '000000001110';
        const cipher = createCipheriv('aes-256-gcm', key, iv);
        
        // Enkripsi data
        let encrypted = cipher.update(plaintext, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        
        // Dapatkan authentication tag
        const authTag = cipher.getAuthTag();
        
        // Gabungkan encrypted data dan auth tag dalam format base64
        return encrypted + '.' + authTag.toString('base64');
    } catch (error : any) {
        throw new Error(`Encryption failed: ${error.message}`);
    }
}

export function DecryptAES(encryptedText: string, key: string): string {
    try {

        if (key.length < 32){
            for (let i = key.length ; i < 32; i++)
                key += "&"
        }else if (key.length > 32){
            key = key.slice(0, 32)
        }
        console.log(key)
        // Pisahkan encrypted data dan auth tag
        const [encrypted, authTag] = encryptedText.split('.');
        const iv: any = '000000001110';
        const decipher = createDecipheriv('aes-256-gcm', key, iv);
        
        // Set authentication tag
        decipher.setAuthTag(new Uint8Array(Buffer.from(authTag, 'base64')));
        
        // Dekripsi data
        let decrypted = decipher.update(encrypted, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        

        // alert("Dekripsi berhasil!")
        return decrypted;
    } catch (error: any) {
        alert("Dekripsi gagal")
        return "";
        // throw new Error(`Decryption failed: ${error.message}`);
    }
}
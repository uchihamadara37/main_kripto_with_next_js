import { useCallback, useState } from "react";
import { InputWithLabel } from "../inputWithLabel";
import TextareaWithLabel from "../textareaWithLabel";
import { DecryptAES, EncryptAES } from "@/app/lib/encryptAES";
import { Button, buttonVariants } from "../ui/button";


const encryptVigenere = (text: string, key: string) => {
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

const decryptVigenere = (text: string, key: string) => {
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

type TextContentProps = {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    vigenereKey: string;
    setVigenereKey: React.Dispatch<React.SetStateAction<string>>;
    aesKey: string; setAesKey: React.Dispatch<React.SetStateAction<string>>;
    // handleEncrypt: () => void;
    // handleDecrypt: () => void;
    outputText: string;
    setOutputText: React.Dispatch<React.SetStateAction<string>>;
};

const TextContent = ({
}) => {

    const [inputText, setInputText] = useState('')
    const [vigenereKey, setVigenereKey] = useState('')
    const [aesKey, setAesKey] = useState('')
    const [outputText, setOutputText] = useState('')

    const handleEncrypt = useCallback(() => {
        if (!inputText || !vigenereKey || !aesKey) {
            alert('Please fill in all fields')
            return
        }
        const vigenereEncrypted = encryptVigenere(inputText, vigenereKey)
        const fullyEncrypted = EncryptAES(vigenereEncrypted, aesKey)
        setOutputText(fullyEncrypted)

        // if (outputRef.current) {
        //     outputRef.current.focus();
        // }
    }, [inputText, vigenereKey, aesKey])

    const handleDecrypt = useCallback(() => {
        if (!outputText || !vigenereKey || !aesKey) {
            alert('Please fill in all fields')
            return
        }
        const aesDecrypted = DecryptAES(outputText, aesKey)
        const fullyDecrypted = decryptVigenere(aesDecrypted, vigenereKey)
        setInputText(fullyDecrypted)

    }, [outputText, vigenereKey, aesKey])

    const handleClear = () => {
        setVigenereKey('')
        setOutputText('')
        setAesKey('')
        setInputText('')
    }
    const handleCopyText1 = () => {
        // Pastikan inputText berisi teks yang ingin disalin
        if (inputText) {
            navigator.clipboard.writeText(inputText)
                .then(() => {
                    console.log('Text copied to clipboard:', inputText);
                })
                .catch((err) => {
                    console.error('Failed to copy text: ', err);
                });
        }
    };
    const handleCopyText2 = () => {
        // Pastikan inputText berisi teks yang ingin disalin
        if (outputText) {
            navigator.clipboard.writeText(outputText)
                .then(() => {
                    // console.log('Text copied to clipboard:', inputText);
                })
                .catch((err) => {
                    console.error('Failed to copy text: ', err);
                });
        }
    };

    return (
        <div className="flex flex-wrap sm:flex-nowrap sm:flex-col md:flex-row gap-4">

            <div className="w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-cyan-500">Input Text Message</h2>
                <p className='text-lg'>Please insert the message you want to encrypt here...</p>
                <div className="absolute flex justify-between mt-[25rem] ">
                    <button
                        title="Copy now"
                        className="ml-2"
                        onClick={handleCopyText1}
                    >
                        <img src="/copy.png" alt="..." />
                    </button>
                </div>
                <TextareaWithLabel
                    // ref={inputRef}
                    label='Your message'
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />

            </div>
            <div className="w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow">
                <div className="h-full flex flex-col justify-center">
                    <InputWithLabel
                        label='Insert Vigenere Key'
                        value={vigenereKey}
                        onChange={(e) => setVigenereKey(e.target.value)}
                    />
                    <InputWithLabel
                        label='Insert Your AES key'
                        value={aesKey}
                        onChange={(e) => setAesKey(e.target.value)}
                    />
                    <div className="flex justify-center items-center gap-3">
                        <Button
                            className={buttonVariants({ variant: "destructive", size: 'default', className: 'bg-green-500 mt-3' })}
                            onClick={handleEncrypt}
                        >Encrypt Now</Button>
                        <Button
                            className={buttonVariants({ variant: "destructive", size: 'default', className: 'bg-blue-500 mt-3' })}
                            onClick={handleDecrypt}
                        >Decrypt Now</Button>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button
                            className={buttonVariants({ variant: "outline", size: 'default', className: 'text-primary mt-3' })}
                            onClick={handleClear}
                        >Clear all fields</Button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-green-500">Message Result</h2>
                <p className='text-lg'>Please insert your chipper text in here if you want to decrypt message.</p>
                <div className="absolute flex justify-between mt-[25rem] ">
                    <button
                        title="Copy now"
                        className="ml-2"
                        onClick={handleCopyText2}
                    >
                        <img src="/copy.png" alt="..." />
                    </button>
                </div>
                <TextareaWithLabel
                    // ref={outputRef}
                    label='Your chipperText message'
                    value={outputText}
                    onChange={(e) => setOutputText(e.target.value)}
                />
            </div>
        </div>
    )
};
export default TextContent;
import { useState, ChangeEvent, useCallback, useEffect } from 'react';
// import { Encryption } from '../../lib/encryptionFile';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import TextareaWithLabel from '../textareaWithLabel';
import { InputWithLabel } from '../inputWithLabel';

// import { encryptFile, decryptFile } from '@/lib/encryptPdf';
import { encryptFile, decryptFile, downloadOriginalFile, fileToString, stringToFile, downloadEncryptedFile } from "@/lib/encryptionFile"

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { handleDownload } from '@/app/lib/downloadImage';
import { stringToDownloadableFile } from '@/lib/encryptionFile';

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react';


interface EncryptedFile {
    content: string;
    filename: string;
}



export default function FileUpload() {
    const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [key2, setKey2] = useState("");

    const [hasilDekrip, setHasilDekrip] = useState<Blob | null>(null);


    const [file, setFile] = useState<File | null>(null);
    const [file2, setFile2] = useState<File | null>(null);
    const [encryptedContent, setEncryptedContent] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState<string | null>(null);

    // const [result, setResult] = useState<{ encrypted: string; key: string } | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<{ encrypted: string; key: string } | null>(null);


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {

            const filenya = e.target.files[0]
            if (filenya.name.endsWith(".xlsx")) {
                setFile(filenya);
                setError(null);
            }else{
                alert("Please ensure you choose .xlsx File (Excel)")
            }
            // console.log(filenya)
            // console.log(file)
            // console.log("file berhasil diambil :", file)
        }
    };



    useEffect(() => {
        console.log("Hasil file", file); // Akses file setelah state diperbarui
    }, [file]);
    useEffect(() => {
        console.log("Hasil file2", file2); // Akses file setelah state diperbarui
    }, [file2]);

    const handleEncrypt = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!file || !key) {
            alert("pelase fill the file and key input")
            return;
        }
        if (!file || !key) return;

        setIsLoading(true);
        setError(null);

        try {
            // const file = event.target.files[0];
            console.log(file)
            console.log("mulai encode")
            const hasil: string = await encryptFile(file, key)
            console.log("hasil string : ", hasil)
            setText(hasil)


        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to process file');
            console.error(err);
        } finally {
            setIsLoading(false);
            // set FIle2 upload buat dekripsi manual null
            setFile2(null);
        }
    }, [key, file]);

    const handleDecrypt = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsLoading(true);
        if (!key2 || !text) {
            alert("pelase fill the file and key input")
            setIsLoading(false);
            return;
        } else {
            try {
                // const file = event.target.files[0];
                console.log(file2)
                console.log("mulai dekripsi")
                const hasil: Blob = await decryptFile(text, key2)
                console.log(hasil)
                setHasilDekrip(hasil)


            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to process file');
                // console.error(err);
            } finally {
                setIsLoading(false);
                setKey2('')
            }
        }
    }, [key2, file2])

    const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("mulai nyoba download ")
        if (!text) return;

        try {
            // Enkripsi file

            // Download file terenkripsi
            const fileName = prompt("Masukkan nama file:", "tabel_export.xlsx");
            if (!fileName) return;
            console.log("string yang diunduh : ", text)
            const fileUnduh = stringToFile(text, fileName.endsWith(".xlsx") ? fileName : `${fileName}.xlsx`)
            downloadEncryptedFile(fileUnduh)
            // stringToDownloadableFile(
            //     text,
            //     `encrypted_${file?.name}`,
            // );
        } catch (error) {
            console.error('Encrypt and download error:', error);
        }
    }

    const handleFileChange2 = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {

            const filenya = e.target.files[0]
            console.log(filenya)
            if (filenya.name.endsWith(".xlsx")) {
                setFile2(filenya);
                if (filenya) {
                    const textFile2 = await fileToString(filenya)
                    setText(textFile2)
                    console.log("hasil dari file2 string : ", textFile2)
                } else {
                    console.log("file2 masih undefined")
                }
            } else {
                alert("File tidak valid. Harus berformat .xlsx (Excel)");
                // Lakukan sesuatu jika file tidak valid
            }

        }
    };

    const handleDownload2 = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("mulai nyoba download 2")
        if (!hasilDekrip) return;

        try {
            // Enkripsi file
            const fileName = prompt("Masukkan nama file:", "tabel_export.xlsx");
            if (!fileName) return;

            // Download file terenkripsi
            downloadOriginalFile(
                hasilDekrip,
                key2,
                fileName.endsWith(".xlsx") ? fileName : `${fileName}.xlsx`
            );
        } catch (error) {
            console.error('Decrypt and download error:', error);
        }
    }

    const handleRefresh = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("refresh text dan hasil dekrip")
        setText('');
        setHasilDekrip(null);
    }, [text, hasilDekrip])

    return (
        <div className="">
            <h1 className="text-3xl font-semibold text-center mb-7">
                Encrypt File Excel (.xlsx)
            </h1>
            <div className=" flex flex-col lg:flex-row p-4 gap-5">
                <div className="flex-none w-[30rem]">
                    <Label className="text-lg">Select file.xlsx from local</Label>
                    <Input
                        type="file"
                        onChange={handleFileChange}
                        disabled={isLoading}
                        className="mb-4 mt-2"

                    />
                    <InputWithLabel
                        label='Insert the key'
                        className='mb-2'
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                    <Label className={cn("mt-3")}>Start encrypt</Label>
                    <div className="mt-1">
                        <Button
                            variant={"default"}
                            className=''
                            onClick={(e) => handleEncrypt(e)}
                        >Encrypt</Button>
                    </div>

                </div>
                {/* ======================================== */}
                <div className="flex-initial w-1/3">
                    {text && (
                        <div className="flex ">
                            <Button
                                className=''
                                onClick={(e) => handleDownload(e)}
                            >Download Encrypted PDF</Button>
                        </div>
                    )}

                    {text && (
                        <Alert variant={"destructive"} className='border-green-400 text-green-500 [&>svg]:text-green-500 mt-5'>
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                Your encrypted file is ready!
                            </AlertDescription>
                        </Alert>
                    )}


                    {/* <TextareaWithLabel
                    label='Hasil String'
                    placeholder='hasil dari konversi pdf'
                    value={text}
                    readonly={true}
                    // onChange={(e) => setText(e.target.value)}
                /> */}
                    <div className="flex mt-5 justify-start">
                        {text && (
                            <Button
                                className='border-2 bg-green-600'
                                onClick={(e) => handleRefresh(e)}
                            >Refresh Any Result</Button>
                        )}
                    </div>

                    {hasilDekrip && (
                        <div className="flex mt-5 justify-end ">
                            <Button
                                className='bg-blue-500'
                                onClick={(e) => handleDownload2(e)}
                            >Download Original PDF</Button>
                        </div>
                    )}
                </div>

                <div className="flex-none w-[30rem] lg:pl-10">
                    {!text && (
                        <div className="">
                            <Label className="text-lg">Select file.xlsx had already encrypted before from local</Label>
                            <Input
                                type="file"
                                onChange={handleFileChange2}
                                disabled={isLoading}
                                className="mb-4 mt-2"
                            />
                        </div>
                    )}
                    <InputWithLabel
                        label='Insert the key'
                        className='mb-2'
                        value={key2}
                        onChange={(e) => setKey2(e.target.value)}
                    />
                    <Label className={cn("mt-3")}>Start encrypt</Label>
                    <div className="mt-1">
                        <Button
                            variant={"default"}
                            className=''
                            onClick={(e) => handleDecrypt(e)}
                        >Decrypt</Button>
                    </div>

                </div>
            </div>
        </div>
    );
}
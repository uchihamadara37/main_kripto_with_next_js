import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ImageInput } from "../inputFile";
import { DropdownMenuRadioGroupDemo } from "../inputRadioGroup";
import { InputWithLabel } from "../inputWithLabel";
import TextareaWithLabel from "../textareaWithLabel";
import { Button, buttonVariants } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { encryptSteganography, decryptSteganography } from "@/app/lib/steganografi";
import { handleDownload } from "@/app/lib/downloadImage";
import { decryptImageSteganography, encryptImageSteganography } from "@/app/lib/steganografiImage";

const StegaOptionText = ({
    setStegaEText,
    stegaEText
}: {
    setStegaEText: React.Dispatch<React.SetStateAction<string>>;
    stegaEText: string;
}) => {
    return (
        <InputWithLabel
            label='Embedded Message'
            onChange={(e) => setStegaEText(e.target.value)}
            placeholder='type something..'
            value={stegaEText}
        />
    )
}


const StegaOptionImage = ({
    setStegaEImage
}: {
    setStegaEImage: (file: File) => Promise<void>;
}) => {
    return (
        <ImageInput
            label='Embedded Image (Max 10 Mb)'
            accept="image/*"
            maxSize={10 * 1024 * 1024}
            onChange={setStegaEImage}
        />
    )
}



const ImageContent = ({ }) => {

    // const [stegaOpt, setStegaOpt] = useState('Text');
    const [stegaEText, setStegaEText] = useState('')
    // const [stegaEImage, setStegaEImage] = useState<ImageData | null>(null);
    const [stegaObjImage, setStegaObjImage] = useState<ImageData | null>(null);
    const [stegaDecryptImage, setStegaDecryptImage] = useState<ImageData | null>(null);
    const [stegaKey, setStegaKey] = useState('');

    const [imageResult, setImageResult] = useState<ImageData | null>(null);
    const [isLoading, setIsLoading] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // const [stegaOpt2, setStegaOpt2] = useState('Text');
    const [stegaKey2, setStegaKey2] = useState('');

    const [extractedText, setExtractedText] = useState('');
    const [imageResult2, setImageResult2] = useState<ImageData | null>(null);
    const [imageResult3, setImageResult3] = useState<ImageData | null>(null);

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [imageUrl2, setImageUrl2] = useState<string | null>(null);
    const [imageUrl3, setImageUrl3] = useState<string | null>(null);



    function fileToImageData(file: File): Promise<ImageData> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            // Baca file sebagai URL data
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    // Buat canvas dengan ukuran gambar
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;

                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        reject(new Error("Failed to get canvas 2D context"));
                        return;
                    }

                    // Gambar gambar di canvas
                    ctx.drawImage(img, 0, 0);

                    // Ambil data piksel dalam bentuk ImageData
                    const imageData = ctx.getImageData(0, 0, img.width, img.height);
                    resolve(imageData);
                };

                img.onerror = () => {
                    reject(new Error("Failed to load image"));
                };

                if (event.target?.result) {
                    img.src = event.target.result as string;
                }
            };
            reader.onerror = () => {
                reject(new Error("Failed to read file"));
            };
            // Baca file sebagai URL data
            reader.readAsDataURL(file);
        });
    }

    // const handleFileUpload1 = async (file: File) => {
    //     try {
    //         const imageData = await fileToImageData(file);
    //         console.log("ImageData:", imageData);
    //         setStegaEImage(imageData)
    //         // Anda bisa menggunakan imageData untuk steganografi
    //     } catch (error) {
    //         console.error("Error converting file to ImageData:", error);
    //     }
    // };
    const handleFileUpload2 = async (file: File | null) => {
        try {
            if (file != null) {
                const imageData = await fileToImageData(file);
                console.log("ImageData:", imageData);
                setStegaObjImage(imageData)
            }
            // Anda bisa menggunakan imageData untuk steganografi
        } catch (error) {
            console.error("Error converting file to ImageData:", error);
        }
    };
    const handleFileUpload3 = async (file: File | null) => {
        try {
            if (file != null) {
                const imageData = await fileToImageData(file);
                console.log("ImageData:", imageData);
                setStegaDecryptImage(imageData)
            }
            // Anda bisa menggunakan imageData untuk steganografi
        } catch (error) {
            console.error("Error converting file to ImageData:", error);
        }
    };


    const handleCreateStega = useCallback(async () => {

        if ((!stegaEText || stegaObjImage == null || !stegaKey)) {
            console.log('No text embedded')
            alert('Please insert an embedded text')
            return
        } else {
            if (stegaObjImage) {
                setIsLoading(true)
                setIsDialogOpen(true)
                try {
                    const { encryptedImage } = encryptSteganography(stegaEText, stegaKey, stegaObjImage)
                    setImageResult(encryptedImage)
                    console.log("berhasil enkrip text+gambar")
                } catch (error) {
                    console.error('Error embedding text into image:', error)
                } finally {
                    setIsLoading(false)
                    setIsDialogOpen(false)
                }
            }
            return
        }


    }, [stegaEText, stegaObjImage, stegaKey])

    const hanldeDecryptStega = useCallback(() => {

        if ((imageResult == null || stegaDecryptImage == null) && !stegaKey2) {
            console.log('No image selected')
            alert('Please insert key and Object Image you want to decrypt')
            return
        } else {
            console.log("decryp via text")
            setIsLoading(true)
            setIsDialogOpen(true)
            try {
                if (imageResult != null && stegaDecryptImage == null) {
                    const { encryptedImage, originalImage, plaintext } = decryptSteganography(imageResult, stegaKey2)
                    // setImageResult(image)
                    if (plaintext) {
                        setExtractedText(plaintext);
                        console.log("berhasil decrypt", plaintext)
                    }
                    if (originalImage) {
                        setImageResult2(originalImage);
                        console.log("gambar ori", originalImage)
                    }
                } else if (imageResult == null && stegaDecryptImage != null) {
                    const { encryptedImage, originalImage, plaintext } = decryptSteganography(stegaDecryptImage, stegaKey2)
                    // setImageResult(image)
                    if (plaintext) {
                        setExtractedText(plaintext);
                        console.log("berhasil decrypt", plaintext)
                    }
                    if (originalImage) {
                        setImageResult2(originalImage);
                        console.log("gambar ori", originalImage)
                    }
                }
            } catch (error) {
                console.error('Error extracted text into image:', error)
            } finally {
                setIsLoading(false)
                setIsDialogOpen(false)
            }
            
        }


    }, [stegaKey2, imageResult])

    // render image result
    useEffect(() => {
        if (!imageResult) {
            setImageUrl(null);
            return;
        }

        const canvas = document.createElement('canvas');
        canvas.width = imageResult.width;
        canvas.height = imageResult.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.putImageData(imageResult, 0, 0);

        canvas.toBlob((blob) => {
            if (blob) {
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
            }
        }, 'image/jpeg', 0.8);

        // Cleanup
        return () => {
            if (imageUrl) URL.revokeObjectURL(imageUrl);
        };
    }, [imageResult]);

    // render hasil cover | imageResu2
    useEffect(() => {
        if (!imageResult2) {
            setImageUrl2(null);
            return;
        }

        const canvas = document.createElement('canvas');
        canvas.width = imageResult2.width;
        canvas.height = imageResult2.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.putImageData(imageResult2, 0, 0);

        canvas.toBlob((blob) => {
            if (blob) {
                const url = URL.createObjectURL(blob);
                setImageUrl2(url);
            }
        }, 'image/jpeg', 0.8);

        // Cleanup
        return () => {
            if (imageUrl2) URL.revokeObjectURL(imageUrl2);
        };
    }, [imageResult2]);

    // hasil gambar hidden | embedded image
    // useEffect(() => {
    //     if (!imageResult3) {
    //         setImageUrl2(null);
    //         return;
    //     }

    //     const canvas = document.createElement('canvas');
    //     canvas.width = imageResult3.width;
    //     canvas.height = imageResult3.height;

    //     const ctx = canvas.getContext('2d');
    //     if (!ctx) return;

    //     ctx.putImageData(imageResult3, 0, 0);

    //     canvas.toBlob((blob) => {
    //         if (blob) {
    //             const url = URL.createObjectURL(blob);
    //             setImageUrl3(url);
    //         }
    //     }, 'image/jpeg', 0.8);

    //     // Cleanup
    //     return () => {
    //         if (imageUrl3) URL.revokeObjectURL(imageUrl3);
    //     };
    // }, [imageResult3]);


    return (
        <div className="flex flex-wrap sm:flex-nowrap sm:flex-col md:flex-row gap-4">

            <div className="w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-primary text-center lg:text-start">Text and Image Encrypt (Steganography)</h2>
                
                <p className="text-base font-semibold text-green-600 mt-10">Embedded Message</p>
                <StegaOptionText
                    setStegaEText={setStegaEText}
                    stegaEText={stegaEText}
                />


                <p className="text-base font-semibold mt-10 text-blue-500">Cover Object</p>
                <ImageInput
                    label='Choose an Image (Max 10 Mb)'
                    accept="image/*"
                    maxSize={10 * 1024 * 1024}
                    onChange={handleFileUpload2}
                />
                <InputWithLabel
                    className="pt-10"
                    label='Insert Key'
                    value={stegaKey}
                    onChange={(e) => setStegaKey(e.target.value)}
                />
                <Button
                    className={buttonVariants({ variant: "destructive", size: 'default', className: 'bg-green-500 mt-3' })}
                    onClick={handleCreateStega} disabled={isLoading}
                >Encrypt Now</Button>

            </div>
            <div className="w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow">
                <div className="h-full flex flex-col justify-center">
                    <p className="text-center mb-3 text-lg font-semibold">{imageResult ? "Image Result" : "Open Image to Decrypt"}</p>

                    {imageUrl ? (
                        <div className="">
                            <img
                                alt="Result"
                                src={imageUrl}
                                className="w-full h-auto rounded-md" // optional styling
                            />
                            <div className="flex flex-row justify-between mt-4">
                                <Button variant="outline" className="" onClick={() => { imageResult && handleDownload(imageResult) }}>Download Encrypted Image</Button>
                                <Button variant={"default"} onClick={() => {
                                    setImageResult(null)
                                    setStegaKey2('');
                                    setExtractedText('')
                                    setImageResult2(null)
                                }}>Clear this result!</Button>
                            </div>
                        </div>

                    ) : (
                        <div className="">
                            <ImageInput
                                label='Input Image to Decrypt (Max 30 Mb)'
                                accept="image/*"
                                maxSize={30 * 1024 * 1024}
                                onChange={handleFileUpload3}
                                boolPreview={stegaDecryptImage != null}
                            />

                            {(stegaDecryptImage != null && (

                                <div className="flex flex-col justify-end mt-4">
                                    <Button variant={"default"} onClick={() => {
                                        setStegaDecryptImage(null)
                                        setStegaKey2('');
                                        setExtractedText('')
                                        setImageResult2(null)
                                    }}>Clear this Image!</Button>
                                </div>
                            ))}

                        </div>
                    )}
                    <canvas ref={canvasRef} style={{ display: 'none' }} />


                    {/* mulai dialog */}
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        {/* <DialogTrigger asChild>
                            <Button variant="outline">Edit Profile</Button>
                        </DialogTrigger> */}

                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    oi
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    oi
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>


                </div>
            </div>
            <div className="w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-primary text-center lg:text-start">Steganography Decryption</h2>

                <InputWithLabel
                    className="pt-10"
                    label='Insert Key'
                    value={stegaKey2}
                    onChange={(e) => setStegaKey2(e.target.value)}
                />
                <Button
                    className={buttonVariants({ variant: "destructive", size: 'default', className: 'bg-blue-500 mt-3' })}
                    onClick={hanldeDecryptStega} disabled={isLoading}
                >Decrypt Now</Button>

                <p className="text-lg font-semibold mt-10 text-green-500">Decryption Result</p>
                <div className="">
                    {extractedText && (
                        <div className="flex flex-col">
                            <p className="mt-3 font-semibold">Plain Text</p>
                            <p className="mt-1">{extractedText}</p>
                        </div>
                    )}
                    {imageUrl2 ? (
                        <div className="flex flex-col">
                            <p className="mt-7 font-semibold mb-3">Cover Image</p>
                            <img
                                alt="Result"
                                src={imageUrl2}
                                className="w-full h-auto rounded-md" // optional styling
                            />
                        </div>
                    ) : (
                        <p>There is no result or Image</p>
                    )}
                    
                </div>
            </div>
        </div>
    )
};

export default ImageContent
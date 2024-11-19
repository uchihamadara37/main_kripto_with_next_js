import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ForwardedRef, forwardRef, useState } from "react";

export const ImageInput = forwardRef(function ImageInput(
    {
        label,
        onChange,
        accept = "image/*",
        maxSize,
        boolPreview = true
    }: {
        label: string;
        onChange?: (file: File) => Promise<void>;
        accept?: string;
        maxSize?: number;
        boolPreview?: boolean;
    },
    ref: ForwardedRef<HTMLInputElement>
) {
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        if (file) {
            if (maxSize && file.size > maxSize) {
                alert("Image size is so big!, select another image");
                console.log("ukurannya ", file.size, " max : ", maxSize)
                return;
            }

            // Buat preview URL
            const url = URL.createObjectURL(file);
            setPreview(url);

            if (onChange) {
                onChange(file);
            }
        } else {
            setPreview(null);
        }
    };

    return (
        <div>
            <div className="grid w-full items-center gap-3 mt-4">
                <Label htmlFor="picture">{label}</Label>
                <Input
                    className=""
                    id="picture"
                    type="file"
                    ref={ref}
                    onChange={handleChange}
                    accept={accept}
                />
            {(preview && boolPreview) && (
                <div className=" w-full flex flex-col items-center">
                    {/* <p>Preview Image</p> */}
                    <img
                        src={preview}
                        alt="Preview"
                        className="max-w-xs rounded-lg shadow"
                    />
                </div>
            )}
            </div>
        </div>
    )
})
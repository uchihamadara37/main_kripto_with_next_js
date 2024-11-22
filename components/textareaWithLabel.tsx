import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ForwardedRef, forwardRef, useEffect } from "react";

const TextareaWithLabel = forwardRef<HTMLTextAreaElement, {
    // ... props type
    label: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
    readonly?: boolean;
}>
(({ label, placeholder, onChange, value, readonly = false }, ref) => {
    // Tambahkan event handler untuk fokus/blur
    const handleFocus = () => {
        console.log('Textarea focused')
    }

    const handleBlur = () => {
        console.log('Textarea blurred')
    }
    // export default function TextareaWithLabel({
    //     label,
    //     placeholder,
    //     onChange,
    //     value,
    // }: {
    //     label: string;
    //     placeholder?: string;
    //     onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    //     value?: string;
    //     // ref? : ForwardedRef<HTMLTextAreaElement>
    // }) {


    useEffect(() => {
        console.log('TextareaWithLabel mounted')
        return () => console.log('TextareaWithLabel unmounted')
    }, [])

    
    return (
        <div className="grid w-full gap-2 mt-4">
            <Label htmlFor="message" className="text-base">{label}</Label>
            <Textarea
                readOnly ={readonly}
                className="h-96 text-base"
                placeholder={placeholder || "Type your message"}
                id="message"
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    )
})

export default TextareaWithLabel

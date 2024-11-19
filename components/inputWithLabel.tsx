import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ForwardedRef } from "react";

export function InputWithLabel({
    label,
    placeholder,
    onChange,
    value,
    // ref,
    className
}: {
    label: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string,
    // ref?: ForwardedRef<HTMLInputElement>;
    className? : string;
}) {
    className += " grid w-full max-w-full items-center gap-2 mt-4"
    return (
        <div className={className}>
            <Label htmlFor="email">{label}</Label>
            <Input
                type="text"
                id=""
                className="w-full"
                placeholder={placeholder || "type your key"}
                value={value}
                onChange={onChange}
                // ref={ref}
            />
        </div>
    )
}
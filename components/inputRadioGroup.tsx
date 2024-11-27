"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroupDemo({
    listValue,
    label,
    value,
    onChange,
    title,
    className
}: {
    listValue: string[];
    label: string;
    title: string;
    value?: string;
    onChange?: (value : string) => void;
    className?: string
}) {
    const [position, setPosition] = React.useState(value || "empty")

    const handleValueChange = (newValue: string) => {
        setPosition(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant="outline" className={className}>{label}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={handleValueChange}>
                    {listValue.map((val : string, key : number) => (
                        <DropdownMenuRadioItem 
                        value={val}
                        key={key}
                        >{val}</DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

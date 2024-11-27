"use client"
import Link from 'next/link'
import TextareaWithLabel from '@/components/textareaWithLabel'
import { InputWithLabel } from '@/components/inputWithLabel'
import { Button, buttonVariants } from "@/components/ui/button";
import React, { useState, useCallback, useEffect, useRef } from 'react'
// import CryptoJS from 'kripto-js'
import { ImageInput } from '@/components/inputFile';
import { DropdownMenuRadioGroupDemo } from '@/components/inputRadioGroup';
import TextContent from '@/components/miniPages/textContent';
import FileContent from '@/components/miniPages/fileContent';
import ImageContent from '@/components/miniPages/imageContent';


type ContentType = 'text' | 'image' | 'file';


export default function Home() {

    

    // const inputRef = useRef<HTMLTextAreaElement>(null);
    // const outputRef = useRef<HTMLTextAreaElement>(null);

    const [activeContent, setActiveContent] = useState<ContentType>('text');

    

    const renderContent = () => {
        switch (activeContent) {
            case 'text':
                return <TextContent 
                />;
            case 'image':
                return <ImageContent 
                
                />;
            case 'file':
                return <FileContent />;
            default:
                return <TextContent 
                />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-primary p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-lg lg:text-2xl font-bold text-primary-foreground">Alfiander_ShadcnUI</Link>
                    {/* <div className="top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2"> */}
                    <div className="flex flex-row gap-1 lg:gap-4">
                        <Button
                            onClick={() => setActiveContent('text')}
                            className={buttonVariants({ variant: "outline", className: activeContent === 'text' ? 'bg-slate-100 text-slate-800' : 'bg-slate-900 text-slate-50' })}
                        >
                            Text
                        </Button>
                        <Button
                            onClick={() => setActiveContent('image')}
                            variant="outline"
                            className={buttonVariants({ variant: "outline", className: activeContent === 'image' ? 'bg-slate-100 text-slate-800' : 'bg-slate-900 text-slate-50' })}
                        >
                            Image
                        </Button>
                        <Button
                            onClick={() => setActiveContent('file')}
                            variant="outline"
                            className={buttonVariants({ variant: "outline", className: activeContent === 'file' ? 'bg-slate-100 text-slate-800' : 'bg-slate-900 text-slate-50' })}
                        >
                            File
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <main className="flex-grow container mx-auto py-8">
                {renderContent()}


            </main>
        </div>
    )
}
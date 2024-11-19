const FileContent = () => (
    <div className="flex flex-wrap sm:flex-nowrap sm:flex-col md:flex-row gap-4">

        {/* <div className="w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-cyan-500">Input File</h2>
            <p className='text-lg'>Please insert the message you want to encrypt here...</p>
            <TextareaWithLabel
                ref={inputRef}
                label='Your message'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
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
            </div>
        </div>
        <div className="w-full md:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-green-500">Message Result</h2>
            <p className='text-lg'>Please insert your chipper text in here if you want to decrypt message.</p>

            <TextareaWithLabel
                ref={outputRef}
                label='Your chipperText message'
                value={outputText}
                onChange={(e) => setOutputText(e.target.value)}
            />
        </div> */}
    </div>
);

export default FileContent;
"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatTanggalLahir, formatTanggalIndonesia } from "@/lib/formattingTanggal";
import { InputWithLabel } from '../inputWithLabel';
import { Label } from '@radix-ui/react-label';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { downloadEncryptedFile, encryptFile, stringToDownloadableFile, stringToFile } from '@/lib/encryptionFile';
import { saveAs } from "file-saver"

type allRiwayat = {
  nama_pasien: string,
  nik: number,
  id: number,
  id_user: number,
  keluhan: string,
  keterangan: string | null,
  id_admin: number,
  timestamp: string,
  name_admin: string
}
type user = {
  id: number,
  name: string,
  email: string,
  nik: string,
  birth_date: string,
  status: string | null,
  role: string | null,
  address: string | null,
  gender: string | null
}

const TableExportExcel = ({
  allRiwayat,
  allUser
}: {
  allRiwayat: allRiwayat[];
  allUser: user[]
}) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const [useEncrypt, setUseEncrypt] = useState(false)
  const [key, setKey] = useState('')
  const [text, setText] = useState('')
  const [showUser, setShowUser] = useState("user")
  const [allRiwayatBulan, setAllRiwayatBulan] = useState<allRiwayat[]>([])


  useEffect(() => {

  }, [])

  const exportToExcel = () => {
    if (!tableRef.current) return;

    const fileName = prompt("Masukkan nama file:", "tabel_export.xlsx");
    if (!fileName) return;

    // Konversi tabel HTML ke worksheet
    const ws = XLSX.utils.table_to_sheet(tableRef.current);

    // Buat workbook baru
    const wb = XLSX.utils.book_new();

    // Tambahkan worksheet ke workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Export ke file Excel (.xlsx)
    const excelData = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelData], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Gunakan file-saver untuk menampilkan dialog save
    // saveAs(blob, "tabel_export_riwayat_pukesmas.xlsx");
    saveAs(blob, fileName.endsWith(".xlsx") ? fileName : `${fileName}.xlsx`);

  };

  const handleEncrypt = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!tableRef.current) return;

    // Konversi tabel HTML ke worksheet
    const ws = XLSX.utils.table_to_sheet(tableRef.current);

    // Buat workbook baru
    const wb = XLSX.utils.book_new();

    // Tambahkan worksheet ke workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Export ke file Excel (.xlsx)
    const excelData = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const fileBlob = new Blob([excelData], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const file = new File([fileBlob], "tabel_export.xlsx", {
      type: fileBlob.type,
    });

    if (!file || !key) {
      alert("file excel or key not found")
      return;
    }


    try {
      // const file = event.target.files[0];
      console.log(file)
      console.log("mulai encode")
      const hasil: string = await encryptFile(file, key)
      console.log("hasil string dari excel: ", hasil)
      setText(hasil)

      // proses download dari string
      const fileName = prompt("Masukkan nama file:", "tabel_export.xlsx");
      if (!fileName) return;

      console.log(fileName)

      const fileUnduh = stringToFile(hasil, fileName.endsWith(".xlsx") ? fileName : `${fileName}.xlsx`, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
      downloadEncryptedFile(fileUnduh)

    } catch (err) {
      console.error(err);
    } finally {
      // set FIle2 upload buat dekripsi manual null
      setKey('')
    }
  }, [key]);

  return (
    <div className=''>
      <div className="flex flex-row justify-center">
        <button className={cn("px-3 py-2", (showUser == "user" ? "border-b-2 border-primary font-semibold" : ""))}
          onClick={() => setShowUser("user")}
        >Data Pasien</button>
        <button className={cn("px-3 py-2", (showUser == "riwayat" ? "border-b-2 border-primary font-semibold" : ""))}
          onClick={() => setShowUser("riwayat")}
        >Data Riwayat Semua Pasien</button>
        
      </div>
      {showUser == "user" && (
        <div className="">
          {/* max-h-[calc(100vh-10rem)] */}
          <h1 className="mb-3 font-semibold text-xl mt-4">Table User ke Excel</h1>
          <div className="overflow-y-auto  overflow-x-auto rounded-lg border border-orange-700">
            <Table ref={tableRef} className=''>
              <TableCaption >Semoga sehat selalu.</TableCaption>
              <TableHeader>
                <TableRow className='border-b-2 border-orange-700 bg-orange-700 bg-opacity-10'>
                  <TableHead className="font-bold text-slate-900 w-[15rem]">NIK</TableHead>
                  <TableHead className="font-bold text-slate-900 w-[18rem]">Nama</TableHead>
                  <TableHead className="font-bold text-slate-900 w-[10rem]">Tanggal lahir</TableHead>
                  <TableHead className="font-bold text-slate-900 w-[8rem]">Gender</TableHead>
                  <TableHead className="font-bold text-slate-900 w-[20rem]">Alamat</TableHead>
                  <TableHead className="font-bold text-slate-900 w-[10rem]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allUser.map((user) => (
                  <TableRow
                    className="cursor-pointer border-b border-orange-700"
                    key={user.id}
                  >
                    <TableCell className="font-normal">{user.nik}</TableCell>
                    <TableCell className='whitespace-nowrap'>{user.name}</TableCell>
                    <TableCell className='min-w-[10rem]'>{formatTanggalLahir(user.birth_date)}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell className='min-w-[15rem]'>{user.address}</TableCell>
                    <TableCell>{user.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {showUser == "riwayat" && (
        <div className="">

          <h1 className="mb-3 font-semibold text-xl mt-4">Table Semua Riwayat ke Excel</h1>
          <div className="overflow-y-auto  rounded-lg border border-orange-700">
            <Table ref={tableRef} className=''>
              <TableCaption >Semoga sehat selalu.</TableCaption>
              <TableHeader>
                <TableRow className='border-b-2 border-orange-700 bg-orange-700 bg-opacity-10'>
                  <TableHead className="font-bold text-slate-900 w-[15rem]">Nama Pasien</TableHead>
                  <TableHead className="font-bold text-slate-900 w-[12rem]">NIK</TableHead>
                  <TableHead className="font-bold text-slate-900 min-w-[10rem]">Waktu kunjungan pasien</TableHead>
                  <TableHead className="font-bold text-slate-900 w-[8rem]">Keluhan</TableHead>
                  <TableHead className="font-bold text-slate-900 min-w-[15rem]">Diagnosis</TableHead>
                  <TableHead className="font-bold text-slate-900 w-[10rem]">Dokter | Perawat</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allRiwayat.map((rw) => (
                  <TableRow
                    className="cursor-pointer border-b border-orange-700"
                    key={rw.id}
                  >
                    <TableCell className="whitespace-nowrap">{rw.nama_pasien}</TableCell>
                    <TableCell className=''>{rw.nik}</TableCell>
                    <TableCell className=''>{formatTanggalIndonesia(rw.timestamp)}</TableCell>
                    <TableCell className=''>{rw.keluhan}</TableCell>
                    <TableCell className=''>{rw.keterangan}</TableCell>
                    <TableCell className='whitespace-nowrap'>{rw.name_admin}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      

      

      <div className="flex gap-3">
        {!useEncrypt && (
          <button
            onClick={exportToExcel}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Export Ke Excel Langsung
          </button>
        )}

        <button
          onClick={() => setUseEncrypt(!useEncrypt)}
          className={cn("mt-4 text-white px-4 py-2 rounded-md", useEncrypt ? "bg-red-500" : "bg-green-700")}

        >
          {useEncrypt ? "Cancel" : "Enkripsi Terlebih Dahulu"}
        </button>

      </div>
      {useEncrypt && (
        <div className="flex flex-col mt-3 lg:w-1/2">
          <label htmlFor="">Masukan kunci enkripsi</label>
          <input
            type='text'
            className='mb-2 rounded-md mt-2'
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <Label className={cn("mt-2")}>Mulai Enkripsi</Label>
          <div className="mt-1">
            <Button
              variant={"default"}
              className=''
              onClick={(e) => handleEncrypt(e)}
            >Encrypt and Download Excel File</Button>
          </div>

        </div>

      )}
    </div>
  );
};

export default TableExportExcel;
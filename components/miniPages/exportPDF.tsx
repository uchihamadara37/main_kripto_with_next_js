import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Definisi tipe untuk autoTable
interface AutoTable {
  autoTable: (options: any) => void;
}

const TableExportComponent = () => {
  const tableRef = useRef<HTMLTableElement>(null);

  const exportToPDF = () => {
    // Pastikan telah menginstall jspdf dan jspdf-autotable
    const doc = new jsPDF() as jsPDF & AutoTable;
    
    doc.autoTable({
      html: tableRef.current!, // Menggunakan tabel yang ada
      theme: 'striped', // Tema tabel (optional)
      styles: { 
        fontSize: 9, 
        cellPadding: 2 
      },
      headStyles: { 
        fillColor: [41, 128, 186], 
        textColor: 255 
      },
      columnStyles: { 
        0: { cellWidth: 'auto' } 
      },
      margin: { top: 10 },
      didDrawPage: function(data) {
        doc.text('Laporan Tabel', data.settings.margin.left, 8);
      }
    });

    doc.save('tabel_export.pdf');
  };

  return (
    <div>
      <table ref={tableRef} className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Posisi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">john@example.com</td>
            <td className="border p-2">Manager</td>
          </tr>
          <tr>
            <td className="border p-2">Jane Smith</td>
            <td className="border p-2">jane@example.com</td>
            <td className="border p-2">Developer</td>
          </tr>
        </tbody>
      </table>

      <button 
        onClick={exportToPDF}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Export ke PDF
      </button>
    </div>
  );
};

export default TableExportComponent;
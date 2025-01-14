import jsPDF from "jspdf";
import "jspdf-autotable";

export const generatePDF = (title: string, headers: string[], data: any[]) => {
  const doc = new jsPDF();
  doc.text(title, 20, 10);
  doc.autoTable({
    head: [headers],
    body: data,
  });
  doc.save(`${title}.pdf`);
};

// Add more PDF utility functions as needed

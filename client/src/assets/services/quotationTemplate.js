import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../logo.png";

export const generateQuotationPDF = (selectedItems) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // ==================================================
  // Header
  // ==================================================

  doc.setFillColor(0, 102, 204);
  doc.rect(0, 0, pageWidth, 35, "F");

  doc.addImage(logo, "PNG", 10, 5, 22, 22);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(255);

  doc.text("AADHI ENGINEERING WORKS", pageWidth / 2, 15, {
  align: "center",
});

  doc.setFontSize(10);

  doc.text(
  "Welding • Plumbing • Electrical • Fabrication • Civil Works",
  pageWidth / 2,
  22,
  {
    align: "center",
  }
);

 doc.text(
  "10, PILLAIYAR KOIL STREET, PERIYAKALAPET, PONDICHERRY, PIN CODE: 605014",
  pageWidth / 2,
  28,
  {
    align: "center",
  }
);


  // ==================================================
  // Title
  // ==================================================

  doc.setTextColor(0);

  doc.setFontSize(18);
  doc.text("QUOTATION", pageWidth / 2, 48, {
    align: "center",
  });

  // ==================================================
  // Customer Details
  // ==================================================

  //doc.setDrawColor(180);

  //doc.roundedRect(10, 55, 190, 30, 2, 2);

  doc.setFontSize(11);

  doc.text("Customer :", 15, 65);
  doc.text("Phone :", 15, 73);

  doc.text("Location :", 120, 65);
  doc.text("Date :", 120, 73);

  // ==================================================
  // Material Table
  // ==================================================

  const rows = selectedItems.map((item, index) => [
    index + 1,
    item.name,
    item.qty,
    item.unit,
    item.rate.toLocaleString(),
    "Rs. " + item.amount.toLocaleString(),
  ]);

  autoTable(doc, {
    startY: 85,

    head: [
      [
        "S.No",
        "Material",
        "Qty",
        "Unit",
        "Rate",
        "Amount",
      ],
    ],

    body: rows,

    theme: "grid",

    headStyles: {
      fillColor: [0, 102, 204],
      textColor: [255, 255, 255],
      halign: "center",
      fontStyle: "bold",
    },

    styles: {
      fontSize: 10,
      cellPadding: 3,
      valign: "middle",
    },

    columnStyles: {
      0: { halign: "center", cellWidth: 15 },
      2: { halign: "center", cellWidth: 20 },
      3: { halign: "center", cellWidth: 25 },
      4: { halign: "right", cellWidth: 30 },
      5: { halign: "right", cellWidth: 35 },
    },

    alternateRowStyles: {
      fillColor: [248, 248, 248],
    },
  });

  // ==================================================
  // Grand Total
  // ==================================================

  const grandTotal = selectedItems.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  let y = doc.lastAutoTable.finalY + 15;

  // Total Box
  //doc.setDrawColor(0, 102, 204);

  //doc.roundedRect(125, y, 70, 16, 2, 2);

  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");

  doc.text("Grand Total", 132, y + 0.5);

  doc.text(
    "Rs. " + grandTotal.toLocaleString(),
    190,
    y + 0.5,
    {
      align: "right",
    }
  );

  // ==================================================
  // Terms
  // ==================================================

//   y += 30;

//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(11);

//   doc.text("Terms & Conditions", 10, y);

//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(9);

//   doc.text("• Goods once sold cannot be returned.", 15, y + 7);

//   doc.text("• Transportation charges extra if applicable.", 15, y + 13);

//   doc.text("• Payment should be made as per agreed terms.", 15, y + 19);

  // ==================================================
  // Signature
  // ==================================================

  const signY = y + 35;

  doc.line(140, signY, 195, signY);

  doc.setFontSize(10);

  doc.text("Authorized Signature", 147, signY + 6);

  // ==================================================
  // Footer
  // ==================================================

  doc.setFillColor(0, 102, 204);

  doc.rect(0, pageHeight - 12, pageWidth, 12, "F");

  doc.setTextColor(255);

  doc.setFontSize(9);

  doc.text(
    "AADHI Engineering Works | Puducherry | Mobile : +91 98652 19547 | Email : aadhiengineeringworks2021@gmail.com",
    pageWidth / 2,
    pageHeight - 4,
    {
      align: "center",
    }
  );

  // ==================================================
  // Save
  // ==================================================

  doc.save("AADHI_Quotation.pdf");
};
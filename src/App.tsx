import { useRef } from "react";

import { FaPrint } from "react-icons/fa";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import FrontPage from "./components/FrontPage";

function App() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleCreatePdf = async () => {
    const canvas = await html2canvas(componentRef.current as HTMLElement);
    const imageURL = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      format: "a4",
      unit: "mm",
      compress: true,
    });
    pdf.addImage(
      imageURL,
      "PNG",
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight(),
    );
    pdf.save("download.pdf");
  };

  return (
    <>
      <FaPrint onClick={handleCreatePdf} />
      <div>
        <FrontPage pageRef={componentRef} />
      </div>
    </>
  );
}

export default App;

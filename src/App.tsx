import { useRef } from "react";

import { Tooltip } from "react-tooltip";
import { FaDownload } from "react-icons/fa6";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import FrontPage from "./components/FrontPage";

import styles from "./App.module.scss";

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

  const DownloadButton = () => {
    
    return (
      <div className={styles.download}>
        <a
          data-tooltip-content="Download as PDF"
          data-tooltip-id="download"
          onClick={handleCreatePdf}
        >
          <FaDownload size={20} />
        </a>
        <Tooltip id="download" />
      </div>
    );
  };

  return (
    <div className={styles.app}>
      <DownloadButton />
      <div>
        <FrontPage pageRef={componentRef} />
      </div>
    </div>
  );
}

export default App;

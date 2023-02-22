import { Document, Page } from 'react-pdf';

export default function PDFViewer() {
  return (
    <div>
      <Document file="./Resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
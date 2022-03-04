import { Document, Page, pdfjs } from "react-pdf";
import resume from '../../assets/files/janette-castillo-resume.pdf'

export default function Contact() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
        <div>
            <div className="header">
                <h2>Resume</h2>
            </div>
            <br />
            <div className="resume">
                <p>Download my resume <a id="resume" href={resume} download > here.
                </a></p>
                <br />
                <div className="resume-pdf">
                    <Document file={resume}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>
        </div>
    )
}
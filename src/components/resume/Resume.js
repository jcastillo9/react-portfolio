import resume from '../../assets/files/janette-castillo-resume.pdf'

export default function Contact() {
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
            </div>
        </div>
    )
}
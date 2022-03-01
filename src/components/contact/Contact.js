export default function Contact() {
    return(
        <div>
          <div className="header">
                <h2>Contact Me</h2>
            </div>
           <div className="contact">
           <p>Please feel free to reach out with any questions or just to say hello!</p>
        <br/>
            <form className="message-forms">
                <div className="form-group">
                    <label for="name">Name: </label>
                    <input placeholder="Name" type="text" id="name" required="true"/>
                </div>
                <div className="form-group">
                    <label for="email">Email: </label>
                    <input placeholder="Email" type="text" id="email" required="true"/>
                </div>
                <div className="form-group">
                    <label for="messsage-box">Message:</label>
                    <input className="message-input" placeholder="Your Message" type="text" id="message-box" required="true"/>
                </div>
                <div>
                    <button href="mailto:janette.castillo91@yahoo.com" type="sumbit">Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default function Contact() {
    return(
        <div>
          <div className="header">
                <h2>Contact Me</h2>
            </div>
           <div className="contact">
           <h4>Please feel free to reach out with any questions or just to say hello!</h4>
        <br/>
        <h4>Email:
            <a href="mailto:janette.castillo91@yahoo.com"><strong>janette.castillo91@yahoo.com</strong></a>
        </h4>
        <h4>Phone:
            <strong>(312) 543-2191</strong>
        </h4>
        <br/>
            <form className="message-forms">
                <div className="form-group">
                    <label for="name">Name: </label>
                    <input placeholder="Name" type="text" id="name"/>
                </div>
                <div className="form-group">
                    <label for="email">Email: </label>
                    <input placeholder="Email" type="text" id="email"/>
                </div>
                <div className="form-group">
                    <label for="messsage-box">Message:</label>
                    <input className="message-input" placeholder="Your Message" type="text" id="message-box"/>
                </div>
                <div>
                    <button href="mailto:janette.castillo91@yahoo.com" type="sumbit">Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}
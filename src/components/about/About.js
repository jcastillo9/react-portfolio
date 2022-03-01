import profile from '../../assets/images/profile.png'
export default function About(){
    return(
        <div className="about">
            <div className="header">
                <h2>About Me</h2>
            </div>
            <div id="landing">
            <div id="landing-image">
                <img src={profile} id="image"/>
            </div>
            <div id="landing-text">
                <div id="landing-innertext">
                    <h1>Janette Castillo</h1>
                    <h2>Full Stack Web Development Student</h2>
                    <br/>
                    <h3>Hi there!</h3>
                <p>I'm <strong>Janette Castillo</strong>! I'm from Chicago and currently taking a coding bootcamp at
                    Northwestern. My favorite coding languages are currently HTML, CSS and Javascript, but I look forward to learning how to build beautiful interfaces & experiences.</p>
                <br/>
                <p>In my free time, I like to bake and decorate sugar cookies.</p>
    
                </div>
            </div>
        </div>
        </div>
    )
}
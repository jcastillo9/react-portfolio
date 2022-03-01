export default function Porfolio(){
    return(
        <div className="projects" id="projects">
            <div className="header">
                <h2>Porfolio</h2>
            </div>
            <div id="projects-list">
                <div className="caption">
                    <img src="assets/images/unpuffd.png" className="photo"/>
                    <h3><strong>UnPuffd</strong></h3>
                    <p><a target="_blank" href="https://unpuffd.herokuapp.com" className="links">Visit Live Site</a></p>
                    <p><a target="_blank" href="https://github.com/coding-p2-g2/unpuffd.git" className="links">Github
                            Repository</a></p>
                </div>
                <div className="caption">
                    <img src="assets/images/foodweather.png" id="photo"/>
                    <h3><strong>Good Weather, Good Food, and Good Mood</strong></h3>
                    <p><a target="_blank" href="https://seasons-of-food.github.io/whats-your-food-temp/" className="links">Visit Live
                            Site</a></p>
                    <p><a target="_blank" href="https://github.com/seasons-of-food/whats-your-food-temp.git" className="links">Github
                            Repository</a></p>
                </div>
                <div className="caption">
                    <img src="assets/images/workdayschedule.png" className="photo"/>
                    <h3><strong>Work Day Planner</strong></h3>
                    <p><a target="_blank" href="https://jcastillo9.github.io/day-planner/" className="links">Visit Live Site</a></p>
                    <p><a target="_blank" href="https://github.com/jcastillo9/Day-Planner.git" className="links">Github
                            Repository</a></p>
                </div>
                <div className="caption">
                    <img src="assets/images/teamgenerator.png" id="photo"/>
                    <h3><strong>Team Profile Generator</strong></h3>
                    <p><a target="_blank" href="https://watch.screencastify.com/v/M9IKMtFT8ukbXe7pcuZ0" className="links">Video Demo</a></p>
                    <p><a target="_blank" href="https://github.com/jcastillo9/team-profile-generator.git" className="links">Github
                            Repository</a></p>
                </div>
            </div>
        </div>
    )
}
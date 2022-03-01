import projects from '../../data/portfolioData'

export default function Portfolio(){
    const portfolioData = projects.map((project, index) => {
        return (
        <div id="projects-list">
            <div className="caption">
                <img src={project.imageSrc}/>
                <h3><strong>{project.title}</strong></h3>
                <p><a target="_blank" href={project.livePage} className="links">Visit Live Site</a></p>
                <p><a target="_blank" href={project.repo} className="links">Github
                    Repository</a></p>
            </div>
        </div>
        )
    })
    return (
        <div className="projects" id="projects">
        <div className="header">
            <h2>Porfolio</h2>
            {portfolioData}
        </div>
        </div>
    )
}

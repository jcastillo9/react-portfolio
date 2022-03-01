import projects from '../../data/portfolioData'

export default function Portfolio(){
    const portfolioData = projects.map((project, index) => {
        return (
            <div className="caption">
                <img src={project.imageSrc}/>
                <h3><strong>{project.title}</strong></h3>
                <p><a target="_blank" href={project.livePage} className="links">Visit Live Site</a></p>
                <p><a target="_blank" href={project.repo} className="links">Github
                    Repository</a></p>
            </div>
        )
    })
    return (
        <div className="projects" id="projects">
        <div className="header">
            <h2>Portfolio</h2>
        </div>
        <div id="projects-list">
        {portfolioData}
        </div>
        </div>
    )
}

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'

import '../styles/components/techcontainer.sass'

const tech = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
]

const TechContainer = () => {
  return (
    <section className="tech-container">
      <h2>Technologies</h2>
      <div className="tech-grid">
        {tech.map((technologies) => (
          <div className="tech-card" id={technologies.id} key={technologies.id}>
            {technologies.icon}
            <div className="tech-info">
              <h3>{technologies.name}</h3>
              <p>
                what a know about it
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default TechContainer
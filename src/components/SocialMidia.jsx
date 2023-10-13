import { FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialmidia.sass'

const socialmidia = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },
    { name: "instagram", icon: <FaInstagram /> },
]

const Socialmidia = () => {
  return (
    <section id="social-midia">
        {socialmidia.map((midia) => (
            <a href="#" className="social-btn" id={midia.name} key={midia.name}>
                {midia.icon}
            </a>
        ))}
    </section>
  )
}

export default Socialmidia
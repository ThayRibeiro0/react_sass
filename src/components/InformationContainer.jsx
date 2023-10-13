import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"
import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Phone</h3>
                <p>(714)7198170</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>Email</h3>
                <p>thaysmoiaribeiro@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Address</h3>
                <p>9134 Del Monte Ave, Yucca Valley - California - USA</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer
import Socialmidia from './Socialmidia'
import Avatar from '../img/Myphoto.png'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (<aside id='sidebar'>
    <img src={Avatar} alt="Thays Ribeiro" />
    <p className='title'>Developer</p>
    <Socialmidia />
    <InformationContainer />
    <a href="" className="btn">Curriculum Download</a>
  </aside>
  )
}

export default Sidebar
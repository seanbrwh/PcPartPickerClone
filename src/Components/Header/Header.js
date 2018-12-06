import React, { Component, Fragment } from 'react'
import {Link, withRouter} from 'react-router-dom'
import Logo from '../../Assets/pcpp.png'
import EmptyMail from '../../Assets/mail-empty-icon.png'
import Flag from '../../Assets/flag-usa.png'
import DownArrow from '../../Assets/dropdown-arrow.png'
import '../../styles/index.css'
import { connect } from 'react-redux'
import { addSession } from '../../Ducks/Reducer'
import Modal from 'react-modal'

const modalStyles = {
  content:{
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '350px',
    height                : '550px',
    background            : 'rgb(247, 247, 247)',
    borderRadius          : '8px',
    boxShadow             : '7px 7px 5px 0px rgba(0,0,0,0.34)',
    border                : '.5px solid rgba(0,0,0,.4)',
    overflowX:'hidden'
  },
  overlay:{
    background:'rgb(90, 93, 116)',
    width:'100%',
    height:'100vh',
    overflow:'hidden'
  }
}


class Header extends Component {
  constructor(){
    super()
    this.state = {
      logModal:false,
      regModal:false
    }
  }
  componentDidMount(){
    Modal.setAppElement('body')
  }
  openModal(){
    this.setState({logModal:true})
  }
  closeModal(){
    this.setState({logModal:false})
  }
  handleInput(event){
    let name = event.target.name
    let val = event.target.value
    this.setState({[name]:val})
  }
  render() {
    console.log(this.state)
    return (
      <header className='header'>
      <Modal
        isOpen={this.state.logModal}
        style={modalStyles}
        onRequestClose={()=>this.closeModal()}
      >
        
      </Modal>       
        <div className='width'>
          <div className='header'>
          <Link to='/'>
            <img className='logo' src={Logo} alt=""/>
          </Link>
                            
                {
                  this.props.session == [] ? (
                    <Fragment>
                      <ul className='head-nav'>
                        Welcome
                        <li>Sean_bw_89 |</li>
                        <li><img className='mail' src={EmptyMail} alt=""/> 0 </li>|
                        <li>Inventory</li>|
                        <li>Favorite Parts</li>|
                        <li>Saved Part Lists</li>|
                        <li>Log Out</li>|
                        <li><img className='flag' src={Flag} alt=""/> United States <img className='down-arrow' src={DownArrow} alt=""/></li>
                      </ul>
                    </Fragment>
                      
                  )
                    : (
                      <Fragment>
                        <ul className='head-nav-login'>
                          <li onClick={()=>this.openModal()}>Login</li> |
                          <li>Register</li> |
                          <li><img className='flag' src={Flag} alt=""/> United States <img className='down-arrow' src={DownArrow} alt=""/></li>
                        </ul>
                      </Fragment>
                    )
                }                            
            
          </div>          
        </div>          
      </header>
    )
  }
}

function mapState(state){
  let {session} = state;
  return {session}
}
export default withRouter(connect(mapState, { addSession })(Header))
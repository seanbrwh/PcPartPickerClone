import React, { Component, Fragment } from 'react'
import {Link, withRouter} from 'react-router-dom'
import Logo from '../../Assets/pcpp.png'
import EmptyMail from '../../Assets/mail-empty-icon.png'
import Flag from '../../Assets/flag-usa.png'
import DownArrow from '../../Assets/dropdown-arrow.png'
import smallLogo from '../../Assets/pcpp-mark.svg'
import '../../styles/index.css'
import { connect } from 'react-redux'
import { addSession } from '../../Ducks/Reducer'
import Modal from 'react-modal'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'



const logModalStyles = {
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
    boxShadow             : '2px 2px 4px 2px rgba(0,0,0,0.34)',
    border                : '.5px solid rgba(0,0,0,.4)'
  },
  overlay:{
    background:'rgb(90, 93, 116)',
    width:'100%',
    height:'100vh',
  }
}
const regModalStyles = {
  content:{
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '500px',
    height                : '850px',
    background            : 'rgb(247, 247, 247)',
    borderRadius          : '8px',
    boxShadow             : '2px 2px 4px 2px rgba(0,0,0,0.34)',
    border                : '.5px solid rgba(0,0,0,.4)'
  },
  overlay:{
    background:'rgb(90, 93, 116)',
    width:'100%',
    height:'100vh',
  }
}


class Header extends Component {
  constructor(){
    super()
    this.state = {
      logModal:false,
      regModal:false,
      regUser:'',
      regEmail: '',
      regPass: '',
      regEmailCon:'',
      regPassCon:'',
      regUserError:'',
      regEmailError:'',
      regPassError:'',
      regPassErrorNoMatch:'',
      regEmailErrorNoMatch:'',
      regUserValid:false,
      regEmailValid:false,
      regPassValid:false,
      logEmail:'',
      logPass:'',
      logUser:''
    }
  }
  componentDidMount(){
    Modal.setAppElement('body')
  }
  openLogModal(){
    this.setState({logModal:true})
  }
  closoLogModal(){
    this.setState({logModal:false})
  }
  openRegModal(){
    this.setState({regModal:true})
  }
  closeRegModal(){
    this.setState({regModal:false})
  }
  handleInput = (event) =>{
    let name = event.target.name
    let val = event.target.value
    this.setState({[name]:val})
  }

  reCaptcha(val){
    console.log('Captcha Value', val)
  }
  validate = () => {
    let {regUser,regEmail,regPass, regEmailCon, regPassCon, regUserValid,regEmailValid, regPassValid} = this.state;
    var emailRe = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    var passRe = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    if(regUser.length >= 8){
      this.setState({regUserValid:true,regUserError:''})
    }else{
      this.setState({regUserError:'Username must be atleast 8 letters long.'})
    }

    if(emailRe.test(regEmail) === true){
      this.setState({regEmailValid:true,regEmailError:''})
    }else{
      this.setState({regEmailError:'Must use a valid email'})
    }

    if(passRe.test(regPass) === true){
      this.setState({regPassValid:true, regPassError:''})
    }else{
      this.setState({regPassError:'Password must include 1 upper 1 lower and a number'})
    }

    if(regEmail !== regEmailCon){
      this.setState({regEmailErrorNoMatch:'Emails Don\'t match'})
    }else{
      this.setState({regEmailErrorNoMatch:''})
    }

    if(regPass !== regPassCon){
      this.setState({regPassErrorNoMatch:'Passwords don\'t match'})
    }else{
      this.setState({regPassErrorNoMatch:''})
    }
    if(regUserValid === true && regEmailValid === true && regPassValid === true){
      axios.post('/api/register', {regUser,regEmail,regPass}).then(res=>{
        this.props.addSession(res.data)
        this.closeRegModal()
      })
    }
  }
  login = () => {
    let {logEmail, logPass} = this.state
    axios.post('/api/login', {logEmail,logPass}).then(res=>{      
      this.props.addSession(res.data)
      this.closoLogModal()
    })
  }
  logout = () => {
    axios.get('/api/logout').then(res=>{
      this.props.addSession(res.data)
    })
  }
  render() {    
    return (
      <header className='header'>
      <Modal
        isOpen={this.state.logModal}
        style={logModalStyles}
        onRequestClose={()=>this.closoLogModal()}
      >
      <div id='login-modal'>        
        <h1>PCPartPicker - Login</h1>
        <div id='log-modal-img-con'>
          <img src={smallLogo} alt=""/>
        </div>
        <div id='log-mod-inp'>
          <label htmlFor="">Username</label>
          <input type="text" name='logEmail' onChange={this.handleInput}/>
          <label htmlFor="">Password</label>
          <input type="password" name='logPass' onChange={this.handleInput}/>
        </div>
        <div id='check-log'>
          <input type='checkbox'/>
          <p>Remember Me</p>          
        </div>
        <button onClick={this.login}>Log In</button>
        <p>Want to join? Register here. it's free!</p>
        <p>Forgot your Password?</p>
      </div>
      </Modal>
      <Modal
        isOpen={this.state.regModal}
        style={regModalStyles}
        onRequestClose={()=>this.closeRegModal()}
      >      
        <div id='reg-modal'>
          <h1>PCPartPicker - Register</h1>
          <div id='reg-modal-img-con'>
            <img src={smallLogo} alt=""/>
          </div>
          <form className="reg-modal-inp">
            <label htmlFor="">Username:</label>
              <input type="text" name='regUser' onChange={this.handleInput}/>
              <p>
                {this.state.regUserError}              
              </p>
            <label htmlFor="">E-mail:</label>
              <input type="text" name='regEmail' onChange={this.handleInput}/>
            <label htmlFor="">E-mail (again):</label>
              <input type="text" name='regEmailCon' onChange={this.handleInput}/>
              <p>
                {this.state.regEmailError}
              </p>
              <p>
                {this.state.regEmailErrorNoMatch}
              </p>
            <small>Note: An account activation email will be sent to the email address you provide.</small>
            <label htmlFor="">Password:</label>
              <input type="password" name='regPass' onChange={this.handleInput}/>
            <label htmlFor="">Password(again):</label>
              <input type="password" name='regPassCon' onChange={this.handleInput}/>
              <p>
                {this.state.regPassError}
              </p>
              <p>
                {this.state.regPassErrorNoMatch}  
              </p>
          <ReCAPTCHA
            className='recap'
            sitekey='6LeWRX8UAAAAAI4SrinrHezVcLhTG7dzguBymoO2'
            onChange={()=>this.reCaptcha()}
          />
          </form>          
          <button onClick={this.validate}>Register</button>
        </div>
      </Modal>
        <div className='width'>
          <div className='header'>
          <Link to='/'>
            <img className='logo' src={Logo} alt=""/>
          </Link>
                            
                {
                  this.props.session.user_id ? (
                    <Fragment>
                      <ul className='head-nav'>
                        Welcome
                        <li>{this.props.session.username} |</li>
                        <li><img className='mail' src={EmptyMail} alt=""/> 0 </li>|
                        <li>Inventory</li>|
                        <li>Favorite Parts</li>|
                        <li>Saved Part Lists</li>|
                        <li onClick={this.logout}>Log Out</li>|
                        <li><img className='flag' src={Flag} alt=""/> United States <img className='down-arrow' src={DownArrow} alt=""/></li>
                      </ul>
                    </Fragment>
                      
                  )
                    : (
                      <Fragment>
                        <ul className='head-nav-login'>
                          <li onClick={()=>this.openLogModal()}>Login</li> |
                          <li onClick={()=>this.openRegModal()}>Register</li> |
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


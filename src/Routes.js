import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Guide from './Components/Guide/Guide'
import Build from './Components/Build/Build'
import List from './Components/List/List'
import Comp_case from './Components/PC_components/Comp_Case/Comp_case'
import Case_Fan from './Components/PC_components/Case_Fan/Case_Fan'
import Computer_Speakers from './Components/PC_components/Computer_Speakers/Computer_Speakers'
import Cpu from './Components/PC_components/Cpu/Cpu'
import CpuCooler from './Components/PC_components/CpuCooler/CpuCooler'
import External_Storage from './Components/PC_components/External_Storage/External_Storage'
import Fan_Controller from './Components/PC_components/Fan_Controller/Fan_Controller'
import Headphones from './Components/PC_components/Headphones/Headphones'
import Keyboard from './Components/PC_components/Keyboard/Keyboard'
import Memory from './Components/PC_components/Memory/Memory'
import Monitor from './Components/PC_components/Monitor/Monitor'
import MotherBoard from './Components/PC_components/MotherBoard/MotherBoard'
import Mouse from './Components/PC_components/Mouse/Mouse'
import Operating_System from './Components/PC_components/Operating_System/Operating_System'
import Optical_Drive from './Components/PC_components/Optical_Drive/Optical_Drive'
import Power_Supply from './Components/PC_components/Power_Supply/Power_Supply'
import Software from './Components/PC_components/Software/Software'
import Sound_Card from './Components/PC_components/Sound_Card/Sound_Card'
import PCStorage from './Components/PC_components/PCStorage/PCStorage'
import Thermal_Compound from './Components/PC_components/Thermal_Compound/Thermal_Compund'
import UPS from './Components/PC_components/UPS/UPS'
import Video_Card from './Components/PC_components/Video_Card/Video_Card'
import Wired_NetWork_Card from './Components/PC_components/Wired_NetWork_Card/Wired_NetWork_Card'
import Wireless_Network_Card from './Components/PC_components/Wireless_Network_Card/Wireless_Network_Card'
import CpuPage from './Components/PC_components/Cpu/CpuPage'
import CpuCoolerPage from './Components/PC_components/CpuCooler/CpuCoolerPage'
import MotherboardPage from './Components/PC_components/MotherBoard/MotherboardPage'


export default(
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/list' component={List}/>
    <Route path='/guide' component={Guide}/>
    <Route path='/build' component={Build}/>
    <Route path='/comp-case' component={Comp_case}/>
    <Route path='/case-fan' component={Case_Fan}/>
    <Route path='/speakers' component={Computer_Speakers}/>
    <Route exact path='/cpu' component={Cpu}/>
    <Route exact path='/cpu-cooler' component={CpuCooler}/>
    <Route path='/external-storage' component={External_Storage}/>
    <Route path='/fan-controller' component={Fan_Controller}/>
    <Route path='/headphones' component={Headphones}/>
    <Route path='/Keyboard' component={Keyboard}/>
    <Route path='/memory' component={Memory}/>
    <Route path='/monitor' component={Monitor}/>
    <Route exact path='/motherboard' component={MotherBoard}/>
    <Route path='/mouse' component={Mouse}/>
    <Route path='/os' component={Operating_System}/>
    <Route path='/optical' component={Optical_Drive}/>
    <Route path='/power-supply' component={Power_Supply}/>
    <Route path='/software' component={Software}/>
    <Route path='/sound-card' component={Sound_Card}/>
    <Route path='/internal-storage' component={PCStorage}/>
    <Route path='/thermal-compound' component={Thermal_Compound}/>
    <Route path='/ups' component={UPS}/>
    <Route path='/video-card' component={Video_Card}/>
    <Route path='/wired-network-card' component={Wired_NetWork_Card}/>
    <Route path='/wireless-network-card' component={Wireless_Network_Card}/>
    <Route path='/cpu/:id' component={CpuPage}/>
    <Route path='/cpu-cooler/:id' component={CpuCoolerPage}/>
    <Route path='/motherboard/:id' component={MotherboardPage}/>
  </Switch>
)
import React from 'react'
import './main.css'
import NavigationBar from '../NavBar/NavigationBar/NavigationBar'
import InfoPages from '../SectionOne/infoPages/InfoPages'
import Colleges from '../Colleges/Colleges'
export default function Main() {
  return (
    <div>
      <NavigationBar/>
      <InfoPages />
      <Colleges/>
    </div>
  )
}

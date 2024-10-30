import React from 'react'
import './main.css'
import NavigationBar from '../NavBar/NavigationBar/NavigationBar'
import InfoPages from '../SectionOne/infoPages/InfoPages'
import Colleges from '../Colleges/Colleges'
import SectionTwo from '../sectionTwo/SectionTwo'
import Galary from '../Galary/Galary'
import Gratuated from '../gratuated/Gratuated'
import Footer from '../footer/Footer'
import StudentTestimonials from '../StudentTestimonials/StudentTestimonials'
import AlumniNetwork from '../AlumniNetwork/AlumniNetwork'
export default function Main() {
  return (
    <div>
      <NavigationBar flag={true} />
      <InfoPages />
      <Colleges/>
      <SectionTwo/>
      <Galary/>
      <StudentTestimonials/>
      <Gratuated/>
      <AlumniNetwork/>
      <Footer/>
    </div>
  )
}

import './App.css';
import Main from './homepage/Main/Main';
import Login from './Login/Login';
import StudentDashBoard from './StudentDashBoard/StudentDashBoard';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import StudentProfile from './StudentDashBoard/StudentProfile/StudentProfile';
import StudentAdmissions from './StudentDashBoard/StudentAdmissions/StudentAdmissions';
import StudnetAssess from './StudentDashBoard/StudentAssess/StudnetAssess';
import Transcript from './StudentDashBoard/StudentTranscript/Transcript';
import StudentAttendance from './StudentDashBoard/StudentAttendance/StudentAttendance';
import StudentRegister from './StudentDashBoard/StudentRegister/StudentRegister';
import StudentComplaints from './StudentDashBoard/StudentComplaints/StudentComplaints';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentDashBoard />}>
        <Route path="admissions" element={<StudentAdmissions />} />
        <Route path="track" element={<StudentAttendance />} />
        <Route path="assess" element={<StudnetAssess />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="register" element={<StudentRegister />} />
        <Route path="transcript" element={<Transcript />} />
        <Route path='complaints' element={<StudentComplaints/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
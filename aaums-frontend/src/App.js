import "./App.css";
import Main from "./homepage/Main/Main";
import Login from "./Login/Login";
import StudentDashBoard from "./StudentDashBoard/StudentDashBoard";
import FacultyDashBoard from "./FacultyDashboard/FacultyDashboard";

import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StudentProfile from "./StudentDashBoard/StudentProfile/StudentProfile";
import StudentAdmissions from "./StudentDashBoard/StudentAdmissions/StudentAdmissions";
import StudnetAssess from "./StudentDashBoard/StudentAssess/StudnetAssess";
import Transcript from "./StudentDashBoard/StudentTranscript/Transcript";
import StudentAttendance from "./StudentDashBoard/StudentAttendance/StudentAttendance";
import StudentRegister from "./StudentDashBoard/StudentRegister/StudentRegister";
import StudentComplaints from "./StudentDashBoard/StudentComplaints/StudentComplaints";

import FacultyAttendance from "./FacultyDashBoard/FacultyAttendance/FacultyAttendance";
import FacultyPerformance from "./FacultyDashBoard/FacultyPerformance/FacultyPerformance";
import FacultyProfile from "./FacultyDashBoard/FacultyProfile/FacultyProfile";
import GradesAndAssesments from "./FacultyDashBoard/GradesAndAssesments/GradesAndAssesments";
import SubmitAndApprove from "./FacultyDashBoard/Submit&ApproveGrades/Submit&ApproveGrades";
import TeachingLoad from "./FacultyDashBoard/TeachingLoad/TeachingLoad";
import TrackAttendance from "./FacultyDashBoard/TrackAttendance/TrackAttendance";

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
          <Route path="complaints" element={<StudentComplaints />} />
        </Route>

        <Route path="/faculty-dashboard" element={<FacultyDashBoard />}>
          <Route path="track" element={<FacultyAttendance />} />
          <Route path="Performance" element={<FacultyPerformance />} />
          <Route path="assess" element={<GradesAndAssesments />} />
          <Route path="profile" element={<FacultyProfile />} />
          <Route path="Submit&Approve" element={<SubmitAndApprove />} />
          <Route path="TeachingLoad" element={<TeachingLoad />} />
          <Route path="track" element={<TrackAttendance />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// const FacultyMenuItems = [
//   { label: "Profile", path: "profile", icon: "fas fa-user" },
//   { label: "Submit&Approve", path: "Submit&Approve", icon: "fas fa-school" },
//   { label: "Attendance", path: "track", icon: "fas fa-check-circle" },
//   { label: "TrackAttendance", path: "track", icon: "fas fa-check-circle" },
//   { label: "Performance", path: "Performance", icon: "fas fa-chart-line" },

//   { label: "Grade&Assessment", path: "assess", icon: "fas fa-chart-line" },
//   { label: "TeachingLoad", path: "TeachingLoad", icon: "fas fa-file-alt" },
// ];

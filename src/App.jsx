import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import StudentPage from "./pages/StudentPage";
import AlumniPage from "./pages/AlumniPage";
import FacultyPage from "./pages/FacultyPage";
import FacultyDashboard from "./components/Faculty/FacultyDashboard";
import StudentDashboard from "./components/Student/StudentDashboard";
import StudentError from "./components/Student/StudentError";
import AlumniDashboard from "./components/Alumni/AlumniDashboard";
import AlumniProfile from "./components/Alumni/AlumniProfile";
import ChatRoom from "./components/Student/ChatRoom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/student/signin" element={<StudentPage signState={0} />}></Route>
        <Route path="/student/signup" element={<StudentPage signState={1} />}></Route>
        <Route path="/alumni/signin" element={<AlumniPage signState={0} />}></Route>
        <Route path="/alumni/signup" element={<AlumniPage signState={1} />}></Route>
        <Route path="/faculty/signin" element={<FacultyPage signState={0} />}></Route>
        <Route path="/faculty/signup" element={<FacultyPage signState={1} />}></Route>
        <Route path="/faculty/dashboard" element={<FacultyDashboard />}></Route>
        <Route path="/student/dashboard" element={<StudentDashboard />}></Route>
        <Route path="/student/error" element={<StudentError />}></Route>
        <Route path="/alumni/dashboard" element={<AlumniDashboard />}></Route>
        <Route path="/alumni/profile" element={<AlumniProfile />}></Route>
        <Route path="/student/chat" element={<ChatRoom />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

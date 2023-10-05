import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import StudentPage from "./pages/StudentPage";
import AlumniPage from "./pages/AlumniPage";
import FacultyPage from "./pages/FacultyPage";

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
      </Routes>
    </BrowserRouter>
  )
}

export default App

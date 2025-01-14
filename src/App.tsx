import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddStudent from "./pages/StudentManagement/AddStudent";
import StudentList from "./pages/StudentManagement/StudentList";
import StudentReport from "./pages/StudentManagement/StudentReport";
import AddTeacher from "./pages/TeacherManagement/AddTeacher";
import TeacherList from "./pages/TeacherManagement/TeacherList";
import TeacherReport from "./pages/Reports/TeacherReport";
import FeeList from "./pages/FeeManagement/FeeList";
import FeeReport from "./pages/Reports/FeeReport";
import AttendanceReport from "./pages/Reports/AttendanceReport";
import GradeReport from "./pages/Reports/GradeReport";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/students/list" element={<StudentList />} />
          <Route path="/students/report" element={<StudentReport />} />
          <Route path="/teachers/add" element={<AddTeacher />} />
          <Route path="/teachers/list" element={<TeacherList />} />
          <Route path="/teachers/report" element={<TeacherReport />} />
          <Route path="/fees/list" element={<FeeList />} />
          <Route path="/fees/report" element={<FeeReport />} />
          <Route path="/attendance/report" element={<AttendanceReport />} />
          <Route path="/grades/report" element={<GradeReport />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

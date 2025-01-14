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
import LibraryForm from "./components/library/LibraryForm";
import LibraryTable from "./components/library/LibraryTable";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Navbar />
            <div style={{ padding: "16px" }}>
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
                <Route
                  path="/attendance/report"
                  element={<AttendanceReport />}
                />
                <Route path="/grades/report" element={<GradeReport />} />
                <Route path="/library/add" element={<LibraryForm />} />
                <Route
                  path="/library/list"
                  element={<LibraryTable books={[]} />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

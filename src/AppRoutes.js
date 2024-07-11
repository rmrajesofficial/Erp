import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import StudentPortalLogin from './Auth/StudentPortalLogin'
import { useAuth } from './Context/AuthContext'
import Layout from './Layout/Layout'
import StudentProfile from './Pages/Profile/StudentProfile'
import MyCourses from './Pages/Course/MyCourses'
import FeePayment from './Pages/FeePayment/FeePayment'
import CourseSelection from './Pages/Course/CourseSelection'
import Services from './Pages/Services/Services'
import ExamRegistration from './Pages/Exam/ExamRegistration'
import HallAdmitCard from './Pages/Exam/HallAdmitCard'
import PaymentInstructions from './Pages/FeePayment/PaymentInstructions'
import GradeCard from './Pages/Exam/GradeCard'

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={isAuthenticated ? <Navigate to={'/dashboard'} replace /> : <StudentPortalLogin />} />
                <Route path="/dashboard" element={isAuthenticated ? <Layout /> : <Navigate to={'/login'} replace />} >
                    <Route index element={<Home />} />
                    <Route path='profile' element={<StudentProfile />} />
                    <Route path='courses' element={<MyCourses />} />
                    <Route path='fee-payment' element={<FeePayment />} />
                    <Route path='fee-payment/instructions' element={<PaymentInstructions />} />
                    <Route path='course-selection' element={<CourseSelection />} />
                    <Route path='services' element={<Services />} />
                    <Route path='exam-registration' element={<ExamRegistration />} />
                    <Route path='hall-admit-card' element={<HallAdmitCard />} />
                    <Route path='grade-card' element={<GradeCard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginPage from "../components/Login"
import SignupForm from "../components/Signup"
import EmailConfirmation from "../components/Signupemail"
import ConfirmationStatus from "../components/ConfirmationStatus"
import PasswordReset from "../components/ForgetPassword"
import RecoveryEmailSent from "../components/RecoveryEmailSent"
import NewPassword from "../components/ResetPassword"
import SetPassword from "../components/finaliseReg"
const AppRouter=()=>{
    return (
        <Routes>
        <Route path="/" element={<LoginPage />} />    
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/confirmation-status" element={<ConfirmationStatus />} />
        <Route path="/forgot-password" element={<PasswordReset />} />
        <Route path="/recovery-email-sent" element={<RecoveryEmailSent />} />
        <Route path="/reset-password" element={<NewPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
      </Routes>
    )
}

export default AppRouter
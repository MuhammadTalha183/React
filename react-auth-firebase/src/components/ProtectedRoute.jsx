import React from 'react'
import { Navigate } from 'react-router'
import { getAuth } from 'firebase/auth'
import app from '../firebase/config'

function ProtectedRoute({ children }) {

    const auth = getAuth(app)

    const user = auth.currentUser

    if (!user) {
        return <Navigate to="/login" />
    }

    return children
}

export default ProtectedRoute
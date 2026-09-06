

import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../firebase/config'

const auth = getAuth(app)

function ProtectedRoute({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }

            setLoading(false)
        })

        return () => unsubscribe()

    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return children
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute

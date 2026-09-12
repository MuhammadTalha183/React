import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        console.log("user", user);
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();

  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
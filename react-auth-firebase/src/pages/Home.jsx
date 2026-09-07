
// export default Home
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { collection, getDocs ,doc, deleteDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';

// Ensure this import matches how you exported db in your config file
import { db } from "../firebase/config.js"; 
import Cards from '../components/Cards.jsx';

function Home() {
  // State to hold the array of fetched users

      const notify = (message) => toast(message);
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      // Changed collection to "Users" to match your Signup database setup
      const querySnapshot = await getDocs(collection(db, "Users"));
      const usersArray = [];
      
      querySnapshot.forEach((doc) => {
        usersArray.push({ id: doc.id, ...doc.data() });
      });

      setUsers(usersArray);
    } catch (error) {
      console.error("Error fetching users from Firestore: ", error);
    } finally {
      setLoading(false);
    }
  };

  async function deleteHandler(userId) {

    try {
      const deleteUser = await deleteDoc(doc(db, "Users", userId));
      notify("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user from Firestore: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, [deleteHandler]); // Re-fetch data when a user is deleted

  return (
   
    <div className="min-h-screen bg-slate-950 text-slate-100">
       <ToastContainer />
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className='text-center font-bold text-3xl md:text-4xl bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-10'>
          Registered Users
        </h1>

        <Cards loading={loading} users={users}  deleteDoc={deleteHandler} />
      </div>
    </div>
  );
}

export default Home;


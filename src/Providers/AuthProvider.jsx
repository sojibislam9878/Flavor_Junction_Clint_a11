import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebaseConfig";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


    // login with email and password
    const createUserWithEmail = (email, password, toast) => {
        // setLoading(true);
        if (password.length < 6) {
          return toast.warn("Password must be at least 6 characters long", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        if (!/^(?=.*[a-z]).*$/.test(password)) {
          return toast.warn("Password must contain a lowercase letter", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        if (!/^(?=.*[A-Z]).*$/.test(password)) {
          return toast.warn("Password must contain a uppercase letter", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        toast.success("Account created successfuly", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return createUserWithEmailAndPassword(auth, email, password);
      };
      //   userlogin
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

   // update user
   const updateUser = (name, photo) => {
    // setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    // .then(() => {
    // Profile updated!
    // ...
    // }).catch((error) => {
    // An error occurred
    // ...
    // });
  };
   //   user
   const [user, setUser] = useState(null);


   //   check user
   useEffect(() => {
     const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email
      const logingUser = {email: userEmail}
      setUser(currentUser)
      console.log(currentUser);

       if (currentUser) {
         axios.post("http://localhost:3000/jwt",logingUser, {withCredentials : true})
         .then(res=>{
          console.log(res.data);
         })
       }else{
        axios.post("http://localhost:3000/logout", logingUser,{
          withCredentials:true
        }).then(res=>{
          console.log(res.data);
        })
       }
    //    setLoading(false);
     });
     return () => unsubcribe();
   }, [user?.email]);

    // logout
  const logout = () => {
    setUser(null);
    signOut(auth);
  };






  const values = {
    createUserWithEmail,
    login,
    updateUser,
    user, 
    logout

  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthProvider;

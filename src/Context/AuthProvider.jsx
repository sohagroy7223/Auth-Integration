import { Children } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    createUser,
  };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;

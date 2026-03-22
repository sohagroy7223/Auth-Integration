import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="max-w-sm mx-auto mt-6">
      <h3>{user.email}</h3>
    </div>
  );
};

export default Profile;

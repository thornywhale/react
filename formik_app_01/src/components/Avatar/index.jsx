import React, { useContext } from "react";
import { UserContext } from "../../contexts";

const Avatar = () => {
  const avatar = useContext(UserContext);
  return (
    <div>
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;

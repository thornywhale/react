import { useState } from "react";

const useAuthUser = (authUser) => {
  const [user, setUser] = useState(authUser);
  const changeUser = (id) => {
    setUser({ ...user, isSelect: !user.isSelect });
  };
  return { user, changeUser };
};

export default useAuthUser;
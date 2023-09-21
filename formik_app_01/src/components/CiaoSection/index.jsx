import React, { useState } from "react";
import CiaoList from "./CiaoList";
import CiaoSort from "./CiaoSort";
import Heading from "./Heading";
import { USERS } from "../../constants";

const CiaoSection = () => {
  const [users, setUsers] = useState(USERS);
  const [isSortIdUp, setIsSortIdUp] = useState(true);
  const [isSortFirstNameUp, setIsSortFirstNameUp] = useState(true);
  const [isSortLastNameUp, setIsSortLastNameUp] = useState(true);
  return (
    <>
      <Heading />
      <CiaoSort
        users={users}
        isSortIdUp={isSortIdUp}
        isSortFirstNameUp={isSortFirstNameUp}
        isSortLastNameUp={isSortLastNameUp}
      />
      <CiaoList users={users} />
    </>
  );
};

export default CiaoSection;

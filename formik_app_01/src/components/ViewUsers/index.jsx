import React from "react";
import Error from "../Error";
import Spinner from "../Spinner";
import { getUsersJSON } from "../../api";
import useLoaderData from "../../hooks/useLoaderData";
import styles from "./ViewUsers.module.scss";

const ViewUsers = (props) => {
  const { data, isFetching, error } = useLoaderData(getUsersJSON);
  if (error) {
    return <Error />;
  }
  return (
    <div className={styles.contentDiv}>
      {isFetching && <Spinner />}
      {isFetching || data.map(({ id, name }) => <p key={id}>{name}</p>)}
    </div>
  );
};

export default ViewUsers;

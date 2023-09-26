import React from "react";
import Error from "../Error";
import Spinner from "../Spinner";
import { getEventsJSON } from "../../api";
import useLoaderData from "../../hooks/useLoaderData";
import styles from "./ViewEvents.module.scss";

const ViewEvents = (props) => {
  const { data, isFetching, error } = useLoaderData(getEventsJSON);
  if (error) {
    return <Error />;
  }
  return (
    <div className={styles.contentDiv}>
      {isFetching && <Spinner />}
      {isFetching ||
        data.map(({ id, title, date }) => (
          <article key={id}>
            <h3>{title}</h3>
            <h4>{date}</h4>
          </article>
        ))}
    </div>
  );
};

export default ViewEvents;

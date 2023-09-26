import React from "react";
import Error from "../Error";
import Spinner from "../Spinner";
import { getProductsJSON } from "../../api";
import useLoaderData from "../../hooks/useLoaderData";
import styles from "./ViewProducts.module.scss";

const ViewProducts = (props) => {
  const { data, isFetching, error } = useLoaderData(getProductsJSON);
  if (error) {
    return <Error />;
  }
  return (
    <div className={styles.contentDiv}>
      {isFetching && <Spinner />}
      <ul>
        {isFetching ||
          data.map(({ id, title, price }) => (
            <li key={id}>
                <h3>{title}</h3>
              <p>{price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ViewProducts;

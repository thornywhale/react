import React, { useReducer, useEffect } from "react";
import reducer from "./reducer";
import ACTION_TYPES from "./actionTypes";
import Spinner from "../Spinner";
import Error from "../Error";
import { getChatJSON } from "../../api";
import styles from "./Chat.module.scss";

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
    error: null,
    isFetching: false,
  });

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.DATA_IS_FETCHING });
    getChatJSON()
      .then((data) =>
        dispatch({
          type: ACTION_TYPES.DATA_SUCCESS,
          payload: data,
        })
      )
      .catch((error) =>
        dispatch({
          type: ACTION_TYPES.DATA_ERROR,
          payload: error,
        })
      );
  }, []);

  if (state.error) {
    return <Error />;
  }

  return (
    <section>
      <h2 style={{ color: "white" }}>Chat</h2>
      <div className={styles.chatDiv}>
        {state.isFetching && <Spinner />}
        {state.messages.map((msg) => (
          <article key={msg.id} className={styles.contentDiv}>
            <h3>{msg.body}</h3>
            <p>
              <em>author:</em> {msg.author.username}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Chat;

import React, { useReducer, useEffect } from "react";
import reducer from "./reducer";
import ACTION_TYPES from "./actionTypes";
import Spinner from "../Spinner";
import Error from "../Error";
import { getChatJSON } from "../../api/index";

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
      // fetch("/data/chat.json")
      .then((response) => response.json())
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
      <h2>Chat</h2>
      {state.isFetching && <Spinner />}
      {state.messages.map((msg) => (
        <article key={msg.id}>
          <h3>{msg.body}</h3>
          <p>author: {msg.author.username}</p>
        </article>
      ))}
    </section>
  );
};

export default Chat;

import { STATUS_MENU } from "../../constants";

const headerReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case STATUS_MENU.OPEN: {
      return {
        ...state,
        opened: true,
      };
    }
    case STATUS_MENU.CLOSE: {
      return {
        ...state,
        opened: false,
      };
    }
    default:
      return state;
  }
};

export default headerReducer;

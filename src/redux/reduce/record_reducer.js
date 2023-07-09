const init = {
  current_value: 0,
};

function record_reducer(state = { current_value: 0, loading: false }, action) {
  const { type, payload } = action;
  switch (type) {
    case "COUNT-CHECK":
      if (payload === "new") {
        return {
          ...state,
          current_value: 1,
        };
      } else {
        return {
          ...state,
          current_value: payload.count,
        };
      }

    case "SET-LOADING":
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
}


export default record_reducer;

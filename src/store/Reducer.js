const initialState = {
  products: [],
  basket: [],
  fav: [],
  accountData: [],
  total: [],
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_BASKET":
      return { ...state, basket: action.payload };
    case "SET_FAV":
      return { ...state, fav: action.payload };
    default:
      return state;
  }
}

export default Reducer;

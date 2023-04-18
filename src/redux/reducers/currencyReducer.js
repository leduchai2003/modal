import { SET_CURRENCY } from "../actions/currencyActions";

const initState = {
  currencySymbol: "₫",
  currencyName: "VND",
  currencyRate: 1000
};

const currencyReducer = (state = initState, action) => {
  if (action.type === SET_CURRENCY) {
    const currencyName = action.payload.currencyName;

    if (currencyName === "VND") {
      return {
        ...state,
        currencySymbol: "₫",
        currencyRate: action.payload.currencyRate,
        currencyName
      };
    }
  }

  return state;
};

export default currencyReducer;

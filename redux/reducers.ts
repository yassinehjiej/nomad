import { data } from "../data/pharmacies";
import {
  SWIPE_ACTION,
  VIEW_MAP,
  SHOW_FILTERS,
  SET_CURRENT_LOCATION,
  SET_DRUG_STORES,
  PAN_RESPONDER,
  SET_DESIRED_LOCATION,
  SET_DRUG_STORE,
  SWIPE_ACTION_PHARMA
} from "./constants";

const initialState: any = {
  mapVisible: false,
  swipeAction: "",
  swipeActionPharma: "",
  showFilters: true,
  desiredLocation:null,
  drugStores: [],
  drugStore:null,
  panResponder: true,
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case VIEW_MAP:
      return { ...state, mapVisible: action.payload };
    case SWIPE_ACTION:
      return { ...state, swipeAction: action.payload };
      case SWIPE_ACTION_PHARMA:
        return { ...state, swipeActionPharma: action.payload };
    case SHOW_FILTERS:
      return { ...state, showFilters: action.payload };
    case SET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case SET_DESIRED_LOCATION:
      return { ...state, desiredLocation: action.payload };
    case SET_DRUG_STORES:
      return { ...state, drugStores: action.payload };
    case SET_DRUG_STORE:
      return { ...state, drugStore: action.payload };
    case PAN_RESPONDER:
      return { ...state, panResponder: action.payload };
    default:
      return state;
  }
};

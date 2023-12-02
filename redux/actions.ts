import { DrugStoreDataStructure } from "../types";
import {
  VIEW_MAP,
  SWIPE_ACTION,
  SHOW_FILTERS,
  SET_CURRENT_LOCATION,
  SET_DRUG_STORES,
  PAN_RESPONDER,
  SET_DESIRED_LOCATION,
  SET_DRUG_STORE,
  SWIPE_ACTION_PHARMA
} from "./constants";

export const showMapAction = (action: boolean) => ({
  type: VIEW_MAP,
  payload: action,
});

export const swipeAction = (action: string) => ({
  type: SWIPE_ACTION,
  payload: action,
});

export const swipeActionPharma = (action: string) => ({
  type: SWIPE_ACTION_PHARMA,
  payload: action,
});

export const showFilters = (action: boolean) => ({
  type: SHOW_FILTERS,
  payload: action,
});

export const setCurrentLocation = (action: { lat: number; lng: number }) => ({
  type: SET_CURRENT_LOCATION,
  payload: action,
});

export const setDesiredLocation = (action: { lat: number; lng: number }) => ({
  type: SET_DESIRED_LOCATION,
  payload: action,
});


export const setDrugStores = (action: DrugStoreDataStructure[]) => ({
  type: SET_DRUG_STORES,
  payload: action,
});

export const setDesiredDrugStore = (action: DrugStoreDataStructure) => ({
  type: SET_DRUG_STORE,
  payload: action,
});

export const setPanResponder = (action: boolean) => ({
  type: PAN_RESPONDER,
  payload: action,
});

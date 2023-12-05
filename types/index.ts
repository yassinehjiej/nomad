import { JSXElementConstructor, ReactElement, ReactNode } from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface FadeInViewProps {
  style?: ViewStyle;
  children?: ReactNode;
}

export interface SplashScreenProps {
  onAppReady: () => void;
}

export interface SlideVerticalViewProps {
  isVisible: boolean;
  onClose?: () => void;
  children: ReactNode;
  delay?: number;
}

export interface SearchInputProps {
  containerStyle: ViewStyle;
  inputStyle: TextStyle;
  iconStyle: ViewStyle;
  subject?: string;
  icon?: any,
  handleFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

export interface SwipableVerticalProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

export interface PharmaDetailsProps {
  pharma: DrugStoreDataStructure;
}

export interface DrugDetailsProps {
  drug: any;
}

export interface OnBoardingScreenProps {
  handleOnboarding: () => void;
}

export interface User {
  firstName: string | null;
  lastName: string | null;
  gender: string | null;
  bloodGroup: string | null;
  height: string | null;
  weight: string | null;
  birthday: object | null;
  isDoctor: boolean;
  email: string;
  country: string;
}

export interface InputFormOnBoardingProps {
  handleUser: (type: string, value: any) => void;
}

export interface DrugStoreDataStructure {
  id: string | null;
  title: string | null;
  phone: string | null;
  address: string | null;
  addressDetails: string | null;
  city: string | null;
  lat: number | null;
  lng: number | null;
  distance: number | null;
  type: string | null;
}

export interface DrugStoreList {
  item: DrugStoreDataStructure;
  index: number;
}

export interface FetchDrugStoresParams {
  selectedFilter: string,
  searchedText: string,
  lat: number,
  lng: number,
}
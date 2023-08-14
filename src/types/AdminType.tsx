import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { DocumentData } from "firebase/firestore";

export type TitleType = {
  titleName: string;
};

export type NavDataComponentType = {
  icon: IconProp;
  text: string;
  location: string;
}[];

export type NavPropsType = {
  data: NavDataComponentType;
  isActive: boolean[];
  setIsActive: React.Dispatch<React.SetStateAction<boolean[]>>;
};

export type PostDataType = {
  input?: string;
  text?: string;
  timestamp?: number;
  uid?: string;
  id?: string;
  data?: DocumentData;
  creatorEmail?: string;
};

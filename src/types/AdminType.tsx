import { IconProp } from "@fortawesome/fontawesome-svg-core";

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

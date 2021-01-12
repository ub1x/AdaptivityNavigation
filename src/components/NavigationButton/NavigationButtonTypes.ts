import { TabbarItemProps } from "@vkontakte/vkui/dist/components/TabbarItem/TabbarItem";
import { HTMLAttributes, ReactNode } from "react";

interface NavigationButtonTypes extends TabbarItemProps, HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default NavigationButtonTypes;

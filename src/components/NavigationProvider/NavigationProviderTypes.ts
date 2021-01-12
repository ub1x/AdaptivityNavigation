import { AdaptivityProps } from "@vkontakte/vkui";
import { EpicProps } from "@vkontakte/vkui/dist/components/Epic/Epic";
import { ReactNode } from "react";

interface NavigationProviderTypes extends EpicProps, AdaptivityProps {
  /**
   * Все отображаемые кнопки
   */
  buttons: ReactNode;
  children?: ReactNode;
}

export default NavigationProviderTypes;

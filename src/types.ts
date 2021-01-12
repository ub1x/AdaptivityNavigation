import { HTMLAttributes, ReactNode } from 'react';
import { TabbarItemProps } from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import { AdaptivityProps } from '@vkontakte/vkui';
import { EpicProps } from '@vkontakte/vkui/dist/components/Epic/Epic';

export interface INavigationButton extends TabbarItemProps, HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export interface INavigationProvider extends EpicProps, AdaptivityProps {
  /**
   * Все отображаемые кнопки
   */
  buttons: ReactNode;

  children?: ReactNode;
}
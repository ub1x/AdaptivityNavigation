import React, { FC, Fragment } from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { Cell, TabbarItem, useAdaptivity, ViewWidth } from '@vkontakte/vkui';

import { INavigationButton } from '../types';

export const NavigationButton: FC<INavigationButton> = (
  props: INavigationButton
) => {
  const { selected, label, text, children, ...restProps } = props;
  const { viewWidth } = useAdaptivity();

  return (
    <Fragment>
      {
        viewWidth !== undefined && viewWidth < ViewWidth.SMALL_TABLET ? (
          <TabbarItem
            label={label}
            selected={selected}
            text={text}
            {...restProps}
          >
            { hasReactNode(children) && children }
          </TabbarItem>
        ) : (
          // @ts-ignore
          <Cell
            disabled={selected}
            style={
              selected
                ? {
                    backgroundColor: 'var(--button_secondary_background)',
                    borderRadius: 8,
                  }
                : {}
            }
            {...restProps}
            before={ hasReactNode(children) && children }
          >
            {text}
          </Cell>
        )
      }
    </Fragment>
  );
}
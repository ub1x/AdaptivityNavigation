import { hasReactNode } from "@vkontakte/vkjs";
import { Cell, TabbarItem, useAdaptivity, ViewWidth } from "@vkontakte/vkui";
import { FC, Fragment } from "react";
import ButtonTypes from "./NavigationButtonTypes";

const NavigationButton: FC<ButtonTypes> = (props: ButtonTypes) => {
  const { selected, label, text, children, ...restProps } = props;
  const { viewWidth } = useAdaptivity();
  return (
    <Fragment>
      {Number(viewWidth) < ViewWidth.SMALL_TABLET ? (
        <TabbarItem
          label={label}
          selected={selected}
          text={text}
          {...restProps}
        >
          {hasReactNode(children) && children}
        </TabbarItem>
      ) : (
        //@ts-ignore
        <Cell
          disabled={selected}
          style={
            selected
              ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8,
                }
              : {}
          }
          {...restProps}
          before={hasReactNode(children) && children}
        >
          {text}
        </Cell>
      )}
    </Fragment>
  );
};

export default NavigationButton;

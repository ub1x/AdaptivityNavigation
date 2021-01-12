import {
  Epic,
  PanelHeader,
  SplitLayout,
  SplitCol,
  Group,
  Panel,
  Tabbar,
  usePlatform,
  VKCOM,
  Root,
  ViewWidth,
  useAdaptivity,
} from "@vkontakte/vkui";

import { FC, Fragment } from "react";
import NavigationProviderTypes from "./NavigationProviderTypes";
const NavigationProvider: FC<NavigationProviderTypes> = (
  props: NavigationProviderTypes
) => {
  const { buttons, children, ...restProps } = props;
  const { viewWidth } = useAdaptivity();
  const isDesktop = Number(viewWidth) >= ViewWidth.SMALL_TABLET;
  const spaced = Number(viewWidth) >= ViewWidth.SMALL_TABLET;
  const animate = Number(viewWidth) <= ViewWidth.MOBILE;
  const hasHeader = usePlatform() !== VKCOM;
  return (
    <SplitLayout
      header={hasHeader && <PanelHeader separator={false} />}
      style={{ justifyContent: "center" }}
    >
      {!isDesktop ? (
        <Epic {...restProps} tabbar={<Tabbar>{buttons}</Tabbar>}>
          {children}
        </Epic>
      ) : (
        <Fragment>
          <SplitCol
            animate={animate}
            spaced={spaced}
            width={isDesktop ? "560px" : "100%"}
            maxWidth={isDesktop ? "560px" : "100%"}
          >
            <Root activeView={restProps.activeStory}>{children}</Root>
          </SplitCol>
          <SplitCol fixed width="280px" maxWidth="280px">
            <Panel>
              {hasHeader && <PanelHeader />}
              <Group>{buttons}</Group>
            </Panel>
          </SplitCol>
        </Fragment>
      )}
    </SplitLayout>
  );
};

export default NavigationProvider;

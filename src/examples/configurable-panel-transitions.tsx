import React, { useCallback, useState } from "react";
import {
  View,
  Panel,
  PanelHeader,
  Group,
  PanelHeaderBack,
  CellButton,
  Div,
  ViewProps,
  Header,
  ConfigProvider,
  IOS,
  WebviewType,
  AdaptivityProvider,
  AppRoot
} from "@vkontakte/vkui";
import { Icon24ChevronLeft, Icon24ChevronRight } from "@vkontakte/icons";
import "@vkontakte/vkui/dist/vkui.css";

const panels = ["panel A", "panel B", "panel C", "panel D"];

function App() {
  const [panel, setPanel] = useState(panels[0]);
  const [history, setHistory] = useState<string[]>([]);
  const [direction, setDirection] = useState<ViewProps["direction"]>();

  const goBack = useCallback(() => {
    if (history.length < 1) {
      return;
    }
    const h = [...history];
    const nextPanel = h.pop();

    setDirection("back");
    if (nextPanel) {
      setPanel(nextPanel);
    }
    setHistory(h);
  }, [history]);

  const goTo = useCallback(
    (nextPanel) => {
      const h = [...history];
      h.push(panel);
      setPanel(nextPanel);
      setHistory(h);
    },
    [panel, history]
  );

  const canGoBack = history.length > 0;
  const prevHistoryPanel = canGoBack && history[history.length - 1];

  const info = (
    <Group>
      <Group mode="plain" header={<Header>State</Header>}>
        <Div>history: {history.join(" | ")}</Div>
        <Div>forced direction: {direction}</Div>
      </Group>
      <Group mode="plain" header={<Header>Infinite navigation</Header>}>
        <CellButton
          before={<Icon24ChevronLeft />}
          disabled={!canGoBack}
          onClick={goBack}
        >
          back ({prevHistoryPanel})
        </CellButton>
        {panels.map((id) => (
          <CellButton
            disabled={id === panel}
            key={`cell-${id}`}
            onClick={() => {
              setDirection("forward");
              goTo(id);
            }}
            before={<Icon24ChevronRight />}
          >
            go to {id}
          </CellButton>
        ))}
      </Group>
      <Group mode="plain" header={<Header>Normal navigation</Header>}>
        {panels.map((id) => (
          <CellButton
            disabled={id === panel}
            key={`cell-${id}`}
            onClick={() => {
              setDirection(undefined);
              goTo(id);
            }}
          >
            go to {id}
          </CellButton>
        ))}
      </Group>
    </Group>
  );

  const onTransition: ViewProps["onTransition"] = ({ isBack, from, to }) => {
    // console.log(isBack, from, to);
  };

  return (
    <View
      activePanel={panel}
      direction={direction}
      history={history}
      onTransition={onTransition}
    >
      {panels.map((id) => (
        <Panel key={id} id={id}>
          <PanelHeader left={canGoBack && <PanelHeaderBack onClick={goBack} />}>
            {id}
          </PanelHeader>
          {info}
        </Panel>
      ))}
    </View>
  );
}

export default () => {
  return (
    <ConfigProvider platform={IOS} webviewType={WebviewType.INTERNAL} isWebView>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

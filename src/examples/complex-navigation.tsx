import React, { useCallback, useState } from "react";
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  SplitCol,
  SplitLayout,
  View,
  Panel,
  PanelHeader,
  Group,
  CellButton,
  IOS,
  WebviewType,
  Root,
  Div,
  Header
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon24CheckBoxOn } from "@vkontakte/icons";

const views = ["v1", "v2"];
const panels1 = ["v1p1", "v1p2", "v1p3", "v1p4", "v1p5"];
const panels2 = ["v2p1", "v2p2", "v2p3", "v2p4", "v2p5"];

const panels = { v1: panels1, v2: panels2 };

export default function App() {
  const [view, setView] = useState(views[0]);
  const [panel1, setPanel1] = useState(panels1[0]);
  const [panel2, setPanel2] = useState(panels2[0]);
  const [history1, setHistory1] = useState([panels1[0]]);
  const [history2, setHistory2] = useState([panels2[0]]);

  const goToPanel1 = useCallback(
    (p) => {
      setPanel1(p);
      setHistory1([...history1, p]);
    },
    [history1]
  );

  const goToPanel2 = useCallback(
    (p) => {
      setPanel2(p);
      setHistory2([...history2, p]);
    },
    [history2]
  );

  const goToView = (v) => {
    setView(v);
    if (v === views[0]) {
      setHistory1([panels1[0]]);
    } else {
      setHistory2([panels2[0]]);
    }
  };

  const nav = (
    <Group>
      <Group mode="plain">
        {views.map((v) => (
          <CellButton
            key={v}
            onClick={() => goToView(v)}
            after={view === v && <Icon24CheckBoxOn />}
          >
            view {v}
          </CellButton>
        ))}
      </Group>
      <Group mode="plain">
        {panels[view].map((p) => (
          <CellButton
            key={p}
            onClick={() => (view === views[0] ? goToPanel1(p) : goToPanel2(p))}
          >
            panel {p}
          </CellButton>
        ))}
      </Group>
      <Group header={<Header>view history</Header>}>
        <Div style={{ fontSize: 12 }}>{history1.join(" -> ")}</Div>
        <Div style={{ fontSize: 12 }}>{history2.join(" -> ")}</Div>
      </Group>
    </Group>
  );

  return (
    <ConfigProvider platform={IOS} isWebView webviewType={WebviewType.INTERNAL}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout header={<PanelHeader shadow separator={false} />}>
            <SplitCol animate>
              <Root activeView={view}>
                <View id={views[0]} history={history1} activePanel={panel1}>
                  {panels1.map((p) => (
                    <Panel key={p} id={p}>
                      <PanelHeader>{`view 1: panel ${p}`}</PanelHeader>
                      {nav}
                    </Panel>
                  ))}
                </View>

                <View id={views[1]} history={history2} activePanel={panel2}>
                  {panels2.map((p) => (
                    <Panel key={p} id={p}>
                      <PanelHeader>{`view 2: panel ${p}`}</PanelHeader>
                      {nav}
                    </Panel>
                  ))}
                </View>
              </Root>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

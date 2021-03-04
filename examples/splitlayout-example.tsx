import React from "react";
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
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

export default function App() {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout header={<PanelHeader shadow separator={false} />}>
            <SplitCol>
              <View activePanel="panel1">
                <Panel id="panel1">
                  <PanelHeader>Panel</PanelHeader>
                  <Group></Group>
                </Panel>
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

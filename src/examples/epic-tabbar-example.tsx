import React, { useState } from "react";
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
  Epic,
  Tabbar,
  TabbarItem,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28SettingsOutline,
} from "@vkontakte/icons";

export default function App() {
  const [view, setView] = useState("1");
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout header={<PanelHeader shadow separator={false} />}>
            <SplitCol>
              <Epic
                activeStory={view}
                tabbar={
                  <Tabbar>
                    <TabbarItem onClick={() => setView("1")}>
                      <Icon28ServicesOutline />
                    </TabbarItem>
                    <TabbarItem onClick={() => setView("2")}>
                      <Icon28NewsfeedOutline />
                    </TabbarItem>
                    <TabbarItem onClick={() => setView("3")}>
                      <Icon28SettingsOutline />
                    </TabbarItem>
                  </Tabbar>
                }
              >
                <View id="1" activePanel="panel11">
                  <Panel id="panel11">
                    <PanelHeader>Panel 1</PanelHeader>
                    <Group></Group>
                  </Panel>
                </View>
                <View id="2" activePanel="panel21">
                  <Panel id="panel21">
                    <PanelHeader>Panel 2</PanelHeader>
                    <Group></Group>
                  </Panel>
                </View>
                <View id="3" activePanel="panel31">
                  <Panel id="panel31">
                    <PanelHeader>Panel 3</PanelHeader>
                    <Group></Group>
                  </Panel>
                </View>
              </Epic>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

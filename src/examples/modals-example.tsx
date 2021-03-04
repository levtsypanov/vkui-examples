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
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  Placeholder,
  CellButton,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

export default function App() {
  const [modal, setModal] = useState<string | null>(null);
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout
            header={<PanelHeader shadow separator={false} />}
            modal={
              <ModalRoot activeModal={modal} onClose={() => setModal(null)}>
                <ModalPage
                  id="modal1"
                  header={<ModalPageHeader>Modal Page</ModalPageHeader>}
                >
                  <Group>
                    <Group mode="plain">
                      <Placeholder />
                    </Group>

                    <Group mode="plain">
                      <Placeholder />
                    </Group>

                    <Group mode="plain">
                      <Placeholder />
                    </Group>

                    <Group mode="plain">
                      <Placeholder />
                    </Group>

                    <Group mode="plain">
                      <Placeholder />
                    </Group>

                    <Group mode="plain">
                      <Placeholder />
                    </Group>
                  </Group>
                </ModalPage>
              </ModalRoot>
            }
          >
            <SplitCol>
              <View activePanel="panel1">
                <Panel id="panel1">
                  <PanelHeader>Panel</PanelHeader>
                  <Group>
                    <CellButton onClick={() => setModal("modal1")}>
                      Open Modal
                    </CellButton>
                  </Group>
                </Panel>
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

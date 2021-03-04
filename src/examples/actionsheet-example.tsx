import React, { ReactNode, useRef, useState } from "react";
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
  ActionSheet,
  ActionSheetItem,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { RefWithCurrent } from "@vkontakte/vkui/dist/types";

export default function App() {
  const cellRef1 = useRef<HTMLElement>() as RefWithCurrent<HTMLElement>;
  const cellRef2 = useRef<HTMLElement>() as RefWithCurrent<HTMLElement>;
  const cellRef3 = useRef<HTMLElement>() as RefWithCurrent<HTMLElement>;
  const [popout, setPopout] = useState<ReactNode | null>(null);

  const openActionSheet = (toggleRef: Element) => () =>
    setPopout(
      <ActionSheet
        toggleRef={toggleRef}
        iosCloseItem={
          <ActionSheetItem autoclose mode="cancel">
            Отменить
          </ActionSheetItem>
        }
        onClose={() => setPopout(null)}
      >
        <ActionSheetItem autoclose>Item 1</ActionSheetItem>
        <ActionSheetItem autoclose>Item 2</ActionSheetItem>
        <ActionSheetItem autoclose>Item 3</ActionSheetItem>
        <ActionSheetItem autoclose>Item 4</ActionSheetItem>
        <ActionSheetItem autoclose>Item 5</ActionSheetItem>
        <ActionSheetItem autoclose>Item 6</ActionSheetItem>
      </ActionSheet>
    );

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout
            header={<PanelHeader separator={false} />}
            popout={popout}
          >
            <SplitCol>
              <View activePanel="panel1">
                <Panel id="panel1">
                  <PanelHeader>Panel</PanelHeader>
                  <Group>
                    <CellButton
                      getRootRef={cellRef1}
                      onClick={openActionSheet(cellRef1.current as Element)}
                    >
                      Open Action Sheet 1
                    </CellButton>
                    <CellButton
                      getRootRef={cellRef2}
                      onClick={openActionSheet(cellRef2.current as Element)}
                    >
                      Open Action Sheet 2
                    </CellButton>
                    <CellButton
                      getRootRef={cellRef3}
                      onClick={openActionSheet(cellRef3.current as Element)}
                    >
                      Open Action Sheet 3
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

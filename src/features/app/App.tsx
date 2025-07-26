import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "../../components/resizablepanels/ResizablePanels";
import { Flow } from "../flow/Flow";

export function App() {
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
      }}
    >
      <PanelGroup direction="vertical">
        <Panel>
          <Flow />
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={25}>
          <h1>Placeholder</h1>
        </Panel>
      </PanelGroup>
    </div>
  );
}

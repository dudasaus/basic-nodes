import "./App.css";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "../../components/resizablepanels/ResizablePanels";
import { Flow } from "../flow/Flow";
import { Header } from "../../components/header/Header";

export function App() {
  return (
    <div className="page">
      <Header />
      <PanelGroup direction="horizontal">
        <Panel>
          <PanelGroup direction="vertical">
            <Panel>
              <Flow />
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={25}>
              <h2>Node Library</h2>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={25}>
          <h2>Documentation</h2>
        </Panel>
      </PanelGroup>
    </div>
  );
}

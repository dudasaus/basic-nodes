import "./App.css";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "../../components/resizablepanels/ResizablePanels";
import { Header } from "../../components/header/Header";
import { NodeLibrary } from "../nodelibrary/NodeLibrary";
import { FlowContainer } from "../flow/FlowContainer";

export function App() {
  return (
    <div className="page">
      <Header />
      <PanelGroup direction="horizontal">
        <Panel>
          <PanelGroup direction="vertical">
            <Panel>
              <FlowContainer />
            </Panel>
            <PanelResizeHandle />
            <Panel defaultSize={25}>
              <NodeLibrary />
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

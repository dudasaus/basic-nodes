import "./ResizablePanels.css";
import {
  Panel as DefaultPanel,
  PanelGroup as DefaultPanelGroup,
  PanelResizeHandle as DefaultPanelResizeHandle,
} from "react-resizable-panels";
import type { ComponentProps } from "react";

export function PanelGroup(props: ComponentProps<typeof DefaultPanelGroup>) {
  let { className, ...rest } = props;
  className = [className, "resizable-panel-group"].join(" ");

  return <DefaultPanelGroup className={className} {...rest} />;
}

export function Panel(props: ComponentProps<typeof DefaultPanel>) {
  let { className, ...rest } = props;
  className = [className, "resizable-panel"].join(" ");

  return <DefaultPanel className={className} {...rest} />;
}

export function PanelResizeHandle(
  props: ComponentProps<typeof DefaultPanelResizeHandle>,
) {
  let { className, ...rest } = props;
  className = [className, "resizable-resize-handle"].join(" ");

  return (
    <DefaultPanelResizeHandle className={className} {...rest}>
    </DefaultPanelResizeHandle>
  );
}

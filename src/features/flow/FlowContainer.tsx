import { ReactFlowProvider } from "@xyflow/react";
import { Flow } from "./Flow";

export function FlowContainer() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}

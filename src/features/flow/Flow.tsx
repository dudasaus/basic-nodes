import "@xyflow/react/dist/style.css";
import "./Flow.css";
import { type DragEventHandler, useCallback, useState } from "react";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  type DefaultEdgeOptions,
  type Edge,
  type Node,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange,
  ReactFlow,
  useReactFlow,
} from "@xyflow/react";
import { dragAndDropService } from "../../services/draganddrop/DragAndDropService";

const initialNodes: Node[] = [
  { id: "1", data: { label: "Node 1" }, position: { x: 5, y: 5 } },
  { id: "2", data: { label: "Node 2" }, position: { x: 5, y: 100 } },
];

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

export function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const flow = useReactFlow();

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  const onDragOver: DragEventHandler = (ev) => {
    // Allow drop.
    if (dragAndDropService.getData() === "node") {
      ev.preventDefault();
    }
  };

  const onDrop: DragEventHandler = (ev) => {
    const position = flow.screenToFlowPosition({
      x: ev.clientX,
      y: ev.clientY,
    });
    flow.addNodes({
      id: crypto.randomUUID(),
      data: { label: dragAndDropService.getData() },
      position,
    });
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onDragOver={onDragOver}
      onDrop={onDrop}
      defaultEdgeOptions={defaultEdgeOptions}
      colorMode="light"
      className="flow"
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}

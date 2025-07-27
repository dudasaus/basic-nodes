import "./GenericNode.css";
import { Handle, type NodeProps, Position } from "@xyflow/react";
import { type GenericNodeConfig, handleTypeRegistry } from "./GenericNodeTypes";
import type { CSSProperties } from "react";

export const GenericNode = (props: NodeProps & { data: GenericNodeConfig }) => {
  return (
    <div className="generic-node">
      <div className="generic-node-label">{props.data.label}</div>
      {props.data.inputs.map((input) => {
        const handleStyle = {
          "--xy-handle-background-color": handleTypeRegistry.get(input.type)
            ?.color,
        } as CSSProperties;
        return (
          <div className="generic-node-handle-section input" key={input.id}>
            <Handle
              style={handleStyle}
              position={Position.Left}
              type="target"
            />
            <div className="generic-node-input-label">{input.label}</div>
          </div>
        );
      })}
      {props.data.outputs.map((output) => {
        const handleStyle = {
          "--xy-handle-background-color": handleTypeRegistry.get(output.type)
            ?.color,
        } as CSSProperties;
        return (
          <div className="generic-node-handle-section output" key={output.id}>
            <Handle
              style={handleStyle}
              position={Position.Right}
              type="source"
            />
            <div className="generic-node-output-label">{output.label}</div>
          </div>
        );
      })}
    </div>
  );
};

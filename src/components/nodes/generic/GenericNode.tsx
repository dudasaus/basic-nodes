import "./GenericNode.css";
import { Handle, type NodeProps, Position } from "@xyflow/react";

export interface GenericHandleConfig {
  id: string;
  label: string;
}

export interface GenericNodeConfig {
  label: string;
  inputs: GenericHandleConfig[];
  outputs: GenericHandleConfig[];
}

export const GenericNode = (props: NodeProps & { data: GenericNodeConfig }) => {
  return (
    <div className="generic-node">
      <div className="generic-node-label">{props.data.label}</div>
      {props.data.inputs.map((input) => {
        return (
          <div className="generic-node-handle-section input" key={input.id}>
            <Handle position={Position.Left} type="target" />
            <div className="generic-node-input-label">{input.label}</div>
          </div>
        );
      })}
      {props.data.outputs.map((output) => {
        return (
          <div className="generic-node-handle-section output" key={output.id}>
            <Handle position={Position.Right} type="source" />
            <div className="generic-node-output-label">{output.label}</div>
          </div>
        );
      })}
    </div>
  );
};

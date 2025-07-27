import {
  type GenericNodeConfig,
  numberHandleType,
} from "../../components/nodes/generic/GenericNodeTypes";
import { dragAndDropService } from "../../services/draganddrop/DragAndDropService";
import "./NodeLibrary.css";

export function NodeLibrary() {
  return (
    <div className="node-library">
      <div className="node-library-header">
        Node Library
      </div>
      <div className="node-library-content">
        <NodeLibraryNode
          nodeConfig={{
            label: "Add",
            inputs: [{
              id: "in-1",
              label: "A",
              type: numberHandleType,
            }, {
              id: "in-2",
              label: "B",
              type: numberHandleType,
            }],
            outputs: [
              {
                id: "sum",
                label: "Sum",
                type: numberHandleType,
              },
            ],
          }}
        />
        <NodeLibraryNode
          nodeConfig={{
            label: "Subtract",
            inputs: [{
              id: "in-1",
              label: "A",
              type: numberHandleType,
            }, {
              id: "in-2",
              label: "B",
              type: numberHandleType,
            }],
            outputs: [
              {
                id: "difference",
                label: "Difference",
                type: numberHandleType,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

function NodeLibraryNode(
  props: { label?: string; nodeConfig: GenericNodeConfig },
) {
  return (
    <div
      className="node-library-node"
      draggable="true"
      onDragStart={(_ev) => {
        dragAndDropService.setData(props.nodeConfig);
      }}
      onDragEnd={() => {
        dragAndDropService.clearData();
      }}
    >
      {props.label ?? props.nodeConfig.label}
    </div>
  );
}

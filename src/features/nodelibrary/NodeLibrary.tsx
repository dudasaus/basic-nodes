import { dragAndDropService } from "../../services/draganddrop/DragAndDropService";
import "./NodeLibrary.css";

export function NodeLibrary() {
  return (
    <div className="node-library">
      <div className="node-library-header">
        Node Library
      </div>
      <div className="node-library-content">
        <div
          className="node-library-node"
          draggable="true"
          onDragStart={(_ev) => {
            dragAndDropService.setData("node");
          }}
          onDragEnd={() => {
            dragAndDropService.clearData();
          }}
        >
          Basic Node
        </div>
      </div>
    </div>
  );
}

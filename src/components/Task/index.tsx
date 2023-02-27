import { Check, CheckCircle, Circle, Trash } from "phosphor-react";
import { Item, ListContainer } from "./style";

interface TaskProps {
  content: string;
  checked?: boolean;
  id: number;
  onDelete: (id: number) => void;
  onCheck: (id: number, checked: boolean) => void;
}

export function Task({
  content,
  checked = false,
  onDelete,
  id,
  onCheck,
}: TaskProps) {
  function handleDeleteTask() {
    onDelete(id);
  }

  function handleToggleChecked() {
    onCheck(id, checked);
  }

  return (
    <ListContainer>
      <Item checked={checked}>
        <button className="check" onClick={handleToggleChecked}>
          {checked ? <CheckCircle size={24} /> : <Circle size={24} />}
        </button>
        <p>{content}</p>
        <button className="delete" onClick={handleDeleteTask}>
          <Trash size={24} />
        </button>
      </Item>
    </ListContainer>
  );
}

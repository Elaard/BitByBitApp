interface ActionButtonProps {
  title: string;
  cellValue: string;
  action: (cellValue: string) => void;
}

const ActionButton = ({ title, action, cellValue }: ActionButtonProps) => {
  return <button className="btn btn-action" onClick={() => action(cellValue)}>{title}</button>
}

export default ActionButton;
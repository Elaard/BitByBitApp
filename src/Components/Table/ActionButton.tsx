interface ActionButtonProps {
  title: string;
  cellValue: string;
  action: (cellValue: string) => void;
}

const ActionButton = ({ title, action, cellValue }: ActionButtonProps) => {
  return <button className="btn" onClick={() => action(cellValue)}>{title}</button>
}

export default ActionButton;
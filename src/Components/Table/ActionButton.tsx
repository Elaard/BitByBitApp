import { addModifierToClassName } from "../../Utils/classNameUtils";

export interface ActionButtonProps {
  title: string;
  cellValue: string;
  action: (cellValue: string) => void;
  modifier?: string
}

const btnClassName = 'btn btn-action';

const ActionButton = ({ title, action, cellValue, modifier }: ActionButtonProps) => {
  const className = addModifierToClassName(btnClassName, modifier);
  return <button className={className} onClick={() => action(cellValue)}>{title}</button>
}

export default ActionButton;
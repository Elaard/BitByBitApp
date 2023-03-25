import ActionButton, { ActionButtonProps } from "./ActionButton";

interface ActionGroupButtonsProps {
  actions: ActionButtonProps[];
}

const ActionGroupButtons = ({ actions }: ActionGroupButtonsProps) => {
  return <div className="action-group" >
    {actions.map((action, index) => <ActionButton key={index} title={action.title} cellValue={action.cellValue} action={action.action} modifier={action.modifier} />)}
  </div>
}

export default ActionGroupButtons;
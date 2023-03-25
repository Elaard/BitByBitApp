import ActionButton, { ActionButtonProps } from "./ActionButton";

interface ActionGroupButtonsProps {
  actions: ActionButtonProps[];
}

const ActionGroupButtons = ({ actions }: ActionGroupButtonsProps) => {
  return <div className="actions-group" >
    {actions.map((action) => <ActionButton title={action.title} cellValue={action.cellValue} action={action.action} modifier={action.modifier} />)}
  </div>
}

export default ActionGroupButtons;
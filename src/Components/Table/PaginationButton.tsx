

interface PaginationButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

const PaginationButton = ({ text, onClick, disabled }: PaginationButtonProps) => {
  return <button className="btn btn-pagination" onClick={onClick} disabled={disabled}>{text}</button>
}

export default PaginationButton;
interface CellProps {
  children: JSX.Element | React.ReactNode
}

const Cell = ({ children }: CellProps) => {
  return <td className="cell">
    <div className="cell__wrapper">
      {children}
    </div>
  </td>
}

export default Cell;
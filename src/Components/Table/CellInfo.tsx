import { ReactElement } from "react";

interface CellInfoProps {
  value: string | number | null | ReactElement;
}

const CellInfo = ({ value }: CellInfoProps) => {
  return <p className="margin-left-5">{value}</p>
}

export default CellInfo;
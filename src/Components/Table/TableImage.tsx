

interface TableImageProps {
  src: string
}

const TableImage = ({ src }: TableImageProps) => {
  return <img src={src} alt="coin image" />
}

export default TableImage;
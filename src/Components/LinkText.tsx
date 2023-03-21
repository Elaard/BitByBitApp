
interface LinkTextProps {
  text: string
}


const LinkText = ({ text }: LinkTextProps) => {
  return <p className="link-text">{text}</p>
}


export default LinkText;
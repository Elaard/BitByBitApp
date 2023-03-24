interface NavbarImageProps {
  src: string;
}

const LinkImage = ({ src }: NavbarImageProps) => {
  return <div className="link-image"><img src={src} alt="Logo" className="link-image__img" /></div>
}


export default LinkImage;
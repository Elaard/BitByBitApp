
const Header = () => {
  return <header className="header">
    <div className="header__logo-box">
      <img src={"../icons/wallet-white.svg"} alt="Logo" className="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">The bit by bit project</span>
      </h1>
    </div>
    <div className="header__title">
      made by bartłomiej czosnyka
    </div>
  </header>

}

export default Header;
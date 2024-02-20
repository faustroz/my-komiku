const HeaderMenu = ({title}) => {
  return (
    <>
      <div className="p-8 bg-dark-background">
        <h3 className="text-center text-2xl font-bold text-dark-text">{title}</h3>
      </div>
    </>
  )
}

export default HeaderMenu;
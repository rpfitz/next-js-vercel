export default function HeaderComponent(menuItems: any) {
  const MenuItemsExample = ['Início', 'Sobre', 'Soluções', 'Blog', 'Contato']

  return (
    <div className="header-background" style={{
      height: '5em',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid black',
    }}>

      <div className="header" style={{
        width: '100',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1em',
        border: '1px solid black',
      }}>

        <div className="header-component left-side logo" style={{
          border: '1px solid black',
        }}>
          Logo
        </div>

        <div className="header-component middle menu-list">
          <ul style={{
            display: 'flex',
            gap: '1em',
            listStyle: 'none',
            border: '1px solid black',
          }}>
            {MenuItemsExample.map((item: any, index: any) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        <div className="header-component right-side" style={{
          border: '1px solid black',
        }}>
          Session 3
        </div>
      </div>
    </div>
  )
}

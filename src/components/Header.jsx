import { AppBar, Toolbar } from '@mui/material'

const Header = () => {
  return (
    <AppBar color='action' position='static' >
        <Toolbar>
            <img src='https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg' alt="logo" style={{
                width:100
            }} />
        </Toolbar>
    </AppBar>
  )
}

export default Header
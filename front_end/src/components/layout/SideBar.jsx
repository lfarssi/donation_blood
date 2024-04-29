import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
export default function SideBar() {
  return (
    <Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/" />}> Documentation</MenuItem>
    <MenuItem component={<Link to="/" />}> Calendar</MenuItem>
    <MenuItem component={<Link to="/" />}> E-commerce</MenuItem>
  </Menu>
</Sidebar>
  )
}

import { Nav, NavLink, NavMenu } 
    from "./NavbarStyles";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/courseinfo" activestyle='true'>
            Courseinfo
          </NavLink>
          <NavLink to="/unicafe" activestyle='true'>
            Unicafe
          </NavLink>
          <NavLink to="/anecdotes" activestyle='true'>
            Anecdotes
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
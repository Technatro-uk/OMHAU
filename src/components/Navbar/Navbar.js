import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from '../../images/OMHAU_LOGO.png';
import { Button } from '../../globalStyles';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavItemBtn,
  NavBtnLink } from './Navbar.Elements';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: 'dodgerblue' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon src={logo} alt='logo' />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            
              <NavItem>
                <NavLinks to='/resources'>
                  Resources
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='//www.facebook.com/groups/ourmentalhealthandus/' target='_blank'>
                    <Button primary>Facebook</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='//www.facebook.com/groups/ourmentalhealthandus/' target='_blank'>
                    <Button fontBig primary>Facebook</Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
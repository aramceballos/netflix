import React, { CSSProperties, useEffect, useState } from 'react'

import {
  Container,
  StyledLink,
  Img,
  MenuText,
  MenuContainer,
  Arrow,
  TopBar,
  Menu,
  MenuItem,
  MenuDesktop,
  MenuItemDesktop,
  NavLinkStyled,
  NavLinkDesktopStyled,
  IconsContainer,
  NavElement,
  SearchIcon,
  SearchContainer,
  SearchInput,
  CloseIcon,
  BellIcon,
  ArrowDropDownIcon,
  ProfileIcon,
  AccountMenuItem,
} from './styles'
import logo from '../../assets/Netflix_Logo_RGB.png'

const NavBar = () => {
  const [showDark, setShowDark] = useState(window.scrollY > 0)
  const [showNavBarMenu, setShowNavBarMenu] = useState(false)
  const [isNavBarCompacted, setIsNavBarCompacted] = useState(
    window.innerWidth < 850
  )
  const [showSearchInput, setShowSearchInput] = useState(false)

  useEffect(() => {
    const onResize = () => {
      const newIsNavBarCompacted = window.innerWidth < 850
      isNavBarCompacted !== newIsNavBarCompacted &&
        setIsNavBarCompacted(newIsNavBarCompacted)
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [isNavBarCompacted])

  useEffect(() => {
    const onScroll = () => {
      const newShowDark = window.scrollY > 0
      showDark !== newShowDark && setShowDark(newShowDark)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [showDark])

  const handleClick = () => {
    setShowNavBarMenu(!showNavBarMenu)
  }

  let activeStyle: CSSProperties = {
    fontWeight: 500,
  }

  return (
    <Container dark={showDark}>
      <StyledLink to="/">
        <Img src={logo} alt="logo" />
      </StyledLink>
      {isNavBarCompacted && (
        <>
          <MenuText onClick={handleClick}>Browse</MenuText>
          <ArrowDropDownIcon onClick={handleClick} />
        </>
      )}
      {showNavBarMenu && isNavBarCompacted && (
        <MenuContainer>
          <Arrow />
          <TopBar />
          <Menu>
            <MenuItem>
              <NavLinkStyled
                style={({ isActive }) => (isActive ? activeStyle : {})}
                to="/"
              >
                Home
              </NavLinkStyled>
            </MenuItem>
            <MenuItem>
              <NavLinkStyled
                style={({ isActive }) => (isActive ? activeStyle : {})}
                to="/tv-shows"
              >
                TV Shows
              </NavLinkStyled>
            </MenuItem>
            <MenuItem>
              <NavLinkStyled
                style={({ isActive }) => (isActive ? activeStyle : {})}
                to="/movies"
              >
                Movies
              </NavLinkStyled>
            </MenuItem>
            <MenuItem>
              <NavLinkStyled
                style={({ isActive }) => (isActive ? activeStyle : {})}
                to="/latest"
              >
                News & Popular
              </NavLinkStyled>
            </MenuItem>
            <MenuItem>
              <NavLinkStyled
                style={({ isActive }) => (isActive ? activeStyle : {})}
                to="/my-list"
              >
                My List
              </NavLinkStyled>
            </MenuItem>
          </Menu>
        </MenuContainer>
      )}
      {!isNavBarCompacted && (
        <MenuDesktop>
          <MenuItemDesktop>
            <NavLinkDesktopStyled
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/"
            >
              Home
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
          <MenuItemDesktop>
            <NavLinkDesktopStyled
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/tv-shows"
            >
              TV Shows
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
          <MenuItemDesktop>
            <NavLinkDesktopStyled
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/movies"
            >
              Movies
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
          <MenuItemDesktop>
            <NavLinkDesktopStyled
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/latest"
            >
              News & Popular
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
          <MenuItemDesktop>
            <NavLinkDesktopStyled
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/my-list"
            >
              My List
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
        </MenuDesktop>
      )}
      <IconsContainer>
        <NavElement>
          {showSearchInput ? (
            <SearchContainer>
              <SearchInput
                onBlur={() => setShowSearchInput(false)}
                placeholder="Titles, people, genres"
                type="text"
                autoFocus
              />
              <SearchIcon isInInput />
              <CloseIcon onClick={() => setShowSearchInput(false)} />
            </SearchContainer>
          ) : (
            <SearchIcon onClick={() => setShowSearchInput(true)} />
          )}
        </NavElement>
        <NavElement>
          <BellIcon />
        </NavElement>
        <NavElement hideMargin>
          <AccountMenuItem>
            <ProfileIcon
              src="https://occ-0-49-114.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAAFFNpvUWEcToEOcf84YIAkDopoPkujSEkD5mQdRRU_8osXVdQAQJlzhBx_oRUl2DBJvzyHE3zUSRPEFjepJlaD5qeew.png?r=a41"
              alt="profile-icon"
            />
            <ArrowDropDownIcon
              style={{ display: isNavBarCompacted ? 'none' : 'block' }}
            />
          </AccountMenuItem>
        </NavElement>
      </IconsContainer>
    </Container>
  )
}

export default NavBar

import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Search } from '@styled-icons/heroicons-outline'
import { Gift } from '@styled-icons/boxicons-regular'
import { Bell } from '@styled-icons/boxicons-solid'
import { ArrowDropDown } from '@styled-icons/material'

import { fadeIn } from '../styles/animations'

import logo from '../assets/Netflix_Logo_PMS.png'

interface IContainerProps {
  dark?: boolean
}

interface INavElementProps {
  hideMargin?: boolean
}

const Container = styled.div<IContainerProps>`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: fixed;
  width: 100vw;
  top: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  background-color: ${({ dark }) => dark && 'rgba(20, 20, 20)'};
  transition: 0.4s ease background-color;
  z-index: 9999;

  @media screen and (min-width: 925px) {
    height: 68px;
  }
`

const StyledLink = styled(Link)`
  height: 68px;
  display: flex;
  align-items: center;
`

const Img = styled.img`
  height: 22px;

  @media screen and (min-width: 480px) {
    height: 26px;
  }

  @media screen and (min-width: 768px) {
    height: 35px;
    margin-left: 20px;
  }

  @media screen and (min-width: 925px) {
    height: 49px;
  }

  @media screen and (min-width: 1100px) {
    margin-left: 35px;
  }
`

const MenuText = styled.p`
  font-size: 8px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    font-size: 12px;
  }
`

const MenuContainer = styled.div`
  position: absolute;
  top: 64px;
`

const Arrow = styled.div`
  position: absolute;
  top: -13px;
  left: 50%;
  border-width: 7px;
  margin-left: -7px;
  border-color: transparent transparent #e5e5e5;
  border-style: solid;
  height: 0;
  width: 0;
`

const TopBar = styled.div`
  height: 2px;
  background-color: #e5e5e5;
`

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 13px;
  margin: 0;
  font-weight: 300;
  letter-spacing: 1.2px;
  background-color: rgba(0, 0, 0, 0.9);
  flex-direction: column;
  ${fadeIn()};

  @media screen and (min-width: 850px) {
    display: initial;
  }
`

const MenuItem = styled.li`
  @media screen and (min-width: 850px) {
    margin-left: 20px;
  }
`

const MenuDesktop = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  font-size: 13px;
  margin: 0;
  font-weight: 300;
  letter-spacing: 1.2px;

  @media screen and (min-width: 1150px) {
    margin-left: 20px;
  }
`

const MenuItemDesktop = styled.li`
  margin-left: 10px;

  @media screen and (min-width: 925px) {
    margin-left: 12px;
  }

  @media screen and (min-width: 1100px) {
    margin-left: 19px;
  }
`

const NavLinkStyled = styled(NavLink)`
  display: flex;
  width: 260px;
  height: 50px;
  align-items: center;
  justify-content: center;
`

const NavLinkDesktopStyled = styled(NavLink)`
  font-size: 9px;

  @media screen and (min-width: 925px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1150px) {
    font-size: 13px;
  }
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 4%;
  top: 0;
  height: 100%;
`

const NavElement = styled.div<INavElementProps>`
  margin-right: ${({ hideMargin }) => (hideMargin ? '0' : '20px')};

  @media screen and (min-width: 925px) {
    margin-right: ${({ hideMargin }) => (hideMargin ? '0' : '22px')};
  }
`

const SearchIcon = styled(Search)`
  width: 12.5px;
  cursor: pointer;

  @media screen and (min-width: 925px) {
    width: 16px;
  }

  @media screen and (min-width: 1100px) {
    width: 21px;
  }

  @media screen and (min-width: 1330px) {
    width: 24px;
  }
`

const GiftIcon = styled(Gift)`
  width: 12.5px;
  cursor: pointer;

  @media screen and (min-width: 925px) {
    width: 16px;
  }

  @media screen and (min-width: 1100px) {
    width: 21px;
  }

  @media screen and (min-width: 1330px) {
    width: 24px;
  }
`

const BellIcon = styled(Bell)`
  width: 12.5px;
  cursor: pointer;

  @media screen and (min-width: 925px) {
    width: 16px;
  }

  @media screen and (min-width: 1100px) {
    width: 21px;
  }

  @media screen and (min-width: 1330px) {
    width: 24px;
  }
`

const ArrowDropDownIcon = styled(ArrowDropDown)`
  width: 25px;
  cursor: pointer;

  @media screen and (min-width: 925px) {
    width: 22px;
  }
`

const ProfileIcon = styled.img`
  border-radius: 4px;
  height: 39px;

  @media screen and (min-width: 925px) {
    height: 32px;
  }
`

const AccountMenuItem = styled.div`
  display: flex;
  align-items: center;
`

const NavBar = () => {
  const [showDark, setShowDark] = useState(window.scrollY > 0)
  const [showNavBarMenu, setShowNavBarMenu] = useState(false)
  const [isNavBarCompacted, setIsNavBarCompacted] = useState(
    window.innerWidth < 850
  )

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
              <NavLinkStyled exact activeStyle={{ fontWeight: 500 }} to="/">
                Home
              </NavLinkStyled>
            </MenuItem>
            <MenuItem>
              <NavLinkStyled
                exact
                activeStyle={{ fontWeight: 500 }}
                to="/tv-shows"
              >
                TV Shows
              </NavLinkStyled>
            </MenuItem>
            <MenuItem>
              <NavLinkStyled
                exact
                activeStyle={{ fontWeight: 500 }}
                to="/movies"
              >
                Movies
              </NavLinkStyled>
            </MenuItem>
            <MenuItem>
              <NavLinkStyled
                exact
                activeStyle={{ fontWeight: 500 }}
                to="/latest"
              >
                News & Popular
              </NavLinkStyled>
            </MenuItem>
            <MenuItem>
              <NavLinkStyled
                exact
                activeStyle={{ fontWeight: 500 }}
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
              exact
              activeStyle={{ fontWeight: 500 }}
              to="/"
            >
              Home
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
          <MenuItemDesktop>
            <NavLinkDesktopStyled
              exact
              activeStyle={{ fontWeight: 500 }}
              to="/tv-shows"
            >
              TV Shows
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
          <MenuItemDesktop>
            <NavLinkDesktopStyled
              exact
              activeStyle={{ fontWeight: 500 }}
              to="/movies"
            >
              Movies
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
          <MenuItemDesktop>
            <NavLinkDesktopStyled
              exact
              activeStyle={{ fontWeight: 500 }}
              to="/latest"
            >
              News & Popular
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
          <MenuItemDesktop>
            <NavLinkDesktopStyled
              exact
              activeStyle={{ fontWeight: 500 }}
              to="/my-list"
            >
              My List
            </NavLinkDesktopStyled>
          </MenuItemDesktop>
        </MenuDesktop>
      )}
      <IconsContainer>
        <NavElement>
          <SearchIcon />
        </NavElement>
        <NavElement>
          <GiftIcon />
        </NavElement>
        <NavElement>
          <BellIcon />
        </NavElement>
        <NavElement hideMargin>
          <AccountMenuItem>
            <ProfileIcon
              src="https://occ-0-4406-33.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABb668VXA2FuedO7QoMEVfJNZVdKb5wsfPO-vhAlHnIxV6myhirfbSzBt3xDfER3ulqWjNoS8xqSp-RynnH3p5Kc.png?r=f3f"
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

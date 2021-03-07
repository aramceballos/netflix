import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Search } from '@styled-icons/heroicons-outline'
import { Close } from '@styled-icons/ionicons-outline/Close'
import { Gift } from '@styled-icons/boxicons-regular'
import { Bell } from '@styled-icons/boxicons-solid'
import { ArrowDropDown } from '@styled-icons/material'

import { fadeIn, widthAnimation } from '../../styles/animations'

type IContainerProps = {
  dark?: boolean
}

type INavElementProps = {
  hideMargin?: boolean
}

type ISearchIcon = {
  isInInput?: boolean
}

export const Container = styled.div<IContainerProps>`
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

export const StyledLink = styled(Link)`
  height: 68px;
  display: flex;
  align-items: center;
`

export const Img = styled.img`
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

export const MenuText = styled.p`
  font-size: 8px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    font-size: 12px;
  }
`

export const MenuContainer = styled.div`
  position: absolute;
  top: 64px;
`

export const Arrow = styled.div`
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

export const TopBar = styled.div`
  height: 2px;
  background-color: #e5e5e5;
`

export const Menu = styled.ul`
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

export const MenuItem = styled.li`
  @media screen and (min-width: 850px) {
    margin-left: 20px;
  }
`

export const MenuDesktop = styled.ul`
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

export const MenuItemDesktop = styled.li`
  margin-left: 10px;

  @media screen and (min-width: 925px) {
    margin-left: 12px;
  }

  @media screen and (min-width: 1100px) {
    margin-left: 19px;
  }
`

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  width: 260px;
  height: 50px;
  align-items: center;
  justify-content: center;
`

export const NavLinkDesktopStyled = styled(NavLink)`
  font-size: 9px;

  @media screen and (min-width: 925px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1150px) {
    font-size: 13px;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 4%;
  top: 0;
  height: 100%;
`

export const NavElement = styled.div<INavElementProps>`
  position: relative;
  margin-right: ${({ hideMargin }) => (hideMargin ? '0' : '20px')};

  @media screen and (min-width: 925px) {
    margin-right: ${({ hideMargin }) => (hideMargin ? '0' : '22px')};
  }
`

export const SearchIcon = styled(Search)<ISearchIcon>`
  width: 12.5px;
  cursor: pointer;

  ${({ isInInput }) =>
    isInInput &&
    css`
      position: absolute;
      left: 7px;
      top: 9px;
    `}

  @media screen and (max-width: 400px) {
    display: none;
  }

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

export const SearchContainer = styled.div`
  height: 34px;
  width: 260px;
  position: absolute;
  top: -16px;
  right: 0;
  ${widthAnimation()}
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  border: solid 1px rgba(255, 255, 255, 0.85);
  color: #fff;
`

export const CloseIcon = styled(Close)`
  position: absolute;
  width: 25px;
  top: 4px;
  right: 2px;
`

export const GiftIcon = styled(Gift)`
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

export const BellIcon = styled(Bell)`
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

export const ArrowDropDownIcon = styled(ArrowDropDown)`
  width: 25px;
  cursor: pointer;

  @media screen and (min-width: 925px) {
    width: 22px;
  }
`

export const ProfileIcon = styled.img`
  border-radius: 4px;
  height: 32px;
`

export const AccountMenuItem = styled.div`
  display: flex;
  align-items: center;
`

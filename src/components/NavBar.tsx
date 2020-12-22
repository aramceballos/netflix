import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { Search } from "@styled-icons/heroicons-outline"
import { Gift } from "@styled-icons/boxicons-regular"
import { Bell } from "@styled-icons/boxicons-solid"
import { ArrowDropDown } from "@styled-icons/material"

import logo from "../assets/Netflix_Logo_PMS.png"

interface IContainerProps {
  dark?: boolean
}

const Container = styled.div<IContainerProps>`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: fixed;
  width: 100vw;
  top: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  background-color: ${({ dark }) => dark && "rgba(20, 20, 20)"};
  transition: 0.4s ease background-color;
`

const StyledLink = styled(Link)`
  height: 68px;
  display: flex;
  align-items: center;
`

const Img = styled.img`
  height: 50px;
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  font-size: 13px;
  margin: 0;
  font-weight: 300;
  letter-spacing: 1.2px;
`
const Li = styled.li`
  margin-left: 20px;
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

const NavElement = styled.div`
  margin-right: 20px;
`

const SearchIcon = styled(Search)`
  width: 25px;
  cursor: pointer;
`

const GiftIcon = styled(Gift)`
  width: 25px;
  cursor: pointer;
`

const BellIcon = styled(Bell)`
  width: 25px;
  cursor: pointer;
`

const ArrowDropDownIcon = styled(ArrowDropDown)`
  width: 25px;
  cursor: pointer;
`

const ProfileIcon = styled.img`
  border-radius: 4px;
`

const AccountMenuItem = styled.div`
  display: flex;
  align-items: center;
`

const NavBar = () => {
  const [showDark, setShowDark] = useState(window.scrollY > 0)

  useEffect(() => {
    const onScroll = () => {
      const newShowDark = window.scrollY > 0
      showDark !== newShowDark && setShowDark(newShowDark)
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [showDark])

  return (
    <Container dark={showDark}>
      <StyledLink to="/">
        <Img src={logo} alt="logo" />
      </StyledLink>
      <Ul>
        <Li>
          <NavLink exact activeStyle={{ fontWeight: 500 }} to="/">
            Home
          </NavLink>
        </Li>
        <Li>
          <NavLink exact activeStyle={{ fontWeight: 500 }} to="/tv-shows">
            TV Shows
          </NavLink>
        </Li>
        <Li>
          <NavLink exact activeStyle={{ fontWeight: 500 }} to="/movies">
            Movies
          </NavLink>
        </Li>
        <Li>
          <NavLink exact activeStyle={{ fontWeight: 500 }} to="/latest">
            News & Popular
          </NavLink>
        </Li>
        <Li>
          <NavLink exact activeStyle={{ fontWeight: 500 }} to="/my-list">
            My List
          </NavLink>
        </Li>
      </Ul>
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
        <NavElement>
          <AccountMenuItem>
            <ProfileIcon
              src="https://occ-0-4406-33.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABb668VXA2FuedO7QoMEVfJNZVdKb5wsfPO-vhAlHnIxV6myhirfbSzBt3xDfER3ulqWjNoS8xqSp-RynnH3p5Kc.png?r=f3f"
              alt="profile-icon"
            />
            <ArrowDropDownIcon />
          </AccountMenuItem>
        </NavElement>
      </IconsContainer>
    </Container>
  )
}

export default NavBar

import styled from 'styled-components'

export const Container = styled.div`
  z-index: 2;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`

export const ListTitle = styled.p`
  font-size: 12px;
  margin: 0;

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1330px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }
`

export const Ul = styled.ul`
  list-style: none;
  overflow-x: scroll;
  display: flex;
  padding: 0;
  margin: 7px 0;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const ImageItem = styled.img`
  max-width: 146px;
  border-radius: 1px;
  margin-right: 2px;

  @media screen and (min-width: 768px) {
    max-width: 230px;
  }

  @media screen and (min-width: 925px) {
    max-width: 210px;
    border-radius: 3px;
    margin-right: 3px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 210px;
    border-radius: 4px;
    margin-right: 4px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 295px;
    margin-right: 6px;
  }
`

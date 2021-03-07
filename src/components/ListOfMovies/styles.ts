import styled from 'styled-components'

export const Container = styled.div`
  top: -30px;
  z-index: 2;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1100px) {
    top: -130px;
  }

  @media screen and (min-width: 1400px) {
    top: -180px;
  }
`

export const ListTitle = styled.p`
  font-size: 12px;
  margin: 0;
  padding-left: 15px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1330px) {
    font-size: 18px;
  }
`

export const Ul = styled.ul`
  list-style: none;
  overflow-x: scroll;
  display: flex;
  padding: 0;
  margin: 7px 0;
  padding-left: 15px;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const ImageItem = styled.img`
  max-width: 170px;
  border-radius: 4px;
  margin-right: 4px;

  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`

import styled from 'styled-components'
import { Close } from '@styled-icons/ionicons-outline/Close'
import { Play } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: calc(100% - 8px);
  margin: 32px 4px;
  background-color: #141414;
  z-index: 99999;
  border-radius: 6px;

  @media (min-width: 925px) {
    width: 850px;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  top: 16px;
  right: 16px;
  border-radius: 50%;
  z-index: 1;
  background-color: #141414;
`

export const CloseIcon = styled(Close)`
  position: absolute;
  width: 30px;
  top: 3px;
  right: 3px;
`

export const ImageItem = styled.img`
  max-width: 170px;
  border-radius: 4px;
  margin-right: 4px;

  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`
export const ImageContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
`

export const ImageInfoContainer = styled.div`
  position: absolute;
  top: 56px;
  padding-left: 50px;

  @media screen and (min-width: 480px) {
    top: 110px;
  }

  @media screen and (min-width: 768px) {
    top: 220px;
  }

  @media screen and (min-width: 925px) {
    top: 280px;
  }

  @media screen and (min-width: 1100px) {
    top: 235px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  @media screen and (min-width: 480px) {
    font-size: 25px;
  }
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
  @media screen and (min-width: 925px) {
    font-size: 50px;
  }
`

export const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

export const ButtonsContainer = styled.div`
  display: flex;
`

export const PlayButton = styled.button`
  background-color: #fff;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  width: 60px;
  height: 31px;
  margin-right: 5px;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    width: 80px;
  }
  @media screen and (min-width: 1100px) {
    width: 102px;
    height: 37px;
    padding-left: 10px;
  }
`

export const PlayIcon = styled(Play)`
  width: 20px;

  @media screen and (min-width: 480px) {
    width: 30px;
  }

  @media screen and (min-width: 1100px) {
    width: 40px;
  }
`

export const ButtonText = styled.span`
  font-size: 10px;

  @media screen and (min-width: 480px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1100px) {
    font-size: 14px;
  }
`

export const Shadow = styled.div`
  width: 100%;
  -webkit-appearance: none;
  box-shadow: 0px 0px 20px 20px #141414;
  -webkit-box-shadow: 0px 0px 20px 30px #141414;
  position: relative;
  z-index: 2;
  height: 1px;
  background-color: #141414;
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #141414;
  position: relative;
  z-index: 2;
  grid-gap: 32px;
  padding: 0 48px 30px;
  border-radius: 6px;
`

export const Column = styled.section``

export const InfoText = styled.p`
  margin: 0 0 10px;
  line-height: 25px;
  font-size: 14px;
  letter-spacing: 0.2px;
`

export const InfoTextList = styled.p`
  margin: 0 0 10px;
  line-height: 21px;
  font-size: 14px;
  letter-spacing: 0.2px;
`

export const Label = styled.p`
  color: #777777;
  font-size: 14px;
  margin-bottom: 0;
`

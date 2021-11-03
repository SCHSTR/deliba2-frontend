import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.light_theme.white};
    color: ${props => props.theme.light_theme.text};
    font-family: 'Sora', sans-serif;
    font-size: 16px;
  }
`
export const Section = styled.section`
  margin: 184px 0;
`

export const Container = styled.div`
  max-width: none;
  margin-left: 5vw;
  margin-right: 5vw;

  @media only screen and (min-width: 768px) {
    max-width: 1084px;
    margin-left: auto;
    margin-right: auto;
  }
`
export const JumboContainer = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin: 36px 0 72px 0;

  h2{
    font-size: ${props => props.theme.default.heading_2};
    color: ${props => props.theme.light_theme.primary}
  }
`

export const TwoColumn = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px; 

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr;
    gap: 48px 48px; 
  }
`

export const BtnDefault = styled.a`
  margin: 0;
  color: white !important;
  cursor: pointer;
  padding: 14px 32px;
  border-radius: 16px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: ${props => props.theme.light_theme.primary};
  border: 4px solid rgba(255, 255, 255, .35);

  &:hover{
    color: rgba(255, 255, 255, .35) !important;
  }
`
export const CustomInput = styled.input`
  margin: 6px 0;
  background: white;
  padding: 14px;
  border-radius: 16px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 3px solid rgba(0, 0, 0, .05);
  transition: all 350ms ease;

    &:focus-within{
      outline: none;
      border: 3px solid ${props => props.theme.light_theme.primary};
    }
`

export const Btn = styled.button`
  margin: 0;
  color: white !important;
  cursor: pointer;
  padding: 14px 32px;
  border-radius: 16px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: ${props => props.theme.light_theme.primary};
  border: 4px solid rgba(255, 255, 255, .35);

  &:hover{
    color: rgba(255, 255, 255, .35) !important;
  }
`
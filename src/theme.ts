import { createGlobalStyle } from 'styled-components';
export const darkTheme = {
  body: '#000000',
  textColor: '#ffffff',
  modalTextColor: '#000000',
  headingColor: 'lightblue',
};
export const lightTheme = {
  body: '#ffffff',
  textColor: '#000000',
  modalTextColor: '#000000',
  headingColor: '#d23669',
};

type ThemeProps = {
  theme: typeof darkTheme;
};

export const GlobalStyles = createGlobalStyle<ThemeProps>`
 body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textColor};
  transition: .5s ease;
  & .modal-background {
    background: '#FFFFFF';
    color: ${(props) => props.theme.modalTextColor};
  }
 }
 h2{
   color: ${(props) => props.theme.headingColor};
 }
`;

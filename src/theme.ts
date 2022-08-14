import { createGlobalStyle } from 'styled-components';
export const darkTheme = {
  body: '#000000',
  textColor: '#ffffff',
  modalTextColor: '#000000',
  headingColor: 'lightblue',
  scrollBarColor: '#FFFFFF',
  thumbColor: '#917eff',
};

export const lightTheme = {
  body: '#ffffff',
  textColor: '#000000',
  modalTextColor: '#000000',
  headingColor: '#d23669',
  scrollBarColor: '#a9a9a9',
  thumbColor: '#808080',
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
  & .table-container{
      &::-webkit-scrollbar {
      background-color: ${(props) => props.theme.scrollBarColor};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.thumbColor};
    }
  }
 }
 h2{
   color: ${(props) => props.theme.headingColor};
 }
`;

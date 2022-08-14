import styled from 'styled-components';

export default function MoonSvg() {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </Container>
  );
}

const Container = styled.div`
  height: '100%';
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
`;

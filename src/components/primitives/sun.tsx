import styled from 'styled-components';

export default function Sun() {
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
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
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
  padding-top: 3px;
`;

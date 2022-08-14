import styled from 'styled-components';
import { Circles } from 'react-loader-spinner';
import { useAppContext } from '../../context/state';

export default function Loader() {
  const { loading } = useAppContext();
  return (
    <Container>
      {loading && (
        <LoaderContainer>
          <Circles color="#917EFF" height={80} width={80} />
        </LoaderContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: '100%';
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderContainer = styled.div`
  height: 100%;
    background-color: black;
    position: absolute;
    opacity: 0.5;
    align-items: center;
    display: flex;
    justify-content: center;\
    top: 0;
    left: 0;
    right: 0;
`;

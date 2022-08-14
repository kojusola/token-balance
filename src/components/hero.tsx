import styled from 'styled-components';
import InputForm from './input-form';

export default function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        Get the Balance of your ERC20 tokens - LINK, USDT and DAI. <br />
        Just By adding Your Wallet address
      </HeroText>
      <InputForm />
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const HeroText = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'VPPixel-Simplified';
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

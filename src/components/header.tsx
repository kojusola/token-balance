import { useState } from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';
import MoonSvg from './primitives/moon';
import SunSvg from './primitives/sun';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Header() {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };
  return (
    <div style={{ width: '100%' }}>
      <ToastContainer />
      <HeroContainer>
        <HeroText>TOKENBAL</HeroText>
        <Switch
          checked={checked}
          disabled={false}
          onChange={handleChange}
          checkedIcon={<SunSvg />}
          uncheckedIcon={<MoonSvg />}
          activeBoxShadow="0 0 2px 3px #917eff"
          onHandleColor="#917eff"
          onColor="#000000"
          offColor="#917eff"
        />
      </HeroContainer>
    </div>
  );
}

const HeroContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 20px;
    overflow-x: hidden;
  }
`;

const HeroText = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'VPPixel-Simplified';
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

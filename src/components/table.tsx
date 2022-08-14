import styled from 'styled-components';

export default function Table() {
  return (
    <TableContainer>
      <TableHeader>
        <AddressCell>Address</AddressCell>
        <BalanceCell>LINK</BalanceCell>
        <BalanceCell>USDT</BalanceCell>
        <BalanceCell>DAI</BalanceCell>
      </TableHeader>
      <TableBody>
        <AddressCell>Address</AddressCell>
        <BalanceCell>LINK</BalanceCell>
        <BalanceCell>USDT</BalanceCell>
        <BalanceCell>DAI</BalanceCell>
      </TableBody>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 50px;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 15px;
      height: 10px;
      border-radius: 30px;
      background-color: #a9a9a9;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 10px;
      border-radius: 30px;
      background-color: #808080;
    }
  }
`;

const TableHeader = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TableBody = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const AddressCell = styled.div`
  width: 29%;
  @media (max-width: 768px) {
    min-width: 200px;
  }
`;

const BalanceCell = styled.div`
  width: 22.3%;
  @media (max-width: 768px) {
    min-width: 200px;
  }
`;

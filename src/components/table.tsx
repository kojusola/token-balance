import styled from 'styled-components';
import { useAppContext } from '../context/state';
import { addressShortner } from '../utils/helpers';

export default function Table() {
  const { allTokensData } = useAppContext();
  return (
    <div style={{ width: '100%' }}>
      {allTokensData && allTokensData.length > 0 && (
        <TableContainer className="table-container">
          <TableHeader>
            <AddressCell>Address</AddressCell>
            <BalanceCell>LINK</BalanceCell>
            <BalanceCell>USDT</BalanceCell>
            <BalanceCell>DAI</BalanceCell>
          </TableHeader>
          {allTokensData &&
            allTokensData.map((data: any) => {
              return (
                <TableBody>
                  <AddressCell>
                    {addressShortner({ address: data.address, shorter: true })}
                  </AddressCell>
                  <BalanceCell>
                    {Math.round(Number(data.Link) / 10 ** 18)}{' '}
                  </BalanceCell>
                  <BalanceCell>
                    {Math.round(Number(data.Usdt) / 10 ** 6)}{' '}
                  </BalanceCell>
                  <BalanceCell>
                    {Math.round(Number(data.Dai) / 10 ** 18)}{' '}
                  </BalanceCell>
                </TableBody>
              );
            })}
        </TableContainer>
      )}
    </div>
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
    padding-bottom: 50px;
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 50px;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 15px;
      height: 10px;
      border-radius: 30px;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 10px;
      border-radius: 30px;
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

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ethers } from 'ethers';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalCloseButton,
} from './primitives/dialog';
import useTokens from '../utils/web3/hooks/tokens';
import { useAppContext } from '../context/state';

interface IFormData {
  address: string;
}

export default function InputForm() {
  const { getAllTokensBalance } = useTokens();
  const { setLoading } = useAppContext();
  const validationSchema = Yup.object().shape({
    address: Yup.string().required('Address To transfer is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } =
    useForm<IFormData>(formOptions);

  const { errors } = formState;

  const onSubmit = async (data: IFormData) => {
    setLoading(true);
    if (!ethers.utils.isAddress(data.address)) {
      return toast.error('Invalid Ethereum Address');
    }
    const allAddress = JSON.parse(localStorage.getItem('addresses') || '[]');
    if (allAddress.includes(data.address)) {
      return toast.error('Address already exists');
    }
    const newAddress = [...allAddress, data.address];
    localStorage.setItem('addresses', JSON.stringify(newAddress));
    await getAllTokensBalance();
    toast.success('Address added to list');
    setLoading(false);
    reset();
    return;
  };

  return (
    <Modal>
      <StyledModalTrigger>
        <HeroButton>Add Wallet Address</HeroButton>
      </StyledModalTrigger>
      <ModalContent className="modal-background">
        <StyledClosedButton>
          <ModalCloseButton />
        </StyledClosedButton>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <HeadingText>Add Address</HeadingText>
          <FormLabel>Wallet Address*</FormLabel>
          <FormInput {...register('address')}></FormInput>
          <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
          <StyledModalTrigger>
            <HeroButton type="submit">Add Address</HeroButton>
          </StyledModalTrigger>
        </FormContainer>
      </ModalContent>
    </Modal>
  );
}

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 40px;
  padding-top: 20px;
`;

const HeadingText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'VPPixel-Simplified';
  margin-bottom: 30px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const FormLabel = styled.p`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;
const FormInput = styled.input`
  background-color: transparent;
  height: 60px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 22px;
  @media (max-width: 768px) {
    max-width: 300px;
  }
  @media (max-width: 479px) {
    max-width: 250px;
  }
`;
const FormErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  line-height: 22px;
`;

const HeroButton = styled.button`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #917eff;
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin-top: 50px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
    padding: 13px;
  }
`;
export const StyledClosedButton = styled.div`
  position: absolute;
  top: 10px;
  right: 45px;
`;

export const StyledModalTrigger = styled(ModalTrigger)`
  border-width: 0;
  background-color: transparent;
  &:focus {
    border: none;
    border-width: 0;
    outline: none;
  }
  &[data-state='open'] {
    border: none;
    outline: none;
  }
  &[data-state='closed'] {
    border: none;
  }
`;

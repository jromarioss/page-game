import { useMain } from '@/hooks';
import { IoCloseSharp } from 'react-icons/io5';
import * as S from './styles';
import QrCode from '@/assets/qr_code.jpeg';

export const ModalBuy = () => {
  const { onSetOpenModal } = useMain();
  return (
    <S.Container onClick={() => onSetOpenModal(false)}>
      <S.Main>
        <S.Close onClick={() => onSetOpenModal(false)}><IoCloseSharp /></S.Close>

        <S.QrCode><img src={QrCode} alt="qr code" /></S.QrCode>
      </S.Main>
    </S.Container>
  )
}
import { useMain } from '@/hooks';
import { IoCloseSharp } from 'react-icons/io5';
import * as S from './styles';
import { QRCodeSVG } from 'qrcode.react';

export const ModalBuy = () => {
  const { onSetOpenModal } = useMain();
  const KEY_USER = "0x085e8d97dfb6e742895fdcd78765139e055d1a42";


  const handleCopy = () => {
    navigator.clipboard.writeText(KEY_USER)
      .then(() => {
        alert("QR Code copiado com sucesso!");
      })
      .catch(() => {
        alert("Falhar ao copiar o QR Code tente novamente mais tarde!");
      });
  };

  return (
    <S.Container>
      <S.Main>
        <S.Close onClick={() => onSetOpenModal(false)}><IoCloseSharp /></S.Close>

        <S.QrCode>
          <QRCodeSVG value={KEY_USER} className='w-[150px] h-[150px] md:w-[200px] md:h-[200px]' />
        </S.QrCode>

        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-medium md:text-2xl">1 DYNOCOIN = 1 USDT</p>
          <p className="text-xl font-medium md:text-2xl">1 OVO = 100 DYNOCOINS</p>
        </div>

        <S.ButtonCopy onClick={handleCopy}>COPIAR</S.ButtonCopy>
      </S.Main>
    </S.Container>
  )
}
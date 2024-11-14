import * as S from './styles';
import FoxImg from '@/assets/metamask.svg';
import { IoCloseSharp } from 'react-icons/io5';
import { useMain } from '@/hooks';

export const ModalWallet = () => {
  const { onSetShowModalWallet } = useMain();

  return (
    <S.Container>
      <S.Content>
        <S.ButtonClose onClick={() => onSetShowModalWallet(false)}>
          <IoCloseSharp className='text-zinc-500 font-bold' />
        </S.ButtonClose>

        <h2>Conectar uma Carteira</h2>

        <S.Main>
          <S.Row>
            <S.Image>
              <img src={FoxImg} alt="fox" />
            </S.Image>
            <S.ButtonConnect >
              MetaMask
            </S.ButtonConnect>
          </S.Row>
        </S.Main>
      </S.Content>
    </S.Container>
  );
};

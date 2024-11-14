import { MainContext } from '../../context';
import { useContext } from 'react';

export const useMain = () => {
  return useContext(MainContext);
}
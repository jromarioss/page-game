import { Home } from '@/pages';
import { MainContextProvider } from '@/context';

function App() {
  return (
    <MainContextProvider>
      <Home />
    </MainContextProvider>
  )
}

export default App

import { Home } from './pages/Home';

import { ContextProvider } from './context/context';

const App = () => {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
};

export default App;

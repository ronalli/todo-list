import { Home } from './pages/Home';
import './App.css';

import { ContextProvider } from './context/context';

const App = () => {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
};

export default App;

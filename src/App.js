import { Provider } from 'react-redux';
import './App.css';
import Head from './components/Head';
import store from './utils/store';
import Body from './components/Body';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Streamify: Largest Streaming Platform.';
  }, []);

  return (
    <Provider store={store}>
    <div> 
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;

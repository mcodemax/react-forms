import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList';

import Box from './Box';

function App() {
  return (
    <div className="App">
      <Box height={50}/>
      <BoxList />
    </div>
  );
}

export default App;

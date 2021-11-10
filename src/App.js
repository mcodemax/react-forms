import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList';

import Box from './Box';

function App() {
  return (
    <div className="App">
      {/* <Box height={'0px'} width={'0px'}/> */}
      <BoxList />
    </div>
  );
}

export default App;

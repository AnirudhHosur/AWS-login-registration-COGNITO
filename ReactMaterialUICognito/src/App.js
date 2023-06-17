import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Routes from './routes/Routes';

function App() {
  return (
    <Box>
      <Navbar />
      <Box>
        <Routes />
      </Box>
    </Box>
  );
}

export default App;

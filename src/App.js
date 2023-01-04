import './App.css';
import ExperienceCard from './components/cards/ExperienceCard';
import MediaCard from './components/cards/MediaCard';
import PictureCard from './components/cards/PictureCard';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <br />
        <ExperienceCard />
        <br />
        <PictureCard />
        <br />
        <MediaCard />
      </div>
    </ThemeProvider>
  );
}

export default App;

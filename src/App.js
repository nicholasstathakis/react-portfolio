import './App.css';
import MediaCard from './components/cards/MediaCard';
import PictureCard from './components/cards/PictureCard';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import CustomDivider from './components/CustomDivider';
import forcite from './static/forcite.jpg'
import { Skills } from './Skills';

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

        <CustomDivider title={"Work Experience"} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <PictureCard
            title={"Forcite"}
            blurb={"The worlds first mass-produced Smart Helmet which promotes rider safety."}
            image={forcite}
            fullDescription={"I am some full description. I should be humungous."}
            moreInfoLink={"https://www.forcitehelmets.com"}
            skills={[Skills.Android, Skills.Kotlin]} />
          
        </Box>
        

        <CustomDivider title={"Hobbies"} />
        <MediaCard />
      </div>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import MediaCard from './components/cards/MediaCard';
import PictureCard from './components/cards/PictureCard';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import CustomDivider from './components/CustomDivider';
import { Skills } from './enum/Skills';

import abc from './static/abc.png'
import forcite from './static/forcite.jpg'
import passiona from './static/passiona.jpg'
import SubjectList from './components/subjects/SubjectList';

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
          className='list-item'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <PictureCard
            title={"ABC"}
            blurb={"Australia's most trusted source for news and information."}
            image={abc}
            fullDescription={"I am some full description. I should be humungous."}
            moreInfoLink={"https://www.abc.net.au"}
            skills={[Skills.Android, Skills.Kotlin, Skills.Compose]} />

          <PictureCard
            title={"Forcite"}
            blurb={"The worlds first mass-produced Smart Helmet which promotes rider safety."}
            image={forcite}
            fullDescription={"I am some full description. I should be humungous."}
            moreInfoLink={"https://www.forcitehelmets.com"}
            skills={[Skills.Android, Skills.Kotlin, Skills.Architecture]} />
        </Box>

        <CustomDivider title={"Academics"} />

        <div style={{ width: '100%' }}>
          <SubjectList />
        </div>



        <CustomDivider title={"Games"} />

        


        <CustomDivider title={"Music"} />

        <Box
          className='list-item'
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <MediaCard
            artist={"Orange Passiona"}
            title={"The Squeeze"}
            image={passiona} />
        </Box>

      </div>
    </ThemeProvider >
  );
}

export default App;

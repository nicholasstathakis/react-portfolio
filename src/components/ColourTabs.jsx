import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColourTabs() {
  const [value, setValue] = React.useState('work');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
        sx={{ width: '100%', display: { xs: 'flex', sm: 'block' }}} 
        style={{justifyContent:'center', alignItems:'center'}}
        >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="work" label="Work" />
        <Tab value="school" label="School" />
        <Tab value="hobbies" label="Hobbies" />
        <Tab value="music" label="Music" />
      </Tabs>
    </Box>
  );
}
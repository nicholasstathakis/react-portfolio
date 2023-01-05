import * as React from 'react';
import List from '@mui/material/List';
import SubjectItem from './SubjectItem';
import { Languages } from '../../enum/Languages';
import { Badge, Button, Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// [{'code':'COMP1511', 'description':'Programming Fundamentals', 'mark':90, 'languages':[Languages.C] }]
export default function SubjectList({
  subjectsInformationList
}) {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const lst = [
    { 'code': 'COMP2511', 'description': 'Object Oriented Programming', 'mark': 100, 'languages': [Languages.C], 'term': '22T3' },
    { 'code': 'COMP1511', 'description': 'Programming Fundamentals', 'mark': 89, 'languages': [Languages.C], 'term': '21T1' },
    { 'code': 'COMP6080', 'description': 'Front End Web Development', 'mark': 93, 'languages': [Languages.C], 'term': '22T3' },
  ]

  const first = []
  const last = []

  first.push(lst[0])
  last.push(lst[1])
  last.push(lst[2])

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {first.map((item, idx) => {
        return <SubjectItem
          courseName={item.code}
          description={item.description}
          termTaken={item.term}
          mark={item.mark}
          languages={item.languages} />
      })}

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {last.map((item, idx) => {
            return <SubjectItem
              courseName={item.code}
              description={item.description}
              termTaken={item.term}
              mark={item.mark}
              languages={item.languages} />
          })}
        </List>
      </Collapse>

      <div style={{ marginTop:'10px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" color="secondary" onClick={handleClick}>
          <ListItemText primary={open ? "See Less" : "See More"} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </div>

      {/* <ListItemButton onClick={handleClick}>
        <ListItemText primary={open ? "See Less" : "See More"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton> */}



    </List>
  );
}
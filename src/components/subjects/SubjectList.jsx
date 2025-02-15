import * as React from 'react';
import List from '@mui/material/List';
import SubjectItem from './SubjectItem';
import { Languages } from '../../enum/Languages';
import { Button, Collapse, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// [{'code':'COMP1511', 'description':'Programming Fundamentals', 'mark':90, 'languages':[Languages.C] }]
export default function SubjectList({
  subjectsInformationList
}) {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const lstUnsorted = [
    { 'code': 'COMP1511', 'description': 'Programming Fundamentals', 'mark': 84, 'languages': [Languages.C], 'term': '21T1' },
    { 'code': 'MATH1081', 'description': 'Discrete Mathematics', 'mark': 85, 'languages': [], 'term': '21T1' },
    { 'code': 'MATH1131', 'description': 'Mathematics 1A', 'mark': 84, 'languages': [], 'term': '21T1' },

    { 'code': 'COMP1521', 'description': 'Computer Systems Fundamentals', 'mark': 90, 'languages': [Languages.C], 'term': '21T2' },
    { 'code': 'COMP2521', 'description': 'Data Structures and Algorithms', 'mark': 97, 'languages': [Languages.C], 'term': '21T2' },
    { 'code': 'MATH1231', 'description': 'Mathematics 1B', 'mark': 85, 'languages': [], 'term': '21T1' },

    { 'code': 'COMP1531', 'description': 'Software Engineering Fundamentals', 'mark': 91, 'languages': [Languages.Python], 'term': '21T3' },
    { 'code': 'COMP3331', 'description': 'Computer Networks & Applications', 'mark': 82, 'languages': [Languages.Java], 'term': '21T3' },

    { 'code': 'COMP3231', 'description': 'Operating Systems', 'mark': 94, 'languages': [Languages.C], 'term': '22T1' },
    { 'code': 'COMP3411', 'description': 'Artificial Intelligence', 'mark': 88, 'languages': [Languages.Prolog], 'term': '22T1' },

    { 'code': 'COMP3121', 'description': 'Algorithms & Programming Techniques', 'mark': 96, 'languages': [], 'term': '22T2' },
    { 'code': 'COMP9517', 'description': 'Computer Vision', 'mark': 98, 'languages': [Languages.Python], 'term': '22T2' },

    { 'code': 'COMP2511', 'description': 'Object Oriented Design and Programming', 'mark': 100, 'languages': [Languages.Java], 'term': '22T3' },
    { 'code': 'COMP6080', 'description': 'Web Front-End Programming', 'mark': 93, 'languages': [Languages.React], 'term': '22T3' },

    { 'code': 'COMP3131', 'description': 'Programming Languages and Compilers', 'mark': 93, 'languages': [Languages.Java], 'term': '23T1' },
    { 'code': 'COMP3311', 'description': 'Database Systems', 'mark': 99, 'languages': [Languages.Python, Languages.SQL], 'term': '23T1' },

    { 'code': 'COMP2041', 'description': 'Software Construction: Techniques and Tools', 'mark': 96, 'languages': [Languages.Python, Languages.Shell], 'term': '23T2' },
    { 'code': 'COMP9312', 'description': 'Data Analytics for Graphs', 'mark': 90, 'languages': [Languages.Python], 'term': '23T2' },

    { 'code': 'COMP4336', 'description': 'Mobile Data Networking', 'mark': 89, 'languages': [Languages.Java], 'term': '23T3' },
    { 'code': 'COMP4920', 'description': 'Professional Issues and Ethics in Information', 'mark': 81, 'languages': [], 'term': '23T3' },

    { 'code': 'COMP9321', 'description': 'Data Services Engineering', 'mark': 97, 'languages': [Languages.Python], 'term': '24T1' },
    { 'code': 'PHYS1160', 'description': 'Introduction to Astronomy', 'mark': 90, 'languages': [], 'term': '24T1' },

    { 'code': 'COMP3900', 'description': 'Computer Science Project', 'mark': 83, 'languages': [Languages.Python, Languages.React], 'term': '24T2' },
    { 'code': 'SCIF1004', 'description': 'Science and the Cinema', 'mark': 97, 'languages': [], 'term': '24T2' },
  ]

  const lstSorted = lstUnsorted.sort(({mark:a}, {mark:b}) => b-a);

  const first = []
  const last = []

  for (let i = 0; i < 5; i++) {
    first.push(lstSorted[i])
  }

  for (let i = 5; i < lstSorted.length; i++) {
    last.push(lstSorted[i])
  }

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
import * as React from 'react';
import List from '@mui/material/List';
import SubjectItem from './SubjectItem';
import { Languages } from '../../enum/Languages';

// [{'code':'COMP1511', 'description':'Programming Fundamentals', 'mark':90, 'languages':[Languages.C] }]
export default function SubjectList({
    subjectsInformationList
}) {

  const lst = [
    {'code':'COMP2511', 'description':'Object Oriented Programming', 'mark':100, 'languages':[Languages.C] },
    {'code':'COMP1511', 'description':'Programming Fundamentals', 'mark':89, 'languages':[Languages.C] },
    {'code':'COMP6080', 'description':'Front End Web Development', 'mark':93, 'languages':[Languages.C] },
  ]
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {lst.map((item, idx) => {
        return <SubjectItem 
                  courseName={item.code}
                  description={item.description}
                  termTaken={'10T1'}
                  mark={item.mark}
                  languages={item.languages}/>
      })}
      
    </List>
  );
}
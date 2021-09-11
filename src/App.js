import React from 'react';

import Input from './components/pages/Input';
import { useState } from 'react';
import List from './components/pages/List';
const MyList=[
{id:1,text:'Str'}
];

function App() {
  const [itemToList,setItemToList]=useState(MyList);
  const [added,setAdded]=useState('');
  const [stack,setStack]=useState(0);
  console.log({added})

  return (
    <div className="App">
     <Input  value={added} onChange={(e)=>setAdded(e.target.value)} onClick={()=>setItemToList([...itemToList,{id:Date.now(),text:added}]) } />
    
    {itemToList.map((item)=>
      <List   text={item.text} />
    ).reverse()}
    
    </div>
  );
}

export default App;

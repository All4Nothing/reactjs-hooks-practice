import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const content = [
  {
    tab:"Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab:"Section 2",
    content: "I'm the content of the Section 2"
  }
]

const useTabs = (initialTab, allTabs) => {
  if(!allTabs || Array.isArray(allTabs)){
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return{
    currentItem: allTabs[currentIndex]
  };
}

function App() {
  const [currentItem] = useTabs(0, content);
  return (
    <div className='App'>
      {content.map(section => (
        <button>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}  
 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

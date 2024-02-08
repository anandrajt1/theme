import React, { useState } from 'react';
import './App.css';
import ThemedComponent from './ThemedComponent';
import { ThemeContext } from './ThemedComponent';



function App() {

  const[theme,setTheme]=useState('light')

  return(
<>

<ThemeContext.Provider value={theme}>
      <ThemedComponent/>
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>

   
</>
  )
  



  
}

export default App;

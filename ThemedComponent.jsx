import React, { useContext,createContext  } from 'react'

// Create a context
export const ThemeContext = createContext();

function ThemedComponent() {
    const theme = useContext(ThemeContext);
  
    return (
      <div style={{ backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' ,textAlign:'center',marginTop:'100px',fontSize:'33px'}}>
        The current theme is {theme}.
      </div>
    );
}

export default ThemedComponent

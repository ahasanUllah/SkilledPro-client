import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState('light');

   const themeInfo = { theme, setTheme };

   useEffect(() => {
      if (theme === 'dark') {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [theme]);
   return (
      <div>
         <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
      </div>
   );
};

export default ThemeProvider;

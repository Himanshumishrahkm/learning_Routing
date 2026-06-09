import React, { createContext, useState } from 'react'

export const userName = createContext();
 
const Context = (props) => {
    const [theme, setTheme] = useState('dark');
  return (
    <> 
        <userName.Provider value={
            {
            user : 'Harsh',
            theme,
            setTheme
            }
        }>
            {props.children}
        </userName.Provider>
    </>
  )
}

export default Context

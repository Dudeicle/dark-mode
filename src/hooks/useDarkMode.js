// import { useEffect } from 'react';


// import useLocalStorage from './useLocalStorage.js';


// export const useDarkMode = (initialValue) => {

//     const [value, setValue] = useLocalStorage('dark-mode', false)

//     useEffect(() => {
//         document.body.classList.toggle("dark-mode")
//     }, [value]);


//     return [value, setValue];
// }


import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode")   
  }, [darkMode])
  console.log(darkMode)
  return [darkMode,setDarkMode];
};
import React, { useState } from 'react';


const useLocalStorage = (key, initialValue) => {
    
    // to retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
        const setValue = value => {
            // Save state
            setStoredValue(value);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored JSON or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });


    return [storedValue];
}

export default useLocalStorage
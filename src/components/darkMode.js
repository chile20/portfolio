import React, {useState, useEffect} from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
//Import Components
import torchLight from '../assets/torch-light.svg';
import torchDark from '../assets/torch-dark.svg'

const useLocalState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key]);

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
};

export default function DarkModeButton() {
  const [theme, setTheme] = useLocalState("theme", "light");

  return (
    <HelmetProvider>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>

      <button
        className="absolute top-0 right-0 focus:outline-none"
        onClick={() => setTheme((cur) => (cur === "light" ? "dark" : "light"))}
      >
        <img className=" h-12 w-18 p-4"
          src={theme === "light" ? torchDark : torchLight}
          alt="toggle theme"
        />
      </button>
  </HelmetProvider>
  );
}
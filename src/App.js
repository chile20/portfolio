import React, {useState, useEffect} from 'react';
import './App.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
// Import Browser Router and Pages
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
//Import Components
import torchLight from './assets/torch-light.svg';
import torchDark from './assets/torch-dark.svg'

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

export default function App() {
  const [username, setUsername] = useLocalState("username", "");
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
      
      <input value={username} onChange={(e) => setUsername(e.target.value)} />

        <BrowserRouter basename="/portfolio"> 
          <div className="App">
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/work">
                  <Work />
                </Route>
            </Switch>
          </div>
        </BrowserRouter>
  </HelmetProvider>
  );
}

// function App() {  return (
//     <BrowserRouter basename="/portfolio"> 
//       <div className="App">
//         <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/work">
//               <Work />
//             </Route>
//         </Switch>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
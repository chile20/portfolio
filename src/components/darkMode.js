import React from "react";
import useDarkMode from "use-dark-mode";

import Toggle from "react-toggle";
import { Sun, Moon } from "react-feather";
import "../assets/css/custom.css";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true);

  return (
    <div className="flex">
      <Toggle
        checked={darkMode.value}
        icons={{
          checked: <Moon size={16} fill="white" />,
          unchecked: <Sun size={16} fill="white" />,
        }}
        onChange={darkMode.toggle}
      />
    </div>
  );
};

export default DarkModeToggle;

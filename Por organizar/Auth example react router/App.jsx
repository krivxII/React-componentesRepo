import React, { useContext, createContext, useState } from "react";


const ThemeContext = React.createContext({
    value: "luz",
    setvalue: () => {this.value=!this.value}
});

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value={ThemeContext}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".

  render() {
      
    return (<div>
        <p>{this.context} </p>
        <button
        onClick={() => {
            
        }}
      >
        Sign out
      </button>
        
        </div>);
  }
}
ThemedButton.contextType = ThemeContext;

export default (App)
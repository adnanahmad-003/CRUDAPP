import React from 'react';
import AppNavigator from './app/navigator/tabNavigator';

const App = () => {
  try {
    return <AppNavigator />;
  } catch (error) {
    console.error("Error in App component:", error);
    return null;
  }
};

export default App;
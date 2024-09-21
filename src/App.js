import React from 'react';
import styles from './App.module.scss';
import GridBoxes from './components/GridBoxes';


const App = () => {
  return (
    <div className={styles.app}>
      <GridBoxes />
    </div>
  );
};

export default App;

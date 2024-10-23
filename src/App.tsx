import { useState, useCallback } from 'react';
import './App.css';

import Map from './components/map/map';
import ColumnBar from './components/columnBar/columnBar';

function App() {
  // State to keep track of selected mobs
  const [selectedMobs, setSelectedMobs] = useState<string[]>([]);

  // Callback function to handle changes in mob selection
  const handleMobSelectionChange = useCallback((newSelectedMobs: string[] | ((prev: string[]) => string[])) => {
    setSelectedMobs(prev => {
      // If newSelectedMobs is a function, call it with the previous state
      // Otherwise, use the new value directly
      const updated = typeof newSelectedMobs === 'function' ? newSelectedMobs(prev) : newSelectedMobs;
      return updated;
    });
  }, []); // Empty dependency array ensures this callback is only created once

  return (
    <div className='App'>
      <ColumnBar 
        selectedMobs={selectedMobs} 
        onMobSelectionChange={handleMobSelectionChange} 
      />
      <Map selectedMobs={selectedMobs} />
    </div>
  );
}

export default App;

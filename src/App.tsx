import { useState, useCallback } from 'react';
import './App.css';

import Map from './components/map/map';
import ColumnBar from './components/columnBar/columnBar';

function App() {
  const [selectedMobs, setSelectedMobs] = useState<string[]>([]);

  const handleMobSelectionChange = useCallback((newSelectedMobs: string[] | ((prev: string[]) => string[])) => {
    setSelectedMobs(prev => {
      const updated = typeof newSelectedMobs === 'function' ? newSelectedMobs(prev) : newSelectedMobs;
      return updated;
    });
  }, []);

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

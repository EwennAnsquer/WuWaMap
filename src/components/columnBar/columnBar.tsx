import React, { useState, useCallback, useEffect } from 'react';

import './columnBar.css'

import { mobTypes } from '../../data'

interface ColumnBarProps {
  selectedMobs: string[];
  onMobSelectionChange: (updater: (prevSelectedMobs: string[]) => string[]) => void;
}

function ColumnBar({ selectedMobs, onMobSelectionChange }: ColumnBarProps) {
  // State to manage the open/closed state of the column bar
  const [isOpen, setIsOpen] = useState(true);
  // State to manage the open/closed state of the dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handler to toggle the open/closed state of the column bar
  const handleCloseOpenClick = () => {
    setIsOpen(!isOpen);
  };

  // Effect to add or remove 'closed' class based on isOpen state
  useEffect(() => {
    if(isOpen){
        document.querySelector('.columnBar')?.classList.add('closed');
    }else{
        document.querySelector('.columnBar')?.classList.remove('closed');
    }
  }, [isOpen]);

  // Memoized handler for mob selection/deselection
  const handleMobClick = useCallback((mobName: string) => {
    onMobSelectionChange(prevSelectedMobs => 
      prevSelectedMobs.includes(mobName)
        ? prevSelectedMobs.filter(mob => mob !== mobName) // Remove mob if already selected
        : [...prevSelectedMobs, mobName] // Add mob if not selected
    );
  }, [onMobSelectionChange]);

  return (
    <div className='columnBar'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <button
          type="button" 
          className='closeOpenButton'
          onClick={handleCloseOpenClick}
        >
            <span className="material-symbols-outlined">
                {isOpen ? 'close' : 'menu'}
            </span>
        </button>
        <h1>WuWaMap</h1>
        <div className="dropdown">
            <div 
                className="dropdown-toggle" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                Mobs
                <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginLeft: '5px' }}>
                    {dropdownOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
                </span>
            </div>
            {dropdownOpen && (
                <div className="dropdown-content">
                    {mobTypes.map(mobType => (
                        <div 
                            key={mobType.name} 
                            className={selectedMobs.includes(mobType.name) ? '' : 'selected'}
                            onClick={() => handleMobClick(mobType.name)}
                        >
                            <img src={mobType.imageLink} alt={mobType.name} />
                            <p>{mobType.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
};

export default ColumnBar;

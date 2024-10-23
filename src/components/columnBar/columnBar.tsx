import { useState, useEffect } from 'react';
import './columnBar.css'

function columnBar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseOpenClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const columnBar = document.querySelector('.columnBar');
    if (columnBar) {
      if (isOpen) {
        columnBar.classList.remove('closed');
      } else {
        columnBar.classList.add('closed');
      }
    }
  }, [isOpen]);

  return (
    <div className='columnBar'>
        columnBar
        <button 
          type="button" 
          className='closeOpenButton'
          onClick={handleCloseOpenClick}
        >
            test
        </button>
    </div>
  )
}

export default columnBar

import { useEffect, useState } from 'react';
import {TableComponent} from './components/TableComponent';
import { updateClipboard } from './helpers/clipboardHelper';
import './App.css';

const ROWS_AMOUNT = 2000
const COLUMNS_AMOUNT = 2
const TAIL_LENGTH = 4
const STR_LENGTH = 52
const RANGE_STEP = 50
const RANGE_MIN = 100
const RANGE_MAX = 500

function App() {
  const [cellWidth, setCellWidth] = useState(250)
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCellWidth(Number(event.currentTarget.value))
  }

  const handleCopy = () => {
      const copiedText = window.getSelection()?.toString().replace('\n', '');

      if (!copiedText) return

      updateClipboard(copiedText)
  };

  useEffect(() => {
      document.addEventListener('copy', handleCopy);
      
      return () => {
        document.removeEventListener('copy', handleCopy);
      }
  }, []);

  return <div data-testid="app" className="App">
      <input 
        onChange={onChange} 
        step={RANGE_STEP} 
        type="range"
        value={cellWidth} 
        min={RANGE_MIN} 
        max={RANGE_MAX} 
      />
      <TableComponent
        rowsAmount={ROWS_AMOUNT}
        columnsAmount={COLUMNS_AMOUNT}
        tailLength={TAIL_LENGTH}
        strLength={STR_LENGTH}
        cellWidth={cellWidth}
      />
    </div>
}

export default App;

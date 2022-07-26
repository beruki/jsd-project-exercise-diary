import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="button-test">
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        <p>
          test mui import
        </p>
      </div>

    </div>
  )
}

export default App

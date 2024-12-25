import * as React from 'react';
import { createRoot } from 'react-dom/client';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import '../src/assets/style.css';

function handleChange(event) {
  localStorage.setItem("RectangleStickyNoteSetting", event.target.checked)
}

function defaultCheck() {
  var str = localStorage.getItem("RectangleStickyNoteSetting")
  return JSON.parse(str.toLowerCase())
}

const App = () => {
  React.useEffect(() => {
    miro.board.events.on('message', (message) => {
      console.log(message);
    });
  }, []);
  return (<div className="grid wrapper">
    <div className="cs1 ce12">
      <FormGroup>
        <FormControlLabel control={<Switch
          onChange={handleChange}
          defaultChecked={defaultCheck} />}
          label="付箋のデフォルトを長方形にする" />
      </FormGroup>
    </div>
  </div>);
};



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />); 

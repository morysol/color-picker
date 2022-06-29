// import "./App.css";

import ColorPicker from './ColorPicker/ColorPicker';

import FormData from './FormData/FormData.jsx';

const ColorPickerOptions = [
  { label: 'red', color: '#FF0000' },
  { label: 'green', color: '#00FF00' },
  { label: 'blue', color: '#0000FF' },
  { label: 'maroon', color: '#800000' },
  { label: 'yellow', color: '#FFFF00' },
  { label: 'aqua', color: '#00FFFF' },
];

function App() {
  return (
    <div className="App">
      <ColorPicker options={ColorPickerOptions} />
      <FormData></FormData>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [inputdata, setinputData] = useState({ textarea: "" });

  useEffect(() => {
    setCount(inputdata.textarea.length);
  }, [inputdata.textarea])

  const handleonclick = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setinputData({ ...inputdata, [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <div className='header'>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '800px', margin: 'auto', alignItems: 'center' }}>
          <h2>Text Analyser</h2>
          <div style={{ display: 'flex' }}>
            <span style={{ padding: '10px' }}><BsTwitter /></span>
            <span style={{ padding: '10px' }}><FaLinkedinIn /></span>
            <span style={{ padding: '10px' }}><FaGoogle /></span>
          </div>
        </div>
      </div>
      <div className='main' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
        <div style={{ display: 'flex', gap: '40px' }}>

          <h4>Words</h4>
          {inputdata.textarea.split(" ").length - 1}

          <h4>Characters</h4>
          {count}

          <h4>Longest word</h4>
          {inputdata.textarea.split(" ").sort((a, b) => b.length - a.length)[0]}

        </div>
      </div>
      <div style={{ boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)', margin: '20px', width: '50%', marginLeft: '28%' }}>
        <label htmlFor='textarea'></label>
        <input style={{ border: 'none', paddingBottom: '40%' }} type='text' id='textarea' name='textarea' placeholder='Enter word' value={inputdata.textarea} onChange={(e) => handleonclick(e)} />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;

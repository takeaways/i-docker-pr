import logo from './logo.svg';
import './App.css';
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Docker <Title/>
        </a>
      </header>
    </div>
  );
}

export default App;


const Title = styled.div`
  height: 100px;
  width:100px;
  background-color: red;

`
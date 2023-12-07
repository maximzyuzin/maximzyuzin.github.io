import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-text">
        <h4>Привет!</h4>
        <p>Меня зовут Максим и я больше 10 лет работаю в IT-сфере, но в роли разработчика пока только 2 года</p>
        <p>В настоящий момент на проекте разработки CRM системы на базе Oracle Siebel CRM</p>
        <h4>Цель:</h4>
        <p>Я хочу получить как новые знания и навыки, так и структурировать уже имеющиеся по ReactJS</p>
        <h4>Технологии, которыми хочу овладеть:</h4>
        <p>- ReactJS</p>
        <p>- Typescript</p>
        <p>- React hooks</p>
        <p>- React patterns</p>
        <p>- Redux, Redux thunk и Redux-Saga</p>
        <p>- Jest</p>
        <h4>Технологии, которыми уже владею:</h4>
        <p>- HTML</p>
        <p>- CSS (SASS/SCSS)</p>
        <p>- JavaScript</p>
        <p>- Git и Bash</p>
        <p>- SQL</p>
      </div>
    </div>
  );
}

export default App;
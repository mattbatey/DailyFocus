import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Background from './components/Background';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import Quote from './components/Quote';
import MainFocus from './components/MainFocus';
import Todo from './components/Todo';

const App = () => {
    return (
        <div className="app">
            <Background />
            <Clock />
            <Greeting />
            <MainFocus />
            <Quote />
            <Todo />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
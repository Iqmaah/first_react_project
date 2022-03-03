import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import StartReact from './components/StartReact'
// import Register from './components/Register';
// import Facebook from './components/assignment1/Facebook';
// import Cards from './components/Cards'
// import Buddies from './components/assignment2/Buddies'
import BuddiesTransaction from './components/assignment2/BuddiesTransaction';


ReactDOM.render(
  <React.StrictMode>
    <BuddiesTransaction/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Hello from './components/Hello'
import Message from './components/Message';
import Name from './components/Name'
import ContainerSample from './components/ContainerSample'
import Page from './components/ContextSample'
import Counter from './components/Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Message />
    <Name />
    <ContainerSample />
    <Page />
    <Counter initialValue={1} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

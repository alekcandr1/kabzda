import React from 'react';
import ReactDOM from 'react-dom/client'; // отрисовывает элементы DOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ReactDOM.render(<hr />, document.getElementById('root'));


reportWebVitals();

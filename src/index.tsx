import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import packageJson from '../package.json';
import './index.css';

declare global {
  var appVersion: string;
}

global.appVersion = packageJson.version;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // React 18 will call useEffect twice in development mode on the initial render so removing <React.StrictMode> for now.
  // https://www.techiediaries.com/react-18-useeffect/
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

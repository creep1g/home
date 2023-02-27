import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav/nav';
import Socials from './components/socials/socials';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

	<BrowserRouter>
	  <main className="App">
	    <header>
		  <Nav />
		</header>
		<body>
          <App />
		</body>
	  </main>
	  <footer>
	    <Socials />
	  </footer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./style/login.css"
import "./style/filters.css"
import "./style/main.css"
import "./style/contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/footer.css"
import "./style/connections.css"
import "./style/modals.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

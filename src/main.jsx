import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"/my-app"}>
    	<Route path="/" component={withRouter(App)} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

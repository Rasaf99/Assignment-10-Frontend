import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import 'styles/index.css';
import MuiTheme from 'styles/mui-theme/mui-theme'

//  redux toolkit 
import { store } from 'redux-toolkit/store/store'
import { Provider } from 'react-redux'

// App.jsx
import App from './App';
import UserContext from 'contexts/auth-context';


const root = ReactDOM.createRoot
  (document.getElementById('root'));
root.render(

  <MuiTheme>
    <UserContext>
      <Provider store={store}>
        <App />
      </Provider>
    </UserContext>
  </MuiTheme>

);
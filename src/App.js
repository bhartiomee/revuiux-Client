import AppRoutes from './routes/routes';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import './app/components/css/Common.css'

function App(props) {
  return (
    <div className="row-flex">
      <div className="left-bar"><div className="left-bar-content"></div></div>
      <div className="right-main">{ AppRoutes }</div>
    </div>
  );
}

export default withRouter(connect(null, null)(App));

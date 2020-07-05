import React from 'react';
import './App.scss';
import Login from './components/Login';
import { connect } from 'react-redux';
import Invite from './components/Invite';

function App(props) {
  const setActiveComponent = () => {
    switch (props.main.activeView) {
      case 'login':
        return <Login />
      case 'invite':
        return <Invite />
      default:
        return <Login />
    }
  }

  return (<>

    <div className="background-main"></div>
    <div className="background-shine obtuse"></div>
    <div className="background-shine acute"></div>
    <main>
      { setActiveComponent() }
    </main>
    </>
  );
}

const mapStateToProps = state => {
  return {
    main: state
  }
}

export default connect(mapStateToProps)(App);

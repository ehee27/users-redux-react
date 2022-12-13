import React, { Component } from "react";
import { render } from 'react-dom';
import axios from 'axios';
import Users from "./Users";
import Nav from "./Nav";
import store from "./store";

export default class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  async componentDidMount() {

    // this.setState({
    //   users: (await axios.get('/api/users')).data,
    //   loading: false
    // });
    const users = (await axios.get('/api/users')).data;

    store.subscribe(() => {
      this.setState(store.getState());
    });

    store.dispatch({
      type: 'LOAD_USERS',
      users
    });

    store.dispatch({
      type: 'LOADED'
    });
  }

  render() {
    const { users, loading } = this.state;
    if(loading){
      return '...loading';
    }
    return (
      <div>
        <Nav users={users}/>
        <Users users={users}/>
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'));


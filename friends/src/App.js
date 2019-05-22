import React from 'react';
import ReactDOM from 'react-dom';
import FriendsList from './components/FriendsList';
import './styles.css';
import axios from 'axios';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    
    axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({ friends: response.data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
       </div>
    );
  }
}
export default App;

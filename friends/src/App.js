import React from 'react';
import ReactDOM from 'react-dom';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
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

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({ items: res.data });
        // this.props.history.push();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
        <FriendsForm addFriend={this.addFriend} />
       </div>
    );
  }
}
export default App;

import React from 'react';



class FriendsForm extends React.Component {
state ={
    friend: {
        name: '',
        age: '',
        email: ''
    }
}

handleSubmit = e => {
    this.props.addFriend(e, this.state.friend);
    this.setState({
        friend: {
            name: '', 
            age: '', 
            email: ''
        }
    });
}

changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }
    }));
  };

render(){
    return (
        <div className="friends-list-wrapper">
         
              <div>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Name" name="name"  onChange={this.changeHandler} value={this.state.friend.name}/>
                  <input type="number" placeholder="Age" name="age"  onChange={this.changeHandler} value={this.state.friend.age}/>
                  <input type="email" placeholder="Email" name="email"  onChange={this.changeHandler} value={this.state.friend.email}/>
                  <button>Add a Friend</button>
              </form>
             </div>
         
          </div>
      );
}
 
}

export default FriendsForm;
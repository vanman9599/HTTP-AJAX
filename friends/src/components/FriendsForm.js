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

render(){
    return (
        <div className="friends-list-wrapper">
         
              <div>
              <form onSubmit={this.handleSumbit}>
                  <input type="text" placeholder="Name" name="name" />
                  <input type="number" placeholder="Age" name="age"/>
                  <input type="email" placeholder="Email" name="email"/>
                  <button>Add a Friend</button>
              </form>
             </div>
         
          </div>
      );
}
 
}

export default FriendsForm;
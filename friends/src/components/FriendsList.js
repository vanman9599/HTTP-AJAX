import React from 'react';


function FriendsList(props) {
 
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(friend => (
          <div>
              <h1>{friend.name}</h1>
          <p>Email: {friend.email}<br />
         Age: {friend.age}</p>
         </div>
      ))}
      </div>
  );
}

export default FriendsList;
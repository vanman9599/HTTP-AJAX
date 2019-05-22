import React from 'react';
import { Link } from 'react-router-dom';

function FriendsList(props) {
 
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(friend => (
          <div>
          <p>{friend.name}</p>
          <p>{friend.email}</p>
         </div>
      ))}
      </div>
  );
}

export default FriendsList;
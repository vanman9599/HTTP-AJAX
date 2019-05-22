import React from 'react';



function FriendsForm() {
 
  return (
    <div className="friends-list-wrapper">
     
          <div>
          <form>
              <p><input type="text" placeholder="Name" /></p>
              <p><input type="text" placeholder="Age" /></p>
              <p><input type="text" placeholder="Email" /></p>
              <button>Add a Friend</button>
          </form>
         </div>
     
      </div>
  );
}

export default FriendsForm;
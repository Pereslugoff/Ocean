import React from 'react';

const UserDataList = (props) => {
  const {usercomments} = props
  return (
    <div className="data-container">
      <ul>
        {
          usercomments.map((comment) => {
            return (
              <li key={comment.id}>{comment.body}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default UserDataList
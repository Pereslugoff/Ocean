import React, { useState } from "react";
import UserForm from "./UserForm";
import UserQuery from "./UserQuery";

const famousUsers = [
  "spez",
  "kn0thing",
  "neiltyson",
  "GovSchwarzenegger",
  "Here_Comes_The_King",
  "williamshatner"
];
export const UserLanding = () => {

  const [ username, setUsername ] = useState('');
  const [ hasRedditData, setRedditData ] = useState(false);
  const [ hasError, setError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleQuery = () => {
    if (username) {
      setRedditData(true);
    } else {
      setError(true);
      setErrorMessage("Enter a user or choose one below!");
    }
  };

  return (
    <div className="user-landing-container">
      { hasRedditData ? (
        <UserQuery username={username} />
      ) : (
        <div className="get-user-comments-button-container">
          <span className={hasError ? "show" : ""}>{errorMessage}</span>
          <UserForm handleFormChange={setUsername} />
          <div className="user-buttons-container">
            Suggested Users:
            {famousUsers.map((user, index) => {
              return (
                <div
                  className="user-btn"
                  key={`UB${index}`}
                  onClick={() => {
                    setUsername(user);
                    setRedditData(true);
                  }
                  }
                >
                  {user}
                </div>
              );
            })}
          </div>
          <button className="btn" onClick={() => handleQuery()}>
            Get Comments!
          </button>
        </div>
      )}
    </div>
  );
}

export default UserLanding;
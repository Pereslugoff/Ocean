import React from 'react'

const UserForm = (props) => {
  return (
    <form
      onChange={event => props.handleFormChange(event.target.value)}
      className="calc-form"
      autoComplete="off"
    >
      <input
        type="text"
        name="username"
        id="name"
        placeholder="Username"
        autoComplete="off"
        required
      />
    </form>
  );
};

export default UserForm
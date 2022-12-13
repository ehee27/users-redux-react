import React from 'react';

const Nav = ({ users }) => {
  
  return (
    <nav>
      <a href='/'>Home</a>
      <a href='#users'>Users ({users.length})</a>
    </nav>
  )
}

export default Nav;
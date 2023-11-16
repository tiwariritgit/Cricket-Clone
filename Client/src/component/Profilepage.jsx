import "../Design/Profilepage.css";
import React from 'react'
// import "../components/Navbar";


export default function Profilepage() {

  const loggedInUser = sessionStorage.getItem('user');
  const user = JSON.parse(loggedInUser)

  const username = user.username;
  console.log(username);

  
  return (
    <div>
      <div>username : {user.username}</div>
      <div>email: {user.email}</div>
      <div>isAdmin: {user.isAdmin === true ? "Yes" : "No" }</div>
      <div>createdAt: {user.createdAt}</div>
    </div>
  )
}

import React, { Component, useEffect, useState } from "react";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
        
        <a class="navbar-brand" href="#">
      
         Voice Prescription
      </a>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
  </div>
</nav>
          <br />
          <center><button type="button" class="btn btn-secondary">Recordddd</button></center>
        </div>
      </div>
    </div>
  );
}

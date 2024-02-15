import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    
    <div className='nav1'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <b>Mayuri</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontFamily: "Montserrat", fontStyle:"normal" , fontWeight:"600px" }}>
       
        <li class="nav-item">
        <NavLink class="nav-link active" aria-current="page" to="/" style={{color:"#505050", fontSize:'15px',width:"1440px" , height:"72px", textDecoration:"none"  }}><b>Home</b></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about"  style={{color:"#505050", fontSize:'15px',width:"1440px" , height:"72px",textDecoration:"none" }}> <b>About me</b></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/my"  style={{color:"#505050", fontSize:'15px',width:"1440px" , height:"72px", textDecoration:"none" }}><b>My podcast</b></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/program"  style={{color:"#505050", fontSize:'15px',width:"1440px" , height:"72px", textDecoration:"none" }}><b>Programs</b></NavLink>
        </li>
       
        
        
      </ul>
     
      
        <button class="btn btn-outline-success" type="submit">Contact me</button>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav

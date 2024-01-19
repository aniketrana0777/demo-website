import React from 'react'

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mayuri</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My podcast</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Programs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Masterclass</a>
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

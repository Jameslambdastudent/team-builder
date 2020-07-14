import React from "react"

function NavBar(props) {
    return(
        <nav className="black">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><i class="material-icons"></i>LambdaTeam</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html"><i class="material-icons">Home</i></a></li>
        <li><a href="badges.html"><i class="material-icons">About</i></a></li>
        <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
        
      </ul>
    </div>
  </nav>
    )
}

export default NavBar
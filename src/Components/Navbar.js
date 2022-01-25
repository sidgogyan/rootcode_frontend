import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
    <div className="container container--narrow">
      <nav className="header__nav">
        <input type="checkbox" id="responsive-menu" />
        <label for="responsive-menu" className="toggle-menu">
          <span>Menu</span>
          <div className="toggle-menu__lines"></div>
        </label>
        <ul className="header__menu">
          <li className="header__menuItem"><a href="{% url 'profiles' %}">Developers</a></li>
          <li className="header__menuItem"><a href="{% url 'projects' %}">Projects</a></li>
          <li className="header__menuItem"><a href="">Inbox</a></li>
          <li className="header__menuItem"><a href="">My Account</a></li>
          
          

          <li className="header__menuItem"><a href="">Add Project</a></li>
          <li className="header__menuItem"><a href="" class="btn btn--sub">Logout</a></li>
       

       
          
        </ul>
      </nav>
    </div>
  </header>
  )
};

export default Navbar;

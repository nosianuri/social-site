import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/Untitled-design-6-300x100.png';

class Navbar extends Component {

  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <div>
        <div className='fixed z-50  w-full'>
          <nav className='py-2 pr-10'>
            <a className='' href="/">
              <img src={logo} alt="Logo" />
            </a>

            <div>
              <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li className='uppercase'>
                  <a className='active' href="/">Home</a></li>
                <li className='uppercase'><a href="/about">About Us</a></li>
                <li className='uppercase'><a href="/contact">Contact Us</a></li>
                <li className='uppercase'><a href="/service">Our Service</a></li>
                <li className='uppercase'><a href="/privacy">Privacy Policy</a></li>
                <li className='uppercase'><a>
                  <div class="dropdown dropdown-hover">
                    <label tabindex="0" class=" m-1">Media</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-[#003144] rounded-box w-52">
                      <li className=''><a href='#'>Blog</a></li>
                      <li className=''><a href='#'>Event</a></li>
                      <li className=''><a href='#'>Faq</a></li>
                    </ul>
                  </div></a></li>
              </ul>
            </div>

            <div className='uppercase flex gap-5 hidden md:hidden lg:block'>
              <h2 className='btn text-lg text-white hover:text-white bg-[#FD5D14] mr-5 hover:bg-[#e36912]'><a href="/signup">Publisher</a></h2>
              <h2 className='btn text-lg text-white hover:text-white bg-[#FD5D14] hover:bg-[#e36912]'><a href="/signup">Advertiser</a></h2>
            </div>


            <div id='mobile' onClick={this.handleClick}>
              <i id='bar' className={this.state.clicked ? "fa-solid fa-times" : "fas fa-bars"}></i>

            </div>
          </nav>
        </div>
      </div>
    )
  }

}

export default Navbar;
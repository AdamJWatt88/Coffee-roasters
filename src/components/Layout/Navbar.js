import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";

// eslint-disable-next-line
import css from "../../styles/navbar.css";

const Navbar = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth < 576);
  const [openMenu, setMenu] = useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };

    //eslint-disable-next-line
  }, [isDesktop]);

  const openCloseMenu = () => {
    setMenu(!openMenu);
    document.body.classList.contains("overflow")
      ? document.body.classList.remove("overflow")
      : document.body.classList.add("overflow");
  };

  const renderSlideMenu = () => {
    isDesktop && openMenu
      ? document.body.classList.add("overflow")
      : document.body.classList.remove("overflow");

    return (
      <ul
        className={
          openMenu
            ? "slideMenu__links-container open"
            : "slideMenu__links-container"
        }>
        <Link onClick={openCloseMenu} className='slideMenu__link' to='/'>
          {" "}
          Home
        </Link>
        <Link
          onClick={openCloseMenu}
          className='slideMenu__link'
          to='/about-us'>
          About Us
        </Link>
        <Link
          onClick={openCloseMenu}
          className='slideMenu__link'
          to='create-plan'>
          Create Your Plan
        </Link>
      </ul>
    );
  };

  return (
    <nav className='navbar'>
      <img className='navbar__logo' src={logo} alt='logo.svg' />

      <button className='navbar__btn' onClick={openCloseMenu}>
        <svg
          className={openMenu ? "navbar__icon is-active" : "navbar__icon"}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'>
          <g fill='none' fillRule='evenodd' stroke='#979797'>
            <path d='M13,26.5 L88,26.5' />
            <path d='M13,50.5 L88,50.5' />
            <path d='M13,50.5 L88,50.5' />
            <path d='M13,74.5 L88,74.5' />
          </g>
        </svg>
      </button>

      <ul className='navbar__links-container'>
        <Link className='navbar__link' to='/'>
          <li>HOME</li>
        </Link>
        <Link className='navbar__link' to='/about-us'>
          <li>ABOUT US</li>
        </Link>
        <Link className='navbar__link' to='create-plan'>
          <li> CREATE YOUR PLAN</li>
        </Link>
      </ul>
      {renderSlideMenu()}
    </nav>
  );
};

export default Navbar;

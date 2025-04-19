import React from 'react';
import SocialLink from './SocialLink';
import logo from '../assets/Screenshot_44.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <a href="/">
   <img className='w-[75px] rounded-md' src={logo} alt="" /></a>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <SocialLink></SocialLink>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
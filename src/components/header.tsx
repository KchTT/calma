import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
    return <nav className="navbar sticky-top navbar-expand-lg navbar-light p-3 bg-white">
        <Link className="navbar-brand ms-4" href="/">
        <Image
              src="/imgs/logo.png"
              alt="Calma - Sunset & Surf"
              width={100}
              height={35}
              priority
            />
            </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal" 
            aria-controls="menuPrincipal" 
            aria-expanded="false"
            aria-label="Abre Nav">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end me-4" id="menuPrincipal">
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item" >
                    <Link className="nav-link menu_option" href="/">HOME</Link>
                </li>
                <li className="nav-item" >
                    <Link className="nav-link menu_option" href="/acomodation">ACOMODATION</Link>
                </li>
                <li className="nav-item" >
                    <Link className="nav-link menu_option" href="/surf_yoga">SURF & YOGA</Link>
                </li>
                <li className="nav-item" >
                    <Link className="nav-link menu_option" href="/packs">PACKS & BOOK</Link>
                </li>
            
                <li className="nav-item" >
                    <Link className="nav-link menu_option" href="/experience">EXPERIENCE</Link>
                </li>
            </ul>
            
        </div>
    </nav>
}

export default Header;
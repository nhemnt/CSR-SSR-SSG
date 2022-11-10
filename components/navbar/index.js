import Link from 'next/link';
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {
  return (
    <Nav>
      <NavItem>
          <Link className="nav-link" href="/">
            Home
          </Link>
      </NavItem>
      <NavItem>
          <Link className="nav-link" href="/csr">
            CSR
          </Link>
      </NavItem>
      <NavItem>
          <Link className="nav-link" href="/ssr">
            SSR
          </Link>
      </NavItem>
      <NavItem>
          <Link className="nav-link" href="/ssg">
            SSG
          </Link>
      </NavItem>
    </Nav>
  );
};

export default Navbar;

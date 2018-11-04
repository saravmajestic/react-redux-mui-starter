// @flow
import * as React from "react";
import { Link } from "react-router-dom";

type Props = {};

/**
 * @class Header
 */
const Header = (props: Props) => (
  <header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <hr />
  </header>
);

export default Header;
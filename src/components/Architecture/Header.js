import { Fragment } from 'react';
import 'typeface-roboto';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Books</h1>
        <HeaderCartButton />
      </header>
    </Fragment>
  );
};

export default Header;

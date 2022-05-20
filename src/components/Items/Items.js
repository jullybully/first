import { Fragment } from 'react';

import AvailableItems from './AvailableItems';
import ItemsAbout from './ItemsAbout';

const Items = () => {
  return (
    <Fragment>
      <AvailableItems />
      <ItemsAbout />
    </Fragment>
 );
};

export default Items;

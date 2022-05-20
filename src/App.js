import { Fragment } from 'react';

import Header from './components/Architecture/Header';
import Items from './components/Items/Items';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
      <Items />
      </main>
    </Fragment>
  );
}

export default App;

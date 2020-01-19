import React from 'react';
import img from './react.png';
import s from './style.module.less';
import ButtonDanger from 'components-button-danger';

import FontTest from 'font-test/';

const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div className={`${s.imageContainer}`}><img src={img} /></div>
    <div>
      <ButtonDanger>Danger</ButtonDanger>
    </div>
    <FontTest />
  </div>
);

export default App;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MapsProvider } from '../components/MapsProvider';
import { App } from './App';

if (!document.getElementById('root')) {
  const el = document.createElement('main');
  el.id = 'root';
  document.body.appendChild(el);
}
const root = document.getElementById('root');

ReactDOM.render(
  <MapsProvider apiKey="YOUR_API_KEY" libraries={['places']}>
    <App />
  </MapsProvider>,
  root
);

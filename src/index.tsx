import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { GoogleMapsContext } from './components/GoogleMapsContext';
import { GoogleMapsProvider } from './components/GoogleMapsProvider';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCGaVK70WCbecHuBVPBUJPLs_a2andaIqo';

ReactDOM.render(
  <GoogleMapsProvider apiKey={GOOGLE_MAPS_API_KEY} libraries={['places']}>
    <GoogleMapsContext.Consumer>
      {googleMaps => <div>{JSON.stringify(googleMaps)}</div>}
    </GoogleMapsContext.Consumer>
  </GoogleMapsProvider>,
  document.getElementById('root')
);

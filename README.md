# React GoogleMaps Loader

Easily load and consume Google's [Maps JavaScript API].

## Usage

This library exports a Provider that will load the API for you and put it on the window. You'd probably want to use it somewhere around the root of your app, like so:

```js
import { GoogleMapsProvider } from 'react-google-maps-loader';

import App from './App'; // your beautiful app!

const Root = () => (
  <GoogleMapsProvider apiKey="YOUR_API_KEY" libraries={['places']}>
    <App />
  </GoogleMapsProvider>
);
```

Somewhere nested inside the App component, you may have consumers that get the google.maps prop like so:

```js
import { GoogleMapsConsumer } from 'react-google-maps-loader';

import EmbeddedMap from './EmbeddedMap';
import MapContainer from './MapContainer';

const Map = ({ place }) => (
  <GoogleMapsConsumer>
    {googleMaps =>
      googleMaps ? (
        <EmbeddedMap
          containerElement={<MapContainer />}
          loadingElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          place={place}
        />
      ) : (
        <div>Loading!</div>
      )
    }
  </GoogleMapsConsumer>
);
```

[maps javascript api]: https://developers.google.com/maps/documentation/javascript/reference/ 'customize maps with your own content and imagery'

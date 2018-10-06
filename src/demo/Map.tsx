import * as React from 'react';

import { MapsConsumer } from '../index';

export const Map = () => (
  <MapsConsumer>
    {maps =>
      maps ? (
        <div data-qa="map-loaded">Maps API loaded!</div>
      ) : (
        <div data-qa="map-loading">Loading!</div>
      )
    }
  </MapsConsumer>
);

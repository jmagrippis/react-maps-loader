import * as React from 'react';

import { Provider } from '../GoogleMapsContext';

interface Maps {
  Map: object;
}

interface Google {
  maps: Maps;
}

declare global {
  interface Window {
    google: Google;
  }
}

interface Props {
  apiKey: string;
  children: React.ReactNode;
  libraries: string[];
}

interface State {
  googleMaps: Maps;
}

export class GoogleMapsProvider extends React.PureComponent<Props, State> {
  state = {
    googleMaps: window.google && window.google.maps
  };

  public static defaultProps: Partial<Props> = {
    libraries: []
  };

  onGoogleMapsLoaded = () => () => {
    this.setState({ googleMaps: window.google && window.google.maps });
  };

  loadGoogleMapsApi = () => {
    const { apiKey, libraries } = this.props;
    if (!this.state.googleMaps) {
      const el = document.createElement('script');
      el.async = true;
      el.defer = true;
      el.type = 'text/javascript';
      el.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=${libraries.join(
        ','
      )}`;
      el.onload = this.onGoogleMapsLoaded();
      document.body.appendChild(el);
    }
  };

  componentDidMount() {
    this.loadGoogleMapsApi();
  }

  render() {
    return (
      <Provider value={this.state.googleMaps}>
        {React.Children.only(this.props.children)}
      </Provider>
    );
  }
}

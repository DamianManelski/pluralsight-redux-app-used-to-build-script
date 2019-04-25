import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class EventsMapPage extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={54.3610063}
            lng={18.5499461}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

EventsMapPage.defaultProps = {
  center: {
    lat: 54.3610063,
    lng: 18.5499461
  },
  zoom: 3
};

export default EventsMapPage;

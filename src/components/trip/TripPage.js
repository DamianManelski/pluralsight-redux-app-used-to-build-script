import React, { PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import * as tripActions from "../../actions/tripActions";
import TripsList from "./TripsList";

class TripPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddTripPage = this.redirectToAddTripPage.bind(this);
  }

  redirectToAddTripPage() {
    browserHistory.push("/trip");
  }

  render() {
    return (
      <div>
        <h1>Trips</h1>
        <input
          type="submit"
          value="Create Trip"
          className="btn btn-primary"
          onClick={this.redirectToAddTripPage}
        />

        <TripsList courses={this.props.trips} />
      </div>
    );
  }
}

TripPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    trips: state.trips
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tripActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripPage);

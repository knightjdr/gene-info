import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TabView from './root-tabs';
import { setTab } from '../state/set/tab-action';

class TabViewContainer extends Component {
  handleIndexChange = (index) => {
    this.props.setTab(index);
  }
  render() {
    return (
      <TabView
        handleIndexChange={this.handleIndexChange}
        tab={this.props.tab}
      />
    );
  }
}

TabViewContainer.propTypes = {
  setTab: PropTypes.func.isRequired,
  tab: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setTab: (index) => {
    dispatch(setTab(index));
  },
});

const mapStateToProps = state => ({
  tab: state.tab,
});

const Details = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabViewContainer);

export default Details;

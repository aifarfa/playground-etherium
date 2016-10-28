import React from 'react';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import Hello from './Hello'
import {onLoad} from '../modules/home'
import CampaignList from './CampaignList'

/**
 * dump component
 */
export class Home extends React.Component {

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <Hello hasPermission={this.props.hasPermission}/>
        <CampaignList />
      </div>
    );
  }
}

Home.propTypes = {
  hasPermission: React.PropTypes.bool.isRequired,
  isLoading: React.PropTypes.bool,
  title: React.PropTypes.string,
}

const propsMapper = (state) => {
  return {
    hasPermission: state.getIn(['home', 'permission']),
    isLoading: state.getIn(['home', 'isLoading']),
    title: 'Home page'
  }
}

const actionMapper = (dispatch) => {
  return {onLoad: onLoad(dispatch)}
}

/**
 * default connected component
 */
export default connect(propsMapper, actionMapper)(Home)

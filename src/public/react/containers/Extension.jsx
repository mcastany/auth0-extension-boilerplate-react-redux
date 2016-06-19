import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Extension extends Component {
  componentDidMount() {    
    this.props.actions.requestData();
    setTimeout(() => {
      this.props.actions.receiveData({ message: 'Message' });
    }, 6000);
  }

  render() {    
    return (
      <section>
        <div className="main-loading-container" style={this.props.isFetching ? { display:'block' } : { display:'none' }}>
            <div className="spinner-container">
                <div className="auth0-spinner">
                  <div className="spinner"></div>
                  <div className="spinner-bg"></div>
                </div>
              </div>
          </div>
          
              {(() => {
                if (!this.props.isFetching) {
                  return (
                    <div className="col-xs-12 wrapper theme-dark">                   
                    <section className="content-page current">
                        <div className="content-header">
                          <h1>Extension</h1>
                          <p className="explanation">
                            <i className="icon-info-sign"></i>
                          </p>
                        </div>
                    </section>
                    <section><div><span>{this.props.message}</span></div></section>
                    </div>);
                  }
              })()}   
      </section>       
    );
  }

  _onError() {
    window.sessionStorage.removeItem('token');
  }
};

Extension.propTypes = {
  message: React.PropTypes.string,
  isFetching: React.PropTypes.bool
};

Extension.defaultProps = {
  isFetching: false,
  message: ''
};

function mapStateToProps(state) {
  return {
    isFetching: state.reducer.isFetching,
    message: state.reducer && state.reducer.message || ''
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Extension)

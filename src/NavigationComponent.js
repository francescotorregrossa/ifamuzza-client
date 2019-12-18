import React from 'react';
import PropTypes from 'prop-types';

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);

    const {pageName} = this.props;
    this.pageName = pageName;
  }

  requestPage = dest => {
    const {onRequestPage} = this.props;
    onRequestPage(this.pageName, dest);
  };

  shouldRender = () => {
    const {currentPage} = this.props;
    return currentPage === this.pageName;
  };
}

NavigationComponent.propTypes = {
  pageName: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  onRequestPage: PropTypes.func.isRequired,
};

export default NavigationComponent;

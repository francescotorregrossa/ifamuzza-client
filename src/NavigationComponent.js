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
}

NavigationComponent.propTypes = {
  pageName: PropTypes.string.isRequired,
  onRequestPage: PropTypes.func.isRequired,
};

export default NavigationComponent;

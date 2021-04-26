import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ComponentP extends PureComponent {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

ComponentP.propTypes = {

};

export default ComponentP;
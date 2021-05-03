import React from 'react';
import PropTypes from 'prop-types';


NavBar.defaultProps = {
    title: 'Navbar' ,
    
};
NavBar.PropType = {
    title: PropTypes.string ,
    
    
};
function NavBar({children,title,...props}) {
    return (
        <>
            {title}
            
        </>
    );
}

export default NavBar;
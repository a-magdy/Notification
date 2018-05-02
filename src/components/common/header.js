import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';


const Header = ({loading}) =>{
    return(
       <nav>
        <IndexLink to ="/" activeClassName = "active">Home</IndexLink>
        {" | "}
        <Link to = "/about" activeClassName = "active"> About </Link>
        {" | "}
        <Link to = "/courses" activeClassName = "active"> Courses </Link>
         {" | "}
         <Link to = "/hittens" activeClassName = "active"> Hittens </Link>
         
        </nav>
    );
};

Header.propTypes = {
  loading: PropTypes.bool
};

export default Header;

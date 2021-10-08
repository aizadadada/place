import React, { useContext } from 'react';
import SideBar from '../../functions/Client/SideBar'
import Content from '../../functions/Client/Content';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { clientContext } from '../../contexts/ClientContext';
import FavoriteIcon from '@material-ui/icons/Favorite'
// import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const FirstPage = () => {
    const { placeCountInCart, getPlace } = useContext(clientContext)
    return (
        <div>
            <SideBar />

            {/* <Badge badgeContent={4} color="error">
                {/* <MailIcon /> */}
            {/* </Badge> */}
            {/* <Link to="/favorites">
                    <FavoriteIcon />
                </Link>
            </Badge> */}

            <IconButton aria-label="cart">
                <Link to="/favorites">
                    <FavoriteIcon />
                </Link>
                {/* <StyledBadge badgeContent={4} color="secondary">
                    
                </StyledBadge>s */}
            </IconButton>
            <div className="row1">

                <Content />
            </div>
        </div>
    );
};

export default FirstPage;
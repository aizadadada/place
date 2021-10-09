import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FullscreenExitTwoTone } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { clientContext } from '../context/ClientContext';
import Truncate from 'react-truncate';
import { clientContext } from '../../contexts/ClientContext';
// import Cards from 'react-credit-cards';
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        margin: '0 10px 10px 10px',
        width: 280,
        minWidth: 240,
        height: 380,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    media: {
        height: 140,
        backgroundSize: "contain",
        backgroundColor: "rgb (197, 199, 214)"

    },
});

export default function CardCustom({ item }) {
    const classes = useStyles();
    const { addAndDeletePlaceInCustom, checkPlaceInCart } = useContext(clientContext)
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.photo}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" noWrap>
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>Далее</a></span>}>
                            {item.description}
                        </Truncate>
                    </Typography>
                    <span style={{ display: 'block', fontSize: "16px" }}>Средний чек: {item.bill}</span>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    onClick={() => addAndDeletePlaceInCustom(item)}
                    size="small"
                    color="primary">
                    <p>
                        <FavoriteIcon
                            color={checkPlaceInCart(item.id) ? "secondary" : "primary"}
                        />
                        Добавить в избранное</p>
                </Button>
            </CardActions>
        </Card>
    );
}

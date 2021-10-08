// // import React, { useContext } from 'react';
// // import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// // import { clientContext } from '../../contexts/ClientContext';
// // import { FcLike } from 'react-icons'
// // import { Button } from '@chakra-ui/button';
// // import Truncate from 'react-truncate';


// // const CardCustom = ({ item }) => {
// //     const { addAndDeletePlaceInCustom, checkPlaceInCart } = useContext(clientContext)
// //     return (
// //         <Card style={{ width: '18rem' }}>
// //             <Card.Img variant="top" src={item.photo} />
// //             <Card.Body>
// //                 <Card.Title>{item.title}</Card.Title>
// //             </Card.Body>
// //             <ListGroup className="list-group-flush">
// //                 <ListGroupItem> Address : {item.address}</ListGroupItem>
// //                 <ListGroupItem>Working Hours: {item.graphic}</ListGroupItem>
// //                 <ListGroupItem>Bill: {item.bill}</ListGroupItem>
// //             </ListGroup>
// //             <Card.Body>
// //                 <Card.Link>
// //                     <Truncate lines={3} ellipsis={<span>..далее</span>}>
// //                         {/* {longText} */}
// //                         {item.description}
// //                     </Truncate>
// //                     <Button onClick={() => addAndDeletePlaceInCustom(item)} color="primary">
// //                         <FcLike
// //                             color={checkPlaceInCart(item.id) ? 'secondary' : 'primary'}
// //                         />
// //                     </Button>
// //                 </Card.Link>
// //                 {/* <Card.Link href="#">Another Link</Card.Link> */}
// //             </Card.Body>
// //         </Card>
// //     );
// // };

// // export default CardCustom;

// import React, { useContext } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// // import { FullscreenExitTwoTone } from '@material-ui/icons';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// // import { clientContext } from '../context/ClientContext';
// import Truncate from 'react-truncate';
// import { clientContext } from '../../contexts/ClientContext';
// import { Link } from 'react-router-dom';
// // import Cards from 'react-credit-cards'
// // import { IconName } from "react-icons/vsc";
// import FavoriteIcon from '@material-ui/icons/Favorite'

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 250,
//         margin: '0 10 10 10px',
//         width: 240,
//         minWidth: 240,
//         height: 390,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         // alignItems: 'center'

//     },
//     media: {
//         height: 140,
//         backgroundSize: "contain",
//         backgroundColor: "rgb (197, 199, 214)"

//     },

// });

// export default function CardCustom({ item }) {
//     const classes = useStyles();
//    
//     // const { addAndDeleteProductInCart, checkProductInCart } = useContext(clientContext)
//     return (
//         <div className="card-backGround">

//             <Card className={classes.root}>
//                 <CardActionArea>
//                     <CardMedia
//                         className={classes.media}
//                         image={item.photo}
//                         title="Contemplative Reptile"
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="h2" noWrap>
//                             {item.title}
//                         </Typography>
//                         <Typography variant="body2" color="textSecondary" component="p">
//                             <Truncate lines={3} ellipsis={<span>... <Link to={`/link/to/article/${item.id}`} >далее</Link></span>}>
//                                 {/* {longText} */}
//                                 {item.description}
//                             </Truncate>
//                         </Typography>
//                         {/* <h3>Price: {item.bill}</h3> */}
//                         <span style={{ display: 'block', fontSize: "16px" }}>Цена: {item.bill}</span>
//                     </CardContent>
//                 </CardActionArea >
//                 <CardActions>
//                     <Button
//                         onClick={() => addAndDeletePlaceInCustom(item)}
//                         size="small"
//                         color="primary">
//                         {/* <IconName /> */}
//                         {/* <ShoppingCartIcon */}
//                         <FavoriteIcon
//                             color={checkPlaceInCart(item.id) ? "secondary" : "primary"}
//                         />
//                     </Button>
//                     <Button size="small" color="primary">
//                         Узнать подробнее
//                     </Button>
//                 </CardActions>
//             </Card >
//         </div>
//     );
// }


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
    // const { addAndDeleteProductInCart, checkProductInCart } = useContext(clientContext)
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
                        <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>далее</a></span>}>
                            {/* {longText} */}
                            {item.description}
                        </Truncate>
                    </Typography>
                    {/* <h3>Price: {item.price}</h3> */}
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

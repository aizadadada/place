import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
// import { Link } from 'react-router-dom';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Link } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="react-img">
                <img src="https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
                {/* <img src="http://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcHx8MHx8fHwxNjMzNDEzMDc1&ixlib=rb-1.2.1&q=80&w=1080" /> */}
                {/* <img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/05/A4196-10-Things-you-should-remember-before-designing-a-coffee-shop.jpg" /> */}
            </div>
            {/* <AppBar position="relative"> */}
            <Toolbar>
                {/* <CameraIcon className={classes.icon} /> */}
                {/* <Typography variant="h6" color="inherit" noWrap>
                    Album layout
                </Typography> */}
            </Toolbar>
            {/* </AppBar> */}
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Хорошее утро начинается с хорошего завтрака
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            «Самые провальные месяцы с точки зрения посещаемости ресторана и спроса на завтраки в том числе: май, июнь и июль, – сообщает Андрей Кошкодан. – Это связано с отпусками и сезонным ростом потребления фастфуда: в хорошую погоду многим удобнее выпить кофе на ходу из ближайшего кафе в стрит-локации и съесть круассан»
                        </Typography>
                        <div className={classes.heroButtons}>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://thumbs.dreamstime.com/z/%D0%BE%D0%B1%D0%B5%D0%B4-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D0%B0%D1%84%D0%B5-%D1%81-%D0%B5%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%B8%D0%BC%D0%B5%D1%8E%D1%89%D0%B8%D0%B5-%D0%B7%D0%B0%D0%B2%D1%82%D1%80%D0%B0%D0%BA-%D0%B2-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%B5-184446885.jpg"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        {/* <Typography gutterBottom variant="h5" component="h2">
                                          
                                        </Typography> */}
                                        <Typography>
                                            Блюда из яиц, каши, сырники, выпечка – это основа меню завтраков для заведения любой гастрономической направленности
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Контакты
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Для связи с нами обращайтесь по номеру 0778-009-008
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Подписывайтесь на наш канал в
                    <br />
                    <InstagramIcon />
                    <FacebookIcon />
                    <TelegramIcon />
                </Typography>

            </footer>
            {/* End footer */}




            {/* <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', height: '100px' }}>
                            <Card.Img variant="top" src="https://locefoc.com/articles/Kazakhstan/20_new_places_at_ALA_2018/img1.jpg" />
                            <Card.Body>
                                <Card.Title>
                                    Аппетит приходит во время еды!
                                </Card.Title>
                                <Card.Text>
                                    fekewoofewl
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://locefoc.com/articles/Kazakhstan/20_new_places_at_ALA_2018/img1.jpg" />
                            <Card.Body>
                                <Card.Title>
                                    Аппетит приходит во время еды!
                                </Card.Title>
                                <Card.Text>
                                    fekewoofewl
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://locefoc.com/articles/Kazakhstan/20_new_places_at_ALA_2018/img1.jpg" />
                            <Card.Body>
                                <Card.Title>
                                    Аппетит приходит во время еды!
                                </Card.Title>
                                <Card.Text>
                                    fekewoofewl
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container> */}
        </React.Fragment >
    );
}
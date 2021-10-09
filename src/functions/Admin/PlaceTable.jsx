import React, { useContext, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { adminContext } from '../../contexts/AdminContext';
import { Link } from 'react-router-dom';
import { height, width } from 'dom-helpers';
import { Button } from 'react-bootstrap';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 20,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    const { place, getPlace, deletePlace } = useContext(adminContext);

    useEffect(() => {
        getPlace()
    }, [])

    return (
        <>
            {
                place ? (

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>№</StyledTableCell>
                                    <StyledTableCell>Название заведения</StyledTableCell>
                                    <StyledTableCell align="left">Описание</StyledTableCell>
                                    <StyledTableCell align="left">Локация</StyledTableCell>
                                    <StyledTableCell align="left">График</StyledTableCell>
                                    <StyledTableCell align="left">Средний чек</StyledTableCell>
                                    <StyledTableCell align="left">Категория</StyledTableCell>
                                    <StyledTableCell align="left">Кухня</StyledTableCell>
                                    <StyledTableCell align="left">Номер телефона</StyledTableCell>
                                    <StyledTableCell align="left">Редактор</StyledTableCell>
                                    <StyledTableCell align="left">Удалить</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {place.map((row, index) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {index + 1}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.title}</StyledTableCell>
                                        <StyledTableCell align="left">{row.description}</StyledTableCell>
                                        <StyledTableCell align="left">{row.address}</StyledTableCell>
                                        <StyledTableCell align="left">{row.graphic}</StyledTableCell>
                                        <StyledTableCell align="left">{row.bill}</StyledTableCell>
                                        <StyledTableCell align="left">{row.category}</StyledTableCell>
                                        <StyledTableCell align="left">{row.kitchen}</StyledTableCell>
                                        <StyledTableCell align="left"><img src={row.photo} alt="" className="img__placetable" /></StyledTableCell>
                                        <StyledTableCell align="left">
                                            <Link to={`/edit/${row.id}`}>

                                                <Button>
                                                    Редактор
                                                </Button>
                                            </Link>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <Button onClick={() => deletePlace(row.id)}>
                                                Удалить
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                ) : (
                    <h2>Loading...</h2>
                )
            }
        </>
    )
}


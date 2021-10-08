import React, { useContext, useEffect } from 'react';
import { clientContext } from "../../contexts/ClientContext"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { adminContext } from '../context/AdminContext';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
// import { clientContext } from '../context/ClientContext';
import { InsertEmoticon } from '@material-ui/icons';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        width: 100,
        height: 80
    },
});


const CartTable = () => {
    const { cart, getCart, changeCountPlace } = React.useContext(clientContext)
    const classes = useStyles()

    useEffect(() => {
        getCart()
    }, [])

    console.log(cart)

    function handleCount(id, count) {
        if (count < 1) {
            return
        }
        changeCountPlace(count, id)
    }
    return (
        <div style={{ width: '100%' }}>
            {
                cart ? (
                    <>
                        <TableContainer component={Paper} >
                            <Table className={classes.table} aria-label="caption table">
                                <caption>   <h2 className="total-price">{cart.totalPrice}</h2></caption>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>№</TableCell>
                                        <TableCell align="left">Название</TableCell>
                                        <TableCell align="left">Средний чек</TableCell>
                                        <TableCell align="left">Фотография</TableCell>
                                        <TableCell align="left">Количество людей</TableCell>
                                        <TableCell align="left">Общая сумма</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart.place.map((row, index) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="left">{row.food.title}</TableCell>
                                            <TableCell align="left">{row.food.bill}</TableCell>
                                            <TableCell align="left"><img className="img-cartTable" src={row.food.photo} alt="" /> </TableCell>
                                            <TableCell align="left">
                                                <input
                                                    type="number"
                                                    value={row.count}
                                                    onChange={(e) => handleCount(row.food.id, e.target.value)} />

                                            </TableCell>
                                            <TableCell align="left">{row.subPrice}

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </TableContainer>
                    </>
                ) : (
                    <h2>null</h2>
                )

            }
        </div>
    );
};

export default CartTable;
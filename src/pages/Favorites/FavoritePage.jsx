import { Button } from 'react-bootstrap';
import React from 'react';
import CartTable from '../../functions/Client/CartTable'
import { Link } from 'react-router-dom';
const Favorites = () => {
    return (
        <>
            <div>
                <h2>Избранное</h2>
                <CartTable />
            </div>
            <Link to="/places">
                <Button>Вернуться назад</Button>
            </Link>
        </>
    );
};

export default Favorites;
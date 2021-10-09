import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { clientContext } from '../../contexts/ClientContext';
import CardCustom from './Card';
import PaginationSize from './Pagination';


const Content = () => {

    const { place, getPlace, currentPosts } = useContext(clientContext)
    const history = useHistory()
    const [searchValue, setSearchValue] = useState('')

    const filterProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getPlace()
    }

    let search = new URLSearchParams(history.location.search)
    useEffect(() => {
        setSearchValue(search.get('q') || '')
    }, [history.location])


    useEffect(() => {
        getPlace()
    }, [])
    return (
        <>

            {
                place ? (
                    <div>
                        <li className="nav-item">
                            <input type="text" placeholder="Поиск"
                                value={searchValue}
                                onChange={(e) => filterProducts('q', e.target.value)}

                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </li>
                        <div className="content">
                            <div className="content-block">

                            </div>
                            {
                                currentPosts.map(item => (

                                    <CardCustom item={item} key={item.id} />
                                ))

                            }


                        </div>
                        <PaginationSize />
                    </div>

                ) : (
                    <h2>Loading</h2>
                )

            }
        </>
    );
};

export default Content;
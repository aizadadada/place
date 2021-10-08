import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useContext } from 'react';
import { clientContext } from '../../contexts/ClientContext';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function PaginationSize() {
    const { currentPosts, postsPerPage, totalPosts, changePage } = useContext(clientContext)
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }


    return (
        <div className="pagination">
            <ul>

                {
                    pageNumber.map(item => (
                        <li onClick={() => {
                            changePage(item)
                            window.scrollTo(0, 0)
                        }} key={item}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

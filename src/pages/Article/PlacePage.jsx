import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { clientContext } from '../../contexts/ClientContext';

const PlacePage = () => {
    const { placeId } = useParams()
    const { getPlaceById, place } = useContext(clientContext)
    const [state, setState] = useState(place)

    useEffect(() => {
        setState(place)
    }, [place])




    useEffect(() => {
        getPlaceById(placeId)
        // console.log(state)
    }, [])




    return (
        <div>
            {
                state ? state.map(el => (
                    <div>{el.title}</div>
                )) : <div>Nothing!</div>
            }
        </div>
    );
};

export default PlacePage;
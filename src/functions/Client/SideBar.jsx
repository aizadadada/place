import React, { useContext, useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router';
import { clientContext } from '../../contexts/ClientContext';
import { Button } from 'react-bootstrap';


export default function SideBar() {
    const [price, setPrice] = useState('')
    const [categor, setCategor] = useState('')
    const history = useHistory()

    const { getPlace, categories, getCategories } = useContext(clientContext)

    const filterPlace = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setPrice(search.get('bill_lte'))
        setCategor(search.get('category'))
        getPlace()

    }

    let search = new URLSearchParams(history.location.search)
    useEffect(() => {
        setPrice(search.get("bill_lte"));
        setCategor(search.get('category'))
        getCategories()
    }, [])
    const resetFilter = () => {
        setPrice('')
        setCategor('')
        history.push('/places')
        getPlace()
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Цена</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={price} onChange={(e) => filterPlace("bill_lte", e.target.value)}>
                    <FormControlLabel value="500" control={<Radio />} label="500" />
                    <FormControlLabel value="800" control={<Radio />} label="800" />
                    <FormControlLabel value="1200" control={<Radio />} label="1200" />
                </RadioGroup>
            </FormControl>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Категория</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={categor} onChange={(e) => filterPlace("category", e.target.value)}>
                        {
                            categories.map(item => (

                                <FormControlLabel value={item} key={item} control={<Radio />} label={item} />
                            ))
                        }
                    </RadioGroup>
                    <Button onClick={resetFilter}>Reset</Button>
                </FormControl>
            </div>
        </div>
    );
}

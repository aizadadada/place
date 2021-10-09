// import React, { useContext, useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
// import { clientContext } from '../../contexts/ClientContext';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import { Button } from '@material-ui/core';

// const SideBar = () => {
//     const [price, setPrice] = useState('')
//     const [category, setCategory] = useState('')
//     const history = useHistory()

//     const { getPlace, categories, getCategories } = useContext(clientContext)

//     const filterPlace = (key, value) => {
//         console.log("Key pressed: ", key, value)
//         let search = new URLSearchParams(history.location.search)
//         search.set(key, value)
//         let url = `${history.location.pathname}?${search.toString()}`
//         history.push(url)
//         setPrice(search.get('price_lte'))
//         setCategory(search.get('category'))
//         getPlace()

//     }

//     let search = new URLSearchParams(history.location.search)
//     useEffect(() => {
//         setPrice(search.get("price_lte"));
//         setCategory(search.get('category'))
//         getCategories()
//     }, [])
//     const resetFilter = () => {
//         setPrice('')
//         setCategory('')
//         history.push('/')
//         getPlace()
//     }
//     const useStyles = makeStyles({
//         root: {
//             '&:hover': {
//                 backgroundColor: 'transparent',
//             },
//         },
//         icon: {
//             borderRadius: '50%',
//             width: 16,
//             height: 16,
//             boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//             backgroundColor: '#f5f8fa',
//             backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//             '$root.Mui-focusVisible &': {
//                 outline: '2px auto rgba(19,124,189,.6)',
//                 outlineOffset: 2,
//             },
//             'input:hover ~ &': {
//                 backgroundColor: '#ebf1f5',
//             },
//             'input:disabled ~ &': {
//                 boxShadow: 'none',
//                 background: 'rgba(206,217,224,.5)',
//             },
//         },
//         checkedIcon: {
//             backgroundColor: '#137cbd',
//             backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//             '&:before': {
//                 display: 'block',
//                 width: 16,
//                 height: 16,
//                 backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
//                 content: '""',
//             },
//             'input:hover ~ &': {
//                 backgroundColor: '#106ba3',
//             },
//         },
//     });

//     const classes = useStyles();

//     return (
//         <div>
//             <Radio
//                 className={classes.root}
//                 disableRipple
//                 color="default"
//                 checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
//                 icon={<span className={classes.icon} />}
//             // {...props}
//             />

//             <FormControl component="fieldset">
//                 <FormLabel component="legend">Gender</FormLabel>
//                 <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios" value={price} onChange={(e) => filterPlace("price_lte", e.target.value)}>
//                     <FormControlLabel value={500} control={<Radio />} label="500" />
//                     <FormControlLabel value={800} control={<Radio />} label="800" />
//                     <FormControlLabel value={1200} control={<Radio />} label="1200" />
//                     <FormControlLabel value={1800} control={<Radio />} label="1800" />
//                     {/* <FormControlLabel value="Кафе" control={<StyledRadio />} label="Кафе" /> */}
//                 </RadioGroup>
//             </FormControl>
//             <FormControl component="fieldset">
//                 <FormLabel component="legend">Gender</FormLabel>
//                 <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios" value={categories} onChange={(e) => filterPlace("category", e.target.value)}>
//                     {
//                         categories.map(item => (

//                             < FormControlLabel key={item} value={item} control={<Radio />} label={item} />
//                         ))
//                     }
//                     {/* <FormControlLabel value="Кофейня" control={<StyledRadio />} label="Кофейня" />
//                         <FormControlLabel value="Караоке" control={<StyledRadio />} label="Караоке" />
//                         <FormControlLabel value="Клуб" control={<StyledRadio />} label="Клуб" />
//                         <FormControlLabel value="Кафе" control={<StyledRadio />} label="Кафе" /> */}
//                 </RadioGroup>
//             </FormControl>
//             <Button onClick={resetFilter}>Reset</Button>
//         </div>
//     );

// }

// export default SideBar;
import React, { useContext, useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router';
import { clientContext } from '../../contexts/ClientContext';
import { Button } from 'react-bootstrap';
// import Button from '@restart/ui/esm/Button';

export default function SideBar() {
    // const [value, setValue] = React.useState('female');
    const [price, setPrice] = useState('')
    const [categor, setCategor] = useState('')
    const history = useHistory()

    const { getPlace, categories, getCategories } = useContext(clientContext)

    const filterPlace = (key, value) => {
        // console.log("Key pressed: ", key, value)
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
                    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
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
                        {/* <FormControlLabel value="800" control={<Radio />} label="800" />
                <FormControlLabel value="1200" control={<Radio />} label="1200" /> */}
                        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                    </RadioGroup>
                    <Button onClick={resetFilter}>Reset</Button>
                </FormControl>
            </div>
        </div>
    );
}

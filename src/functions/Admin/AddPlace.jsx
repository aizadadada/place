// import { Input, TextField } from '@material-ui/core';
// // import Button from '@restart/ui/esm/Button';
// import React, { useContext, useState } from 'react';
// import { Button, FormControl, FormLabel } from 'react-bootstrap';
import { adminContext } from '../../contexts/AdminContext';
import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';


const AddPlace = () => {
    const [place, setPlace] = useState({
        title: '',
        description: '',
        bill: "",
        graphic: "",
        kitchen: "",
        photo: "",
        address: "",
        number: "",
        category: ''
    })
    const { createPlace } = useContext(adminContext)
    function handleInputs(e) {
        let newPlace = {
            ...place,
            [e.target.name]: e.target.value
        }
        setPlace(newPlace)
    }

    return (
        <div>
            <div className="add-inputs">
                <form>

                    <TextField value={place.title} id="standard-basic" label="Name of Title" name="title" onChange={handleInputs} />
                    <TextField value={place.description} id="standard-basic" label="Description" name="description" onChange={handleInputs} />
                    <TextField value={place.bill} id="standard-basic" type="number" label="Average Bill" name="bill" onChange={handleInputs} />
                    <TextField value={place.graphic} id="standard-basic" label="Working Hours" name="graphic" onChange={handleInputs} />
                    <TextField value={place.address} id="standard-basic" label="Location" name="address" onChange={handleInputs} />
                    <TextField value={place.photo} id="standard-basic" label="Photo" name="photo" onChange={handleInputs} />
                    <TextField value={place.category} id="standard-basic" label="Category" name="category" onChange={handleInputs} />
                    <TextField value={place.kitchen} id="standard-basic" label="Kitchen" name="kitchen" onChange={handleInputs} />
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (!place.title.trim() ||
                                !place.description.trim() ||
                                !place.bill.trim() ||
                                !place.graphic.trim() ||
                                !place.address.trim() ||
                                !place.photo.trim() ||
                                !place.category.trim() ||
                                !place.kitchen.trim()) {
                                alert('Заполните все поля')
                                return
                            }
                            createPlace({
                                title: place.title.trim(),
                                description: place.description.trim(),
                                bill: place.bill.trim(),
                                graphic: place.graphic.trim(),
                                address: place.address.trim(),
                                photo: place.photo.trim(),
                                category: place.category.trim(),
                                kitchen: place.kitchen.trim(),
                                id: place.id
                            })
                        }}
                        variant="outlined"
                        color="primary">
                        Создать
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddPlace;

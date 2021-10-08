import { FormControl, FormControlLabel, Input } from '@material-ui/core';
import Button from '@restart/ui/esm/Button';
import React, { useContext, useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import { adminContext } from '../../contexts/AdminContext';
// import { Input, FormControl, FormLabel, Button } from "@chakra-ui/react"
// import steak from "../../images/steak.png"
// import { InputGroup } from 'react-bootstrap';

const AddPlace = () => {
    const [place, setPlace] = useState({
        title: '',
        address: '',
        graphic: "",
        number: '',
        kitchen: '',
        description: '',
        bill: '',
        category: '',
        photo: ''
    })
    const { createPlace } = useContext(adminContext)

    function handleInput(e) {
        let newPlace = {
            ...place,
            [e.target.name]: e.target.value
        }
        setPlace(newPlace)
    }

    return (
        < div className="inputs" >
            <img src="steak" alt="" />
            <form >
                <FormControl id="first-name" >
                    <FormLabel >Name of Place</FormLabel>
                    <Input placeholder="Name of Place" value={place.title} onChange={handleInput} name="title" id="input-form" />
                    <FormLabel >Location</FormLabel>
                    <Input placeholder="Location" value={place.address} onChange={handleInput} name="address" id="input-form" />
                    <FormLabel >Working Hours</FormLabel>
                    <Input placeholder="Working Hours" value={place.graphic} onChange={handleInput} name="graphic" id="input-form" />
                    <FormLabel >Number</FormLabel>
                    <Input placeholder="Number" value={place.number} onChange={handleInput} name="number" id="input-form" />
                    <FormLabel >Kitchen</FormLabel>
                    <Input placeholder="Kitchen" value={place.kitchen} onChange={handleInput} name="kitchen" id="input-form" />
                    <FormLabel>Description</FormLabel>
                    <Input placeholder="Description" value={place.description} onChange={handleInput} name="description" id="input-form" />
                    <FormLabel >Bill</FormLabel>
                    <Input placeholder="Bill" value={place.bill} onChange={handleInput} name="bill" id="input-form" />
                    <FormLabel >Category</FormLabel>
                    <Input placeholder="Category" value={place.category} onChange={handleInput} name="category" id="input-form" />
                    <FormLabel >Photo</FormLabel>
                    <Input placeholder="Photo" value={place.photo} onChange={handleInput} name="photo" id="input-form" />
                </FormControl>
                <div className="add-buton">
                    <Button colorScheme="teal" variant="outline"
                        onClick={(e) => {
                            e.preventDefault()
                            if (!place.title.toString.trim() ||
                                !place.address.toString.trim() ||
                                !place.graphic.toString.trim() ||
                                !place.number.toString().trim() ||
                                !place.kitchen.toString.trim() ||
                                !place.description.trim() ||
                                !place.bill.toString.trim() ||
                                !place.category.toString.trim() ||
                                !place.photo.toString.trim()) {

                                alert(
                                    "Just fill all of the fields of the form and hit Create button."
                                )
                                return
                            }
                            createPlace({
                                title: place.title.trim(),
                                address: place.address.trim(),
                                graphic: place.graphic.trim(),
                                number: place.number.trim(),
                                kitchen: place.kitchen.trim(),
                                description: place.description.trim(),
                                bill: place.bill.trim(),
                                category: place.category.trim(),
                                photo: place.photo.trim(),
                                // id: place.id.trim()
                            })
                        }}
                    >
                        Create
                    </Button>
                </div>

            </form>
        </div >





    );
};

export default AddPlace;
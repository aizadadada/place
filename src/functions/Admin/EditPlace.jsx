import { Input } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { FormLabel, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../../contexts/AdminContext';

const EditPlace = () => {
    const { getPlaceToEdit, saveEditedPlace, placeToEdit } = useContext(adminContext)
    const [editPlace, setEditPlace] = useState(placeToEdit)

    useEffect(() => {
        setEditPlace(placeToEdit)
    }, [placeToEdit])

    const { id } = useParams()
    useEffect(() => {
        getPlaceToEdit(id)
    }, [])

    const handleInput = (e) => {
        let obj = {
            ...editPlace,
            [e.target.name]: e.target.value
        }
        setEditPlace(obj)
    }

    const history = useHistory()
    console.log(placeToEdit);

    return (

        <>
            {
                editPlace ? (
                    <div className="edit-inputs" >
                        <form>
                            <FormLabel >Name of Place</FormLabel>
                            <Input placeholder="Name of Place" value={editPlace.title} onChange={handleInput} name="title" id="input-form" />
                            <FormLabel >Location</FormLabel>
                            <Input placeholder="Location" value={editPlace.address} onChange={handleInput} name="address" id="input-form" />
                            <FormLabel >Working Hours</FormLabel>
                            <Input placeholder="Working Hours" value={editPlace.graphic} onChange={handleInput} name="graphic" id="input-form" />
                            <FormLabel >Number</FormLabel>
                            <Input placeholder="Number" value={editPlace.number} onChange={handleInput} name="number" id="input-form" />
                            <FormLabel >Kitchen</FormLabel>
                            <Input placeholder="Kitchen" value={editPlace.kitchen} onChange={handleInput} name="kitchen" id="input-form" />
                            <FormLabel>Description</FormLabel>
                            <Input placeholder="Description" value={editPlace.description} onChange={handleInput} name="description" id="input-form" />
                            <FormLabel >Bill</FormLabel>
                            <Input placeholder="Bill" value={editPlace.bill} onChange={handleInput} name="bill" id="input-form" />
                            <FormLabel >Category</FormLabel>
                            <Input placeholder="Category" value={editPlace.category} onChange={handleInput} name="category" id="input-form" />
                            <FormLabel >Photo</FormLabel>
                            <Input placeholder="Count" value={editPlace.photo} onChange={handleInput} name="photo" id="input-form" />
                            <Button variant="succes"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (!editPlace.title.trim() ||
                                        !editPlace.address.trim() ||
                                        !editPlace.graphic.trim() ||
                                        !editPlace.number.trim() ||
                                        !editPlace.kitchen.trim() ||
                                        !editPlace.description.trim() ||
                                        !editPlace.bill.trim() ||
                                        !editPlace.category.trim() ||
                                        !editPlace.photo.trim()) {
                                        alert("Write Everything")
                                        return
                                    }
                                    saveEditedPlace(editPlace)
                                    history.push('/admin')
                                }

                                }     >
                                Save
                            </Button>
                        </form>
                    </div >
                ) : (
                    <h2>Loading</h2>
                )
            }
        </>

    );

};

export default EditPlace;
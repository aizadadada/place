import axios from "axios";
import React, { useReducer, useState } from "react";
import { API } from "../helpers/const";

export const adminContext = React.createContext()

const INIT_STATE = {
    place: null,
    placeToEdit: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PLACE":
            return { ...state, place: action.payload }
        case "GET_PLACE_TO_EDIT":
            return { ...state, placeToEdit: action.payload }
        default:
            return { ...state }
    }
}
const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const createPlace = async (newPlace) => {
        await axios.post(API, { ...newPlace })
        getPlace()
    }
    const getPlace = async () => {
        const { data } = await axios(API)
        dispatch({
            type: "GET_PLACE",
            payload: data
        })
    }
    const deletePlace = async (id) => {
        await axios.delete(`${API}/${id}`)
        getPlace()
    }

    const getPlaceToEdit = async (id) => {
        const { data } = await axios(`${API}/${id}`)
        dispatch({
            type: "GET_PLACE_TO_EDIT",
            payload: data
        })
    }

    const saveEditedPlace = async (editedPlace) => {
        await axios.patch(`${API}/${editedPlace.id}`, { ...editedPlace })
        getPlace()
    }
    return (
        <adminContext.Provider value={{
            place: state.place,
            placeToEdit: state.placeToEdit,
            createPlace,
            getPlace,
            deletePlace,
            getPlaceToEdit,
            saveEditedPlace

        }}>

            {children}
        </adminContext.Provider>

    );
};

export default AdminContextProvider;
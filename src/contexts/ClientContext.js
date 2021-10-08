import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { calcSubPrice, calcTotalPrice } from '../helpers/calc';
import { API } from '../helpers/const';


export const clientContext = React.createContext()

const INIT_STATE = {
    place: null,
    onePlace: null,
    // placeInCustom: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).place.length : 0,
    cart: null,
    categories: []

}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PLACE":
            return { ...state, place: action.payload }
        case "GET_PLACE_BY_ID":
            return { ...state, onePlace: action.payload }
        case "ADD_AND_DELETE_PLACE_IN_CUSTOM":
            return { ...state, placeInCustom: action.payload }
        case "GET_CART":
            return { ...state, cart: action.payload }
        case "GET_CATEGORIES":
            return { ...state, categories: action.payload }
        default:
            return { ...state }
    }
}
const ClientContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getPlace = async () => {
        const { data } = await axios(`${API}${window.location.search}`)
        dispatch({
            type: "GET_PLACE",
            payload: data
        })
    }

    const getPlaceByID = async (placeId) => {
        const { data } = await axios(`${API}${window.location.search}`)
        dispatch({
            type: "GET_PLACE_BY_ID",
            payload: data.filter(item => item.id === placeId)
        })
    }

    const addAndDeletePlaceInCustom = (food) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            cart = {
                place: [],
                totalPrice: 0,
            }
        }
        let newFood = {
            food: food,
            count: 1,
            subPrice: 0
        }
        newFood.subPrice = calcSubPrice(newFood)
        console.log(newFood, calcSubPrice(newFood))
        let newCart = cart.place.filter(item => item.food.id === food.id)
        if (newCart.length) {
            cart.place = cart.place.filter(item => item.food.id !== food.id)

        }
        else {
            cart.place.push(newFood)
        }
        cart.totalPrice = calcTotalPrice(cart.place)
        localStorage.setItem("cart", JSON.stringify(cart))
        dispatch({
            type: "ADD_AND_DELETE_PLACE_IN_CUSTOM",
            payload: cart.place.length
        })
    }

    const checkPlaceInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            return false
        }
        let newCart = cart.place.filter(item => item.food.id === id)
        return newCart.length ? true : false
    }

    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    const changeCountPlace = (count, id) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            return
        }
        cart.place = cart.place.map(item => {
            if (item.food.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })

        cart.totalPrice = calcTotalPrice(cart.place)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }

    // фильтрация

    const getCategories = async () => {
        const { data } = await axios(API)
        const arr = []
        data.forEach(item => {
            arr.push(item.category)
        })
        let newArr = []
        arr.forEach(elem => {
            let check = newArr.filter(item => item.trim() === elem.trim())
            if (check.length === 0) {
                newArr.push(elem)
            }
        })
        dispatch({
            type: "GET_CATEGORIES",
            payload: newArr
        })
    }

    // пагинация
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(2)
    useEffect(() => {
        const fetchPlaces = () => {
            const data = state.place || []
            setPosts(data)
        }
        fetchPlaces()
    }, [state.place])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPosts = posts.length

    const changePage = (newPage) => {
        setCurrentPage(newPage)
    }

    // регистрация
    const createNewUser = async (newUser, history) => {
        try {
            const data = await axios.post("https://intense-retreat-64750.herokuapp.com/auth/registration", newUser)
            alert('Вы успешно зарегистрированы!')
            history.push('/')


        }
        catch (e) {
            alert(e.response.data.message)
        }
    }

    //авторизация,
    const login = async (user, history) => {
        try {
            const { data } = await axios.post("https://intense-retreat-64750.herokuapp.com/auth/login", user)
            history.push('/')
        }
        catch (e) {
            alert(e.response.data.mssage)
        }
    }
    return (

        <clientContext.Provider value={{
            place: state.place,
            placeInCustom: state.placeInCustom,
            cart: state.cart,
            categories: state.categories,
            getPlace,
            addAndDeletePlaceInCustom,
            checkPlaceInCart,
            getCart,
            getPlaceByID,
            changeCountPlace,
            getCategories,
            currentPosts,
            postsPerPage,
            totalPosts,
            changePage,
            createNewUser,
            login
        }
        }>
            {children}

        </clientContext.Provider>
    );
};

export default ClientContextProvider;
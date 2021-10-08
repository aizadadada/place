import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AdminContextProvider from './contexts/AdminContext';
import AdminPage from './pages/AdminPage/AdminPage';
import EditPage from './functions/Admin/EditPage';
// import CardCustom from './functions/Admin/CardCustom';
import ClientContextProvider from './contexts/ClientContext';
// import CardCustom from './functions/Admin/CardCustom';
import ContactPage from './pages/ContactPage/ContactPage';
import Navbar from './components/Navbar/Navbar';
import PlacePage from './pages/Article/PlacePage';
import NewsPage from './pages/NewsPage/NewsPage';
import FavoritePage from './pages/Favorites/FavoritePage';
import SignUp from './functions/Client/SignUp';
// import Cafe from './functions/Client/Cafe'
// import Content from './functions/Client/Content';
import FirstPage from './pages/First/FirstPage';
import SignIn from './functions/Client/SignIn';

const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/admin" component={AdminPage} />
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/edit/:id" component={EditPage} />
                        <Route exact path="/places" component={FirstPage} />
                        <Route exact path="/link/to/article/:placeId" component={PlacePage} />
                        <Route exact path="/news" component={NewsPage} />
                        <Route exact path="/favorites" component={FavoritePage} />
                        <Route exact path="/sign-up" component={SignUp} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/sign-in" component={SignIn} />

                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>

        </ClientContextProvider>
    );
};

export default Routes;
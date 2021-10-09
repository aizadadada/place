import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AdminContextProvider from './contexts/AdminContext';
import AdminPage from './pages/AdminPage/AdminPage';
import EditPage from './functions/Admin/EditPage';
import ClientContextProvider from './contexts/ClientContext';
import Navbar from './components/Navbar/Navbar';
import NewsPage from './pages/NewsPage/NewsPage';
import FavoritePage from './pages/Favorites/FavoritePage';
import SignUp from './functions/Client/SignUp';
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
                        <Route exact path="/news" component={NewsPage} />
                        <Route exact path="/favorites" component={FavoritePage} />
                        <Route exact path="/sign-up" component={SignUp} />
                        <Route exact path="/sign-in" component={SignIn} />

                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>

        </ClientContextProvider>
    );
};

export default Routes;
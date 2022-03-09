import {Component} from "react";
import {NavLink} from "react-router-dom";
import "./NavBarStyle.css"


const NavBar = () =>{

    return (
        <div className={'navBar'}>
            <NavLink className={'navBarLink'} to={'#'}>Главная</NavLink>
            <NavLink className={'navBarLink'} to={'/all'}>Все книги</NavLink>
        </div>
    );
}
export default NavBar;
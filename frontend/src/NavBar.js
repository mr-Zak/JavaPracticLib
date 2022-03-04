import {Component} from "react";
import {NavLink} from "react-router-dom";
import "./NavBarStyle.css"


const NavBar = () =>{

    return (
        <div className={'navBar'}>
            <a className={'navBarLink'} href={'#'}>Главная</a>
            <a className={'navBarLink'} href={'/all'}>Все книги</a>
        </div>
    );
}
export default NavBar;
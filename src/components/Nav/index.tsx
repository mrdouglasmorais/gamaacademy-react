import React from 'react';
import { NavBar } from './style';
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { IGlobalState } from '../../store/modules/user/types';

import LogoGama from '../../assets/img/logo.png'

const Nav: React.FC = () => {
  const state = useSelector((state: IGlobalState) => state.users)
  return (
    <div>
      <NavBar>
        <img src={LogoGama} alt="Logo Gama" />
        <div className="nav-links">
          <Link to="/"> Home </Link>
          <Link to="/courses"> Cursos </Link>
          <Link to="/signup"> Cadastre-se </Link>
          <Link to="/signin"> Login </Link>
          { state.length >= 1 && ( 
          <Link to="/dashboard">
            Dashboard
          </Link> 
          )}
        </div>
      </NavBar>
    </div>
  );
}

export default Nav;
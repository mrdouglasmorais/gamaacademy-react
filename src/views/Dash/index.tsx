import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader';
import { api } from '../../services/api';

import { useDispatch } from 'react-redux';
import addNewUser from '../../store/modules/user/action'

import { Container } from './style';

interface ICollaborator{
  id: number;
  name: string;
  email: string;
  photo: {
    path: string;
  }
}

const Dash: React.FC = () => {
  const [ data, setData ] = useState<ICollaborator[]>([]);
  const [ isLoad, setIsLoad ] = useState(false)
  const token = localStorage.getItem('@gamaServiceToken')?.replace(/["]/g, '')

  const dispach = useDispatch();

  useEffect(() => {
    console.log(token)
    api.get('collaborator', {
      headers: {
        Authorization: `Bearer ${token}`
      }}).then( response => {
      setIsLoad(true)
      setData(response.data)
    }).finally( () => setIsLoad(false) );
  }, [token])

  useEffect( () => {
    data?.map( user => dispach((addNewUser(user))) )
  }, [data, dispach])

  if (isLoad) {
    return <Loader />
  }

  return (
    <Container>
      <div className="wrapper">
      <h1>Dashboard</h1>
        <div>
          { data?.map( el => (
            <div key={el.id} className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE058BFLA-KgK5zLaMaqF9qedRU3efka46ZDkVeRQiNwE_ArcC9ECApiM9Upjj-xhJqn4&usqp=CAU" alt="img" width="100px" height="100px" />
              <div className="content-information">
                <p> Nome: {el.name}</p>
                <p> Email: {el.email}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/">Retornar para home</Link>
      </div>
    </Container>
  );
}

export default Dash;
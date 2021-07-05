import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { Container } from './style';
import { api } from '../../services/api'


interface IData {
  name: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const [ data, setData ] = useState<IData>({} as IData);
  const [ load, setLoad ] = useState(false);

  const history = useHistory()

  const hadleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoad(true)
    api.post('users', data).then(
      response => {
        setLoad(false)
        toast.success('Cadastro realizado com sucesso! Você está sendo redicionado para página de login', {
          hideProgressBar: false,
          onClose: () => history.push('/signin')
        })
      }
    ).catch( e => { toast.error('Oops, algo deu errado')} )
    .finally(() => setLoad(false))
  }, [data, history])

  if(load){
    return <Loader />
  }

  return (
    <Container>
      <div className="card">
        <h5>Cadastre-se</h5>
        <form onSubmit={ hadleSubmit }>
          <input 
            type="text" 
            placeholder="Informe seu nome"
            onChange={ e => setData({...data, name: e.target.value})}
          />
          <input 
            type="text" 
            placeholder="Informe seu email" 
            onChange={ e => setData({...data, email: e.target.value})}
          />
          <input 
            type="password" 
            placeholder="Informe sua senha"
            onChange={ e => setData({...data, password: e.target.value})}
          />
          <input type="submit" value="Cadastrar" />
        </form>
        <Link to="/signin">Clique aqui para logar.</Link>
      </div>
    </Container>
  );
}

export default SignUp;
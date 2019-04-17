import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import avatar from '../../assets/img/flat-avatar.png'
import LoginWrapper from '../../components/auth/LoginWrapper'
import LoginRow from '../../components/auth/LoginRow'
import Label from '../../components/auth/Label'

const LoginPage = () => (
  <LoginWrapper>
    <img src={avatar} className='user-avatar' alt='Logo' />
    <h1>Faça login para continuar no sistema</h1>
    <form
      onSubmit={() => console.log('this.handleLogin')}
      className='ng-pristine ng-valid'
    >
      <LoginRow>
        <Label>E-mail: </Label>
        <InputText placeholder='exemplo@email.com' />
      </LoginRow>
      <LoginRow>
        <Label>Senha: </Label>
        <Password placeholder='*******' />
      </LoginRow>
      <Button label='Posso acessar?' />
    </form>
  </LoginWrapper>
)

export default LoginPage

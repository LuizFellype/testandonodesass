import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import avatar from '../../assets/img/flat-avatar.png'
import LoginWrapper from './LoginWrapper'
import LoginRow from './LoginRow'
import Label from './Label'

const LoginPage = () => (
  // getInitialState: function() {
  //   return {
  //     loginID: '',
  //     password: '',
  //     isSubmitted: false
  //   }
  // },

  // mixins: [History],

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

// setLoginID: function(e) {
//   this.setState({
//     loginID: e.target.value,
//     loginError: ''
//   })
// },

// setPassword: function(e) {
//   this.setState({
//     password: e.target.value,
//     loginError: ''
//   })
// },

// handleLogin: function(e) {
//   e.preventDefault()
//   this.props.history.pushState(null, '/')

//   // this.transitionTo('dashboard');

//   return false
// }

export default LoginPage

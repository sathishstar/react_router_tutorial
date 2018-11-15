import {
    withRouter
  } from 'react-router-dom'
  
  class Register extends React.Component {
    handleSubmit = (user) => {
      saveUser(user).then(() =>
        this.props.history.push('/dashboard')
      ))
    }
    render() {
      return (
        <div>
          <h1>Register</h1>
          <Form onSubmit={this.handleSubmit} />
        </div>
      )
    }
  }
  
  export default withRouter(Register)


  //another method

  class Register extends React.Component {
    state = {
      toDashboard: false,
    }
    handleSubmit = (user) => {
      saveUser(user)
        .then(() => this.setState(() => ({
          toDashboard: true
        })))
    }
    render() {
      if (this.state.toDashboard === true) {
        return <Redirect to='/dashboard' />
      }
  
      return (
        <div>
          <h1>Register</h1>
          <Form onSubmit={this.handleSubmit} />
        </div>
      )
    }
  }
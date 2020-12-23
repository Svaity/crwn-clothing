
import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import {signInWithGoogle, SignInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      this.setState({ email: '', password: '' });
    };
  
    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };
    
    render(){
        return(
            <div className='sign-in'>
                <h2>
                    I already Have a Account
                </h2>
                <span>Sign Up with email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
            <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{''}
                    Sign In With Google{""}
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
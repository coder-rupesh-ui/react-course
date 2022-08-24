import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const passReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const Login = (props) => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });

  const [passState, dispatchPass] = useReducer(passReducer, {
    value: '',
    isValid: null
  });

  const { isValid: isEmailValid } = emailState;
  const { isValid: isPassValid } = passState;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        isEmailValid && isPassValid
      );
    }, 500);
    //this is cleanup code, it before execution of use effect except 1st time, and before destruction also it runs
    return () => {
      clearTimeout(timer);
    }
  }, [isEmailValid, isPassValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: 'USER_INPUT', val: event.target.value })
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id="email" label="E-mail" type="email"
          isValid={isEmailValid} value={emailState.value}
          onChange={emailChangeHandler} onBlur={ validateEmailHandler } />
        
        <Input id="password" label="Password" type="password"
          isValid={isPassValid} value={passState.value}
          onChange={passwordChangeHandler} onBlur={ validatePasswordHandler } />
          
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

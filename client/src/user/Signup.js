import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/layout';
import { signup } from '../auth';


const Signup = () => {

   // set the state values
   const [values, setValues] = useState({
         name: '',
         email: '',
         password: '',
         error: '',
         success: false
   });

   const { name, email, password, success, error } = values
   

   //update the state values when user key in the from
   const handleChange = name => event => {
      setValues({...values, error: false, [name]: event.target.value});
   }



   // sent all values on the state to the backend 
   const clickSubmit = (e) => {
      e.preventDefault()
      setValues({...values, error:false})
      signup({name, email, password})
      .then(data => {
         if (data.error){
            setValues({...values, error: data.error, success:false })
         } else {
            setValues({
               ...values, name: '',
               email: '', password: '', error: '', success: true
            })
         }
      })

   }

   const signUPForm = () => (
      <form className="m-4">
         <div className="form-group">
            <label className="text-muted">Name</label>
            <input onChange={handleChange('name')}  type="text" className="form-control"
            value={name}/>
         </div>
         <div className="form-group">
            <label className="text-muted">Email</label>
            <input onChange={handleChange('email')} type="email" className="form-control"
            value={email}/>
         </div>
         <div className="form-group">
            <label className="text-muted">Password</label>
            <input onChange={handleChange('password')} type="password" className="form-control"
            value={password}/>
         </div>
         <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
      </form>
   )

   const showError = () => (
      <div className="alert alert-danger" style={{display: error? ' ':
      'none'}}> {error}</div> 
   )

   const showSuccess = () => (
      <div className="alert alert-info" style={{display: success? ' ':
      'none'}}> New account is created. Please <Link to="/signin">Signin</Link></div> 
   )

   return (
         <Layout title='Signup' description='Signup Node Reac E-commerce App' className="container col-md-8 offset-md-2">
           {showSuccess()}
           {showError()}    
           {signUPForm()}
         </Layout>
   )
}

export default Signup;
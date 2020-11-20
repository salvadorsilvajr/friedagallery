import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../core/layout';
import { authenticate, signin,isAuthenticated } from '../auth';


const Signin = () => {

   // set the state values
   const [values, setValues] = useState({
         email: '',
         password: '',
         error: '',
         loading: false,
         redirecToReferrer: false
   });

   const { email, password, loading, redirecToReferrer, error } = values
   const { user } = isAuthenticated()
   

   //update the state values when user key in the from
   const handleChange = name => event => {
      setValues({...values, error: false, [name]: event.target.value});
   }



   // sent all values on the state to the backend 
   const clickSubmit = (e) => {
      e.preventDefault()
      setValues({...values, error:false, loading:true})
      signin({ email, password})
      .then(data => {
         if (data.error){
            setValues({...values, error: data.error, loading:false })
         } else {
            authenticate(data, () => {
               setValues({
                  ...values, 
                  redirecToReferrer: true
               })
            })
         }
      })

   }

   const signUPForm = () => (
      <form  className='m-4'>
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

   const showLoading = () => 
      loading && (
      <div className="alert alert-info">
         <h2>Loading ...</h2>
      </div>
   )

   const redirectUser = () => {
      if(redirecToReferrer){
         if(user && user.role === 1){
            return <Redirect to='/admin/dashboard'/>
         } else {
            return <Redirect to='/user/dashboard'/>
         }
      }
      if (isAuthenticated()) {
         return  <Redirect to='/' />
      }
   }

   return (
         <Layout title='Signin' description='Signin to get updates in new pieces and promotions' className="container col-md-8 offset-md-2">
           {showLoading()}
           {showError()}    
           {signUPForm()}
           {redirectUser()}
         </Layout>
   )
}

export default Signin;

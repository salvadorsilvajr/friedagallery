import React, { useEffect, useState } from 'react'
import Layout from '../core/layout';
import {isAuthenticated} from '../auth'
import {  Redirect } from 'react-router-dom';
import {read, update, updateUser } from './apiUser'

const Profile = ({match}) => {
   const [ values, setValues] = useState({
      name: '',
      email: '',
      password: '',
      error: false,
      success: false
   })

   const { token } = isAuthenticated()

   const { name, email, password, error, success } = values

   const init = (userId) => {
      // console.log(userId);
      read(userId, token).then(data => {
         if(data.error) {
            setValues({...values, error: true })
         } else { 
            setValues({ ...values, 
            name: data.name, 
            email: data.email  })
         }
      })
   }

   useEffect(() => {
      init(match.params.userId )
   }, []);

   const handleChenge = name => e => {
      setValues({ ...values, error: false, [name]: e.target.value})
   }

   const clickSubmit = (e) => {
      e.preventDefault()
      update(match.params.userId, token, {name, email, password})
      .then(data => {
         if(data.error) {
            console.log(data.error);
         } else {
            updateUser(data, () => {
               console.log(data.email)
               setValues({...values, 
                  name:data.name, 
                  email:data.email, 
                  password:data.password,
                  success: true
               })
            })
         }
      })
      .catch(error => {
         console.log(error);
      })
   }

   const redirectUser = (success) => {
      if(success) {
         return<Redirect to="/cart" />
      }
   }

   const profileUpdate = (name, email, password) => (
      <form >
         <div className="form-group">
            <label className="text-muted">Name</label>
            <input type="text" onChange={handleChenge('name')} className="form-control" value={name}/>
         </div>
         <div className="form-group">
            <label className="text-muted">Email</label>
            <input type="text" onChange={handleChenge('email')} className="form-control" value={email}/>
         </div>
         <div className="form-group">
            <label className="text-muted">Password</label>
            
            <input type="text" placeholder="******"  onChange={handleChenge('password')} className="form-control" value={password}/>
         </div>
         <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
      </form>
   )

   return (
      <Layout title='Profile' description='Update your Profile'className='container'>
         <h2 className="mb-4">Profile Update</h2>
         {profileUpdate(name, email, password)}
         {redirectUser(success)}
      </Layout>
   )

}

export default Profile;
import React, { Component } from 'react'
// import PropTypes from "prop-types";
import Form from './Form'
const initValues={
            name: '',
            email: '',
            password:'',
            birthDate:'',
            gender: '',
};
export default class Main extends Component {
    state={
        values:initValues,
        agreement: false,
        errors:{}
    }
    handleChange=event=>{
        this.setState({
            values:{
                ...this.state.values,
                [event.target.name]:event.target.value
            }
        })
    }
    handleAgreement=event=>{
        this.setState({
            agreement:event.target.checked
        })
    }

    handleSubmit=event=>{
        event.preventDefault()
         const {isValid,errors}=this.validate()
            if(isValid){
           this.props.creatUser(this.state.values)

            event.target.reset()
        this.setState({
            values:initValues,agreement:false})
         }else{
             this.setState({errors})
             
         }
    }
    validate=()=>{
        const errors={}
        const{values:{name,email,password,gender,birthDate}}=this.state
        if(!name){
            errors.name='please provide your Name'
        }
        if(!email){
            errors.email='please provide your Email'
        }
        if(!password){
            errors.password='please provide your password'
        }

        if(!birthDate){
            errors.birthDate='please provide your birthDate'
        }
        if(!gender){
            errors.gender='please select your gender'
        }
        return{
            errors,
            isValid: Object.keys(errors).length===0
        };
    };
    render() {
        return (
            <div>
                <h1>Signup Form</h1>
                <Form
                        values={this.state.values}
                        agreement={this.state.agreement}
                        handleChange={this.handleChange}
                        errors={this.state.errors}
                        handleSubmit={this.handleSubmit}
                        handleAgreement={this.handleAgreement}
                />
            </div>
        )
    }
   
}
// Main.propTypes={
//     createUser:PropTypes.func.isRequired
// }
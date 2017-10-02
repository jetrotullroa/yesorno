import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import validateEmail from '../../utils/validateEmail'

import SurveyField from './SurveyField'
import formFields from './formFields'

class SurveyForm extends Component {

  renderField() {

    return formFields.map( ({label, name}, index) => {
      return(
        <Field key={index } component={SurveyField} name={name} label={label} type="text" />
      )
    })

  }

  render() {
    return(
      <div className="survey-form">
        <form
          onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
        >
          {this.renderField()}
          <div className="buttons" style={{ marginTop: '15px' }}>
            <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
            <button type="submit" className="grey btn-flat right white-text">
            Review
            <i className="material-icons right">done</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
function validate(values) {
  const errors = {}

  errors.recipients = validateEmail(values.recipients || '')

  formFields.forEach( ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value"
    }
  })


  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)

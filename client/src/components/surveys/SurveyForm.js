import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import validateEmail from '../../utils/validateEmail'

import SurveyField from './SurveyField'

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipients List', name: 'recipients' },
]

class SurveyForm extends Component {

  renderField() {

    return FIELDS.map( ({label, name}, index) => {
      return(
        <Field key={index } component={SurveyField} name={name} label={label} type="text" />
      )
    })

  }

  render() {
    return(
      <div className="survey-form">
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
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

  FIELDS.forEach( ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value"
    }
  })


  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm)

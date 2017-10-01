import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField'


class SurveyForm extends Component {

  renderField() {

    const FIELDS = [
      { label: 'Survey Title', name: 'title' },
      { label: 'Subject Line', name: 'subject' },
      { label: 'Email Body', name: 'body' },
      { label: 'Recipients List', name: 'recipients' },
    ]

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
          <div className="buttons">
            <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
            <button type="submit" className="grey btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)

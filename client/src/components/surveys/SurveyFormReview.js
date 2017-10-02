import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'
import formFields from './formFields'


const SurveyFormReview = ( {onCancelForm, formValues, submitSurvey, history } ) => {

  const reviewFields = formFields.map( ({name, label}, index) => {
    return(
      <div key={index}>
        <label htmlFor={name}>{label}</label>
        <div>
            {formValues[name]}
        </div>
      </div>
    )
  })
  return (
    <div>
      <h5>Please confirm</h5>
      {reviewFields}
      <div className="buttons">
        <button
        className="yellow darken-3 btn-flat white-text left"
        onClick={onCancelForm}
        >
        Cancel
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="green btn-flat white-text right">
          Submit
          <i className="material-icons right">email</i>
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))

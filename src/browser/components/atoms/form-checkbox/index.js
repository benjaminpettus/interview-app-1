import React,{Component} from 'react'

export default class FormCheckbox extends Component {
  constructor() {
    super()
  }


  render() {
    const checklist = this.props.choices.map( (choice, index) => {
      const choiceId = 'checkbox-'+choice.split(' ').join('-')
      const choiceLabel = ' '+choice
      return (
        <div key = {index} className="uk-form-controls uk-form-controls-text">
          <label>
            <input className="uk-checkbox" id={choiceId} type="checkbox" name={choiceId}/>
            {choiceLabel}
          </label>
        </div>
      )
    })

    return (
      <div>
        {checklist}
      </div>
    )
  }
}
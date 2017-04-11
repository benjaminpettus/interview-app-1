import React,{Component} from 'react'

export default class FormCheckbox extends Component {
  constructor() {
    super()
  }

  render() {
    const checklist = props.choices.map( (choice, index) => {
      <div key = index>
        <p>{choice}</p>
        <input className="uk-input" id={choice} type="checkbox"/>
      </div>
    })

    return (
      <div className="uk-form-controls">
        {checklist}
      </div>
    )
  }
}

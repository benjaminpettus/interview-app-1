import React, {Component} from 'react'
import flex from 'react-uikit-flex'
import FormCheckbox from '../../atoms/form-checkbox'
import FormRadio from '../../atoms/form-radio/index'
import FormSelect from '../../atoms/form-select/index'
import FormInput from '../../atoms/form-input/index'

export default class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      iterators: {
        iteratorRadio: 0,
        iteratorCheckbox: 0,
        iteratorInput: 0,
        iteratorSelect: 0
      }
    }
  }

  handleChange(args, event) {
    let property = args.property
    let isCheckbox = args.isCheckbox
    new Promise( (resolve, reject) => {
      console.log('Event:', event)
      if(isCheckbox) {
        this.setState({[property]: event.target.checked}, () => {
          resolve()
        });
      } else {
        this.setState({[property]: event.target.value}, () => {
          resolve()
        });
      }
    })
    .then( () => {
      console.log('STATE OF FORM:', this.state)
    })
  }

  initTextInput(inputModule) {
    let domElement = (<FormInput 
      prompt={inputModule.prompt} 
      placeholder={inputModule.placeholder} 
      onChange={this.handleChange.bind(this, {property: 'input'+this.state.iterators.iteratorInput, isCheckbox: false})}/>
    )
    let currentState = this.state
    currentState.iterators.iteratorInput++
    this.setState( currentState )
    return domElement
  }

  initCheckbox(inputModule) {
    let domElement = (<FormCheckbox 
      prompt={inputModule.prompt} 
      options={inputModule.options} 
      onChange={this.handleChange.bind(this, {property: 'checkbox'+this.state.iterators.iteratorCheckbox, isCheckbox: true})}/>)
    let currentState = this.state
    currentState.iterators.iteratorCheckbox++
    this.setState( currentState )
    return domElement
  }

  initRadio(inputModule) {
    let domElement = (<FormRadio 
      prompt={inputModule.prompt} 
      options={inputModule.options} 
      onChange={this.handleChange.bind(this)}
      self={this}/>)
    let currentState = this.state
    currentState.iterators.iteratorRadio++
    this.setState( currentState )
    return domElement
  }

  initSelect(inputModule) {
    let domElement = (
      <FormSelect 
      prompt={inputModule.prompt} 
      options={inputModule.options} 
      isOptionRequired={inputModule.isOptionRequired} 
      onChange={this.handleChange.bind(this, {property: 'select'+this.state.iterators.iteratorSelect, isCheckbox: false}) } 
      passId={inputModule.id}
      self={this}/>)
    let currentState = this.state
    currentState.iterators.iteratorSelect++
    this.setState( currentState )
    return domElement
  }

  componentDidMount() {
    const form = this.props.inputModules.map( inputModule => {
      return {'Input': this.initTextInput.bind(this, inputModule),
        'Checkbox': this.initCheckbox.bind(this, inputModule),
        'Radio': this.initRadio.bind(this, inputModule),
        'Select': this.initSelect.bind(this, inputModule)
      }[inputModule.type]()
    })
    this.setState({form: form}, () => {
      console.log(this.state)
    })
  }

  render(){

    return(
      <form className="uk-form-horizontal uk-margin-large">
        {this.state.form}
      </form>
    )
  }
}

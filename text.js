import {updateKeys} from "./index.js"


export default class TextChanger {
  constructor(textInput, e){
    this.text = textInput
    this.event = e
    this.data = this.updateTextInput()

    updateKeys(e)
  }

  updateTextInput() {
    var data = this.text.value
    this.text.value = ""
    return data
  }
}
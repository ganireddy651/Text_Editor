import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
} from './components/StyledComponent'
import './App.css'

class App extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false, text: ''}

  onChangeText = e => {
    this.setState({text: e.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {text, isBold, isItalic, isUnderline} = this.state
    console.log(isBold)
    console.log(isItalic)
    console.log(isUnderline)

    return (
      <div className="app-container">
        <div className="text-editor-card">
          <div className="text-editor-container">
            <h1 className="main-heading">Text Editor</h1>
            <img
              className="text-editor-image"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="textarea-container">
            <ul className="styling-container">
              <li>
                <BoldButton
                  isBold={isBold}
                  onClick={this.onClickBold}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  isItalic={isItalic}
                  onClick={this.onClickItalic}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  isUnderline={isUnderline}
                  onClick={this.onClickUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ul>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
              onChange={this.onChangeText}
              rows="40"
              cols="30"
            >
              {text}
            </TextArea>
          </div>
        </div>
      </div>
    )
  }
}

export default App

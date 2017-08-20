import ReactSelector from 'testcafe-react-selectors';

export default class StartPage {
  constructor () {
    this.textInput = ReactSelector('Header TodoTextInput');
    this.items     = ReactSelector('TodoItem');
  }
}

'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ml_type: ''
    };

    this.runRequest = this.runRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // get all entities - GET

  }

  runRequest(e) {
    // run request to API - POST
    e.preventDefault();
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Try ML Types</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Choose ML Type</legend>
                <label htmlFor="ml_type">
                  ML Type:
                  <select
                    value={this.state.ml_type}
                    onChange={(e) => this.handleChange({ ml_type: e.target.value })}
                  >
                    <option value="Object Prescence">Object Prescence</option>
                    <option value="Object Location">Object Location</option>
                  </select>
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.runRequest(e)}>
                  Run
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

let domContainer = document.querySelector('#App');
ReactDOM.render(<App />, domContainer);
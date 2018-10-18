### Testing stepper 

```class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Stepper steps={[
          {title: 'Step One'}, 
          {title: 'Step Two'}, 
          {title: 'Step Three'}, 
          {title: 'Step Four'}, 
          {title: 'Step Five'}
          ]} 
        activeStep={ 1 } />
        <MyStepper />
      </div>
    );
  }
}

export default App;
```
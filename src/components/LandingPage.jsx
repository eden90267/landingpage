import React from 'react';
import Header from "Source/components/Header";
import Footer from "Source/components/Footer";
import Design from "Source/components/Design";
import Coding from "Source/components/Coding";
import Middle from "Source/components/Middle";

class LandingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header serviceName={this.props.serviceName}/>

        <section className="ui basic vertical segment header">
          <div className="ui container">
            <div className="ui basic very padded left aligned segment">
              <h1>REACT STUDIO</h1>
              <h2>Make Web Application Quicker</h2>
            </div>
          </div>
        </section>

        <section className="ui basic very padded segment">
          <Design/>
        </section>

        <section className="ui basic segment">
          <Middle/>
        </section>

        <div className="ui divider hidden"></div>

        <section className="ui basic segment body"></section>

        <section className="ui basic very padded segment">
          <Coding/>
        </section>

        <Footer serviceName={this.props.serviceName}/>
      </div>
    );
  }
}

export default LandingPage;
import React from 'react';
import Header from "Source/components/Header";
import Footer from "Source/components/Footer";

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

        <Footer serviceName={this.props.serviceName}/>
      </div>
    );
  }
}

export default LandingPage;
import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then((res) => this.props.closeModal());
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map((error, i) => (
        <li className="errors" key={i}>
          {error}
        </li>
      ));
    } else {
      errors = <div></div>;
    }

    return (
      <div className="session-div">
        <br />
        <form className="session" onSubmit={(e) => this.handleSubmit(e)}>
          <button className="x" onClick={() => this.props.closeModal()}>
            X
          </button>
          <h4 className="welcome">
            Welcome to expectoStayLonger, lets sign you up
          </h4>
          <br />
          <input
            className="sessioninput"
            type="text"
            value={this.state.email}
            onChange={this.handleChange("email")}
            placeholder="Email"
          />
          <br />
          <input
            className="sessioninput"
            type="text"
            value={this.state.name}
            onChange={this.handleChange("name")}
            placeholder="Name"
          />
          <br />
          <textarea
            className="sessioninput"
            value={this.state.bio}
            onChange={this.handleChange("bio")}
            placeholder="Bio"
          />
          <br />
          <input
            className="sessioninput"
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            placeholder="Password"
          />
          <br />
          <button className="sessionb">Continue</button>
          <br />
          <ul>{errors}</ul>
          <p className="bottoms">
            Already a user?{" "}
            <Link
              onClick={(() => this.props.closeModal(), this.props.openModal)}
            >
              Brilliant!
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUpForm;

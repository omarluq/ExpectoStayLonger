import React from "react";

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.setState({ ["body"]: "", ["rating"]: "1" });
    this.props.refresh()
  }

  render() {
    return (
      <form className="reviewForm" onSubmit={(e) => this.handleSubmit(e)}>
        <h4 className="reviewstitle">Leave a Review</h4>
        <label>
          {" "}
          Give it a rating{" "}
          <select
            value={this.state.rating}
            onChange={this.handleChange("rating")}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <textarea
          className="reviewbody"
          value={this.state.body}
          onChange={this.handleChange("body")}
          placeholder="Tell us about your stay?"
        ></textarea>
        <button className="reviewsubmit">Submit</button>
      </form>
    );
  }
}

export default CreateReview;

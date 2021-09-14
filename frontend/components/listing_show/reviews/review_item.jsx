import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.toggleview = "show";
  }

  edit() {
    this.props.editReview(this.state);
    this.toggle();
  }

  toggle() {
    if (this.toggleview === "show") {
      this.toggleview = "edit";
    } else {
      this.toggleview = "show";
    }
    this.props.fetchListing(this.props.listingId);
  }

  handleDelete() {
    this.props.deleteReview(this.state.id);
    this.props.fetchListing(this.props.listingId);
  }

  render() {
    let buttons;
    if (this.props.session.id === this.state.author_id) {
      buttons = (
        <div>
          <button onClick={() => this.handleDelete()}>Delete Review</button>
          <br />
          <br />
          <button onClick={() => this.toggle()}>Edit Review</button>
        </div>
      );
    } else {
      buttons = <div></div>;
    }
    let show;
    if (this.toggleview === "show") {
      show = (
        <li className="reviewitem">
          <div>
            <h4 className="reviewer">{this.state.author}</h4>
            <br />
            <p>Gave a rating of: {this.state.rating}</p>
            <br />
            <p>Said: {this.state.body}</p>
            <br />
            {buttons}
          </div>
        </li>
      );
    } else if (this.toggleview === "edit") {
      show = (
        <li className="reviewitem">
          <form onSubmit={() => this.edit()}>
            <textarea
              className="reviewbody"
              value={this.state.body}
              onChange={(e) => this.setState({ ["body"]: e.target.value })}
            ></textarea>
            <br />
            <button className="reviewsubmit">submit</button>
          </form>
        </li>
      );
    }

    return show;
  }
}

export default Review;

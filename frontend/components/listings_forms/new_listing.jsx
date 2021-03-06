import React from "react";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import mapboxgl from "!mapbox-gl";
import Modal from "../landingpage/modal_container";

class NewListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;
    this.errors = null;
    this.urls = []

  }

  handleChange(field) {
    return (e) => {
      let value = e.target.value;
      if (field === "price" || field === "num_of_beds") {
        value = parseInt(e.target.value);
      } else if (field === "house_elf" || field === "owl_friendly") {
        value = "true";
      }
      this.setState({ [field]: value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.spinner();
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib21hcmx1cSIsImEiOiJja3RhOGt0N3UxanE2MnduMWNsNW9lMXdnIn0.EmKLSdfjJDUYIIW8wieFLw";
    const geocoder = mbxGeocoding({
      accessToken: mapboxgl.accessToken,
    });

    geocoder
      .forwardGeocode({
        query: `${this.state.street_address}, ${this.state.city}`,
        limit: 1,
      })
      .send()
      .then((response) => {
        this.setState({ host_id: this.props.session.id });
        if (response.body.features.length > 0) {
          this.setState({
            longitude: response.body.features[0].center[0],
            latitude: response.body.features[0].center[1],
          });
          const formData = new FormData();
          formData.append("listing[host_id]", this.state.host_id);
          formData.append("listing[title]", this.state.title);
          formData.append("listing[description]", this.state.description);
          formData.append("listing[street_address]", this.state.street_address);
          formData.append("listing[city]", this.state.city);
          formData.append("listing[country]", this.state.country);
          formData.append("listing[postcode]", this.state.postcode);
          formData.append("listing[price]", this.state.price);
          formData.append("listing[num_of_beds]", this.state.num_of_beds);
          formData.append("listing[house_elf]", this.state.house_elf);
          formData.append("listing[owl_friendly]", this.state.owl_friendly);
          formData.append("listing[longitude]", this.state.longitude);
          formData.append("listing[latitude]", this.state.latitude);
          if (this.state.photos.length > 0 && this.state.photos.length < 5) {
            for (let i = 0; i < this.state.photos.length; i++) {
              formData.append("listing[photos][]", this.state.photos[i]);
            }
            this.props.createListing(formData).then(
              (res) => {
                this.props.closeSpinner();
                this.props.history.replace(`/listing/${res.listing.id}`);
              },
              (err) => {
                this.props.closeSpinner();
                this.errors = (
                  <p className="errors">
                    Something went wrong! please make sure to fill all fields
                    proprley.
                  </p>
                );
                this.forceUpdate();
              }
            );
          } else if (this.state.photos.length === 0 ) {
            this.noPhotos();
          } else if (this.state.photos.length > 4) {
            this.tooManyPhotos()
          }
        } else {
          this.wrongAddress();
        }
      });
  }

  wrongAddress() {
    this.props.closeSpinner();
    this.errors = (
      <p className="errors">
        The Address you have entered is invalid! please enter a valid address
      </p>
    );
    this.forceUpdate();
  }

  noPhotos() {
    this.props.closeSpinner();
    this.errors = (
      <p className="errors">
        Listings must have 1 picture at least to be added, maximum 4 pictures.
      </p>
    );
    this.forceUpdate();
  }


  tooManyPhotos() {
    this.props.closeSpinner();
    this.errors = (
      <p className="errors">
        exceeded maximum amount of pictures, please make sure you have 4 pictures or less.
      </p>
    );
    this.forceUpdate();
  }

  uploadPhotos(e){

    for(let i =0; i < e.target.files.length; i ++){
      this.urls.push(URL.createObjectURL(e.target.files[i]))
    }
    this.setState({ photos: [...e.target.files, ...this.state.photos ]})
  }

  removeImage(){
    this.setState({ photos: [] })
    this.urls = []
  }


  render() {
   
    return (
      <div className="new-listing-div">
        <Modal />
        <form className="newlistingform" onSubmit={(e) => this.handleSubmit(e)}>
          <br />
          <h4>Hey! Listing a new Magical place?</h4>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange("title")}
            placeholder="title"
            className="new-listing-form"
          />
          <br />
          <textarea
            value={this.state.description}
            onChange={this.handleChange("description")}
            placeholder="description"
            className="new-listing-form"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <input
            type="text"
            value={this.state.street_address}
            onChange={this.handleChange("street_address")}
            placeholder="street address"
            className="new-listing-form"
          />
          <br />
          <input
            type="text"
            value={this.state.city}
            onChange={this.handleChange("city")}
            placeholder="city"
            className="new-listing-form"
          />
          <br />
          <input
            type="text"
            value={this.state.country}
            onChange={this.handleChange("country")}
            placeholder="country"
            className="new-listing-form"
          />
          <br />
          <input
            type="text"
            value={this.state.postcode}
            onChange={this.handleChange("postcode")}
            placeholder="postcode"
            className="new-listing-form"
          />
          <br />
          <input
            type="number"
            value={this.state.price}
            onChange={this.handleChange("price")}
            placeholder="price in galleons"
            className="new-listing-form"
          />
          <br />
          <input
            type="number"
            value={this.state.num_of_beds}
            onChange={this.handleChange("num_of_beds")}
            placeholder="number of beds"
            className="new-listing-form"
          />
          <br />
          <label className="newformlabel">
            <input
              type="checkbox"
              value={this.state.house_elf}
              onChange={this.handleChange("house_elf")}
              className="new-listing-form"
            />{" "}
            Comes with house elf
          </label>
          <br />
          <label className="newformlabel">
            <input
              type="checkbox"
              value={this.state.owl_friendly}
              onChange={this.handleChange("owl_friendly")}
              className="new-listing-form"
            />{" "}
            Owl friendly
          </label>
          <br />
          <label className="fakefileinput">
            {" "}
            Upload Image
            <input
              className="fileinput"
              type="file"
              onChange={(e) => this.uploadPhotos(e)}
              multiple
            />
          </label>
          <br />
          <div className='imgpreviewwrapper'>
          {this.urls.map(url => (
                        <img className='img-preview' src={url} alt="..." width='150px' height="150px"/>
                    ))}
          
          </div>
          <br />
          {this.urls.length !== 0 ? <button className="newformbutton" onClick={()=> this.removeImage()}>Remove Images</button> : null}
          <br />
          <button className="newformbutton">Finish</button>
          <br />
          {this.errors}
        </form>
        <div className="snape"></div>
      </div>
    );
  }
}

export default NewListing;

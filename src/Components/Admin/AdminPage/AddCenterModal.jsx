import React, { useState } from "react";
import addcenter_icon from "../../../images/Admin/addcenter_icon.svg";
import placeholderImage from "../../../images/Admin/noimage.jpg";
import loadingGif from "../../../images/loading.gif";
import Axios from "axios";

const AddCenterModal = ({ hide, setHide }) => {
  const [state, setState] = useState({
    name: "",
    description: "",
    capacity: "",
    facilities: "",
    location: "",
    price: "",
    image: "",
  });
  const [alert, setAlert] = useState({ message: "", color: "#1d48b7" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "image":
        setState({ ...state, image: e.target.files[0] });
        break;
      default:
        setState({ ...state, [e.target.name]: e.target.value });
    }
    setAlert({ ...alert, message: "" }); //Remove error message when user is typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let formData = new FormData();
    formData.append("name", state.name);
    formData.append("description", state.description);
    formData.append("image", state.image);
    formData.append("location", state.location);
    formData.append("price", state.price);
    formData.append("facilities", state.facilities);
    formData.append("capacity", state.capacity);

    Axios.post(
      "https://magnitude-event-manager.herokuapp.com/api/center/add_center",
      formData
    )
      .then((res) => {
        setAlert({ ...alert, message: res.data.message }); //alert with response message
        setLoading(false);
        setHide(true);
        setAlert({ ...alert, message: "" });
        setState({
          ...state,
          name: "",
          description: "",
          capacity: "",
          facilities: "",
          location: "",
          price: "",
          image: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          ...alert,
          message: err.response.data.message,
          color: "red",
        }); //alert with response message
      });
  };
  return (
    <div className={hide ? "addcenter_hide" : "addcenter_modal"}>
      <div className="addcenter_body">
        <div className="addcenter_title">
          <h2>
            <img src={addcenter_icon} alt="add icon" />
            NEW EVENT CENTER
          </h2>
          <h3 onClick={() => setHide(true)}>&#9747;</h3>
        </div>
        <form className="addcenter_form" onSubmit={handleSubmit}>
          <label htmlFor="name">Event Center Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Event Center Name"
            required
            onChange={handleChange}
            value={state.name}
          />
          <label htmlFor="location">Event Center Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter Location"
            required
            onChange={handleChange}
            value={state.location}
          />
          <label htmlFor="facilities">Facilities</label>
          <input
            type="text"
            name="facilities"
            id="facilities"
            placeholder="Enter facilities separated by comma"
            required
            onChange={handleChange}
            value={state.facilities}
          />
          <div className="addcenter_numbers">
            <div>
              <label htmlFor="capacity">Capacity</label>
              <input
                type="number"
                name="capacity"
                id="capacity"
                placeholder="Enter Capacity"
                required
                onChange={handleChange}
                value={state.capacity}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter Booking Price in Naira"
                required
                onChange={handleChange}
                value={state.price}
              />
            </div>
          </div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="4"
            placeholder="Type here"
            required
            onChange={handleChange}
            value={state.description}
          ></textarea>
          <div className="addcenter_image">
            <div className="addcenter_preview">
              <img
                src={
                  state.image
                    ? URL.createObjectURL(state.image)
                    : placeholderImage
                }
                alt="center imgae"
              />
            </div>

            <div className="addcenter_file">
              <label htmlFor="image">Enter Center Image</label>
              <input
                type="file"
                name="image"
                id="image"
                accept=".jpg, .png, .jpeg|image/*"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <p
            style={
              alert.message
                ? {
                    color: alert.color,
                    margin: "auto",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#f4f4f4",
                  }
                : {}
            }
          >
            {alert.message}
          </p>
          <div>
            <button type="submit" className="addcenter_submit">
              {loading ? (
                <img src={loadingGif} alt="loading" />
              ) : (
                " Add New Center"
              )}
            </button>
            <button
              className="addcenter_cancel-button"
              onClick={() => setHide(true)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCenterModal;

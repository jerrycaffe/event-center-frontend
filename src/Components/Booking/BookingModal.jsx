import React, { useState } from "react";
// import addcenter_icon from "../../../images/Admin/addcenter_icon.svg";
// import placeholderImage from "../../../images/Admin/noimage.jpg";
// import loadingGif from "../../../images/loading.gif";
import Axios from "axios";

const BookingModal = ({ hide, setHide }) => {
  // const [state, setState] = useState({
  //   event_date = '',
  //   from_time = '',
  //   to_time = '',
  //   purpose = '',
  //   customerId = '',
  //   additional_info = '',
  //   centerId = ''
  // });
  // const [alert, setAlert] = useState({ message: "", color: "#1d48b7" });
  // const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   switch (e.target.name) {
  //     case "image":
  //       setState({ ...state, image: e.target.files[0] });
  //       break;
  //     default:
  //       setState({ ...state, [e.target.name]: e.target.value });
  //   }
  //   setAlert({ ...alert, message: "" }); //Remove error message when user is typing
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   let formData = new FormData();
  //   formData.append("name", state.name);
  //   formData.append("description", state.description);
  //   formData.append("image", state.image);
  //   formData.append("location", state.location);
  //   formData.append("price", state.price);
  //   formData.append("facilities", state.facilities);
  //   formData.append("capacity", state.capacity);

  //   Axios.post(
  //     "https://magnitude-event-manager.herokuapp.com/api/center/add_center",
  //     formData
  //   )
  //     .then((res) => {
  //       setAlert({ ...alert, message: res.data.message }); //alert with response message
  //       setLoading(false);
  //       setHide(true);
  //       setAlert({ ...alert, message: "" });
  //       setState({
  //         ...state,
  //         name: "",
  //         description: "",
  //         capacity: "",
  //         facilities: "",
  //         location: "",
  //         price: "",
  //         image: "",
  //       });
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setAlert({
  //         ...alert,
  //         message: err.response.data.message,
  //         color: "red",
  //       }); //alert with response message
  //     });
  // };
  return (
   <div className={hide ? "addcenter_hide" : "addcenter_modal"}>
   <h1>This is the booking modal</h1>
   </div>
  );
};

export default BookingModal;

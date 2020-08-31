import React from "react";
import Axios from "axios";

const CustomerBookingTable = (props) => {
  const verifyPayment = async (id) => {
    try {
      const URL = `https://magnitude-event-manager.herokuapp.com/api/booking/${id}/verify_payment`;

      const response = await Axios.get(URL);
      if (response) {
        console.log(response);
        window.location.reload();
      }
    } catch (error) {
      console.log("ERROR:", error.response);
    }
  };
  const { bookings, loading } = props;
  return (
    <table id="customers" className="customer-bookings-table">
      <thead>
        <tr>
          <th>Event Center</th>
          <th>Booking Date</th>
          <th>Status</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        {loading
          ? `Please Wait your bookings will load in a moment`
          : bookings.length === 0
          ? "You Currently do not have any booking history"
          : bookings.map((booking) => {
              return (
                <tr key={booking.id}>
                  <td>{booking.Center.name}</td>
                  <td>{booking.event_date}</td>
                  <td>{booking.status}</td>
                  <td>
                    {/* {booking.status === "Pending" ? (
                      <React.Fragment>
                        <button onClick={() => verifyPayment(booking.id)}>
                          Verify Payment
                        </button>

                        <a href={booking.PAYMENT_URL} >Make Payment </a>
                      </React.Fragment>
                    ) : (
                      ""
                    )} */}
                    <button onClick={() => verifyPayment(booking.id)}>
                      Verify Payment
                    </button>
                  </td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
};

export default CustomerBookingTable;

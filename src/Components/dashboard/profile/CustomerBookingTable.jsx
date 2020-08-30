import React from "react";

const CustomerBookingTable = props => {
  const { bookings, loading } = props;
  return (
    <table id="customers" className="customer-bookings-table">
      <thead>
        <tr>
          <th>Event Center</th>
          <th>Booking Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        
        {loading
          ? `Please Wait your bookings will load in a moment`
          : bookings.length === 0
          ? "You Currently do not have any booking history"
          : bookings.map(booking => {
              return (
                <tr key={booking.id}>
                  <td>{booking.Center.name}</td>
                  <td>{booking.event_date}</td>
                  <td>{booking.status}</td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
};

export default CustomerBookingTable;

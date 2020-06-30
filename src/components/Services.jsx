import React from 'react'
import bookings from '../images/mdi_event_available.svg';
import payment from '../images/mdi_payment.svg';
import bookmarks from '../images/mdi_collections_bookmark.svg';

const Services=()=> {
  return (
    <div class="services">
        <div class="card pointer">
          <div class="card-title">
            Automatically accept applications
          </div>
          <div class="card-icon">
            <img src={bookings} alt="" />
          </div>
          <div class="card-footer">
            Get notified of new reservations.
          </div>
        </div>
        <div class="card pointer">
          <div class="card-title">
            Manage payments better
          </div>
          <div class="card-icon">
            <img src={payment} alt="" />
          </div>
          <div class="card-footer">
            Customers can book for your event hall and make payment safely.
          </div>
        </div>
        <div class="card pointer">
          <div class="card-title">
            Avoid double booking
          </div>
          <div class="card-icon">
            <img src={bookmarks} alt="" />
          </div>
          <div class="card-footer">
            Bookings automatically shows only available event halls.
          </div>
        </div>
      </div>
  )
}

export default Services;
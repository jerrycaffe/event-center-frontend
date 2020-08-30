import React from "react";

import bookingIcon from "../../images/bookingIcon.png";
import closeBtn from "../../images/closeBtn.png";
import horizontalNavCardPay from "../../images/horizontalNavCardPay.png";
import activeCircle from "../../images/activeCircle.png";
import inActiveCircle from "../../images/inactiveCirlcle.png";
import verve from "../../images/verve.png";
import masterCard from "../../images/masterCard.png";
import visa from "../../images/visa.png";

const CardPaymentModal = props => {
  const {
  
    isCardPaymentToggled,

    closeAllModal
  } = props;
  if (isCardPaymentToggled) {
    return (
      <div className="booking-container">
        <div className="booking-modal">
          <div className="booking-header">
            <div className="booking-title">
              <img src={bookingIcon} alt="create booking icon" />
              <p className="booking-title-txt">NEW BOOKING</p>
            </div>
            <img
              src={closeBtn}
              alt=""
              className="pointer"
              onClick={closeAllModal}
            />
          </div>
          <div className="booking-body">
            <div className="book-event-first">
              <div className="booking-nav">
                <p className="nav-body">
                  Booking <span> Details</span>
                </p>
                <p>Payment</p>
              </div>
              <div className="nav-indicator">
                {/* <img
                  className="m-display-none d-flex"
                  src={verticalNavigator}
                  alt="vertical navigation"
                /> */}
                <img
                  className="d-display-none"
                  src={horizontalNavCardPay}
                  alt="horizontal navigation"
                />
              </div>
            </div>
            <div>
              <div className="payment-section">
                <p className="payment-section-title">PAYMENT METHOD</p>
                <div className="payment-options">
                  <div className="card-payment">
                    <img
                      className="img-sm-width"
                      src={activeCircle}
                      alt="card payment option"
                    />
                    Card Payment
                  </div>
                  <div className="bank-payment">
                    <img
                      className="img-sm-width"
                      src={inActiveCircle}
                      alt="bank payment option"
                    />
                    Bank Payment
                  </div>
                </div>
                <div className="card-service">
                  <div className="atm-card">
                    <img src={visa} alt="visa atm card" />
                  </div>
                  <div className="atm-card">
                    <img src={masterCard} alt="master card atm" />
                  </div>
                  <div className="atm-card">
                    <img src={verve} alt="verve atm card" />
                  </div>
                </div>
              </div>

              <form className="book-event">
                <div className="label-date">
                  <label htmlFor="date-time">Date &amp; Time *</label>
                </div>
                <div className="group-list book-date-time">
                  <input className="booking-date" type="text" />
                  <div className="booking-time">
                    <input
                      className="booking-from"
                      type="text"
                      placeholder="booking-from"
                    />
                    <input
                      className="booking-to"
                      type="text"
                      placeholder="booking-to"
                    />
                  </div>
                </div>
                <div className="book-name-email">
                  <div className="group-list">
                    <div>
                      <label htmlFor="fullname">Full Name *</label>
                    </div>
                    <input type="text" />
                  </div>
                  <div className="group-list">
                    <div>
                      <label htmlFor="email">Email *</label>
                    </div>
                    <input type="email" />
                  </div>
                </div>
                <div className="group-list">
                  <div>
                    <label htmlFor="booking-title">Booking Title *</label>
                  </div>
                  <input type="text" placeholder="Wedding Reception" />
                </div>
                <div className="group-list">
                  <div>
                    <label htmlFor="additional-info">
                      Additional Information *
                    </label>
                  </div>
                  <input type="textarea" placeholder="Type here" />
                </div>
              </form>
              {/* <div className="booking-info">
                <div className="booking-fee">
                  <p>BOOKING FEE</p>
                  <p className="booking-amount">N{amount}</p>
                </div>
                <div className="note">
                  <p>NOTE</p>
                  <p className="note-info">
                    APPROVAL of your booking is subject to payment either by
                    CARD or BANK, otherwise it will remain PENDING for 7 DAYS
                    before it will be DELETED.
                  </p>
                </div>
              </div> */}

              <div className="payment-btn">
                <button className="pay-later-btn pointer">Pay Later</button>
                <button className="pay-now-btn pointer">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default CardPaymentModal;

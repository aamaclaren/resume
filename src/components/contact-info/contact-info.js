import React, { Component } from 'react';
import ContactInfoData from './contact-info-data.json';
import './contact-info.css';

class ContactInfo extends Component {
  render() {
    return (
        <div className="contact-info">
            <p className="contact-info-item name">{ContactInfoData.fullName}</p>
            <p className="contact-info-item email">{ContactInfoData.email}</p>
            <p className="contact-info-item mobile">{ContactInfoData.mobile}</p>
            <p className="contact-info-item repo">
              <a href={ContactInfoData.repository} target="_blank">{ContactInfoData.repository}</a>
            </p>
        </div>
    );
  }
}

export default ContactInfo;

import React, { Component } from 'react';
import Section from '../section/section';
import ContactInfoData from './contact-info-data.json';
import './contact-info.css';

class ContactInfo extends Component {
  render() {
    return (
      <Section sectionName="contact-info">
        <div className="contact-info">
            <p className="contact-info-item name">{ContactInfoData.fullName}</p>
            <p className="contact-info-item email">{ContactInfoData.email}</p>
            <p className="contact-info-item mobile">{ContactInfoData.mobile}</p>
            <p className="contact-info-item repo">
              <a href={ContactInfoData.repository} target="_blank">{ContactInfoData.repository}</a>
            </p>
        </div>
      </Section>
    );
  }
}

export default ContactInfo;

import React, { Component } from 'react';
import Section from '../section/section';
import ContactInfoData from './contact-info-data.json';
import './contact-info.css';


class ContactInfo extends Component {
  render() {
    return (
      <Section sectionName="contact-info">
        <div className="contact-info-container">
            <div className="contact-info-item contact-name">{ContactInfoData.name}</div>
            <div className="contact-info-item contact-email">{ContactInfoData.email}</div>
            <div className="contact-info-item contact-mobile">{ContactInfoData.mobile}</div>
            <div className="contact-info-item contact-portfolio">
              <a href={ContactInfoData.portfolio} target="_blank">{ContactInfoData.portfolio}</a>
            </div>
        </div>
      </Section>
    );
  }
}

export default ContactInfo;

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../data/siteData';

export default function Contact() {
  return (
    <div style={{padding: '40px 20px', maxWidth: '800px', margin: '0 auto'}}>
      <h1 style={{color: '#d32f2f', textAlign: 'center', marginBottom: '40px'}}>Contact Us</h1>
      
      <div style={{display: 'grid', gap: '20px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <Phone size={24} color="#d32f2f" />
          <div>
            <strong>Phone:</strong> {contactInfo.phone}
          </div>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <Mail size={24} color="#d32f2f" />
          <div>
            <strong>Email:</strong> {contactInfo.email}
          </div>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <MapPin size={24} color="#d32f2f" />
          <div>
            <strong>Address:</strong> {contactInfo.address}
          </div>
        </div>
        
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <Clock size={24} color="#d32f2f" />
          <div>
            <strong>Hours:</strong> {contactInfo.hours}
          </div>
        </div>
      </div>
    </div>
  );
}
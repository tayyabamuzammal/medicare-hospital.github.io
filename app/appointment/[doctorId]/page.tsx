"use client"
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const doctors = [
  {id: 1, name: "Dr. Ahmed Khan", category: "Cardiologist", time: "Mon-Fri 9AM-2PM"},
  {id: 2, name: "Dr. Sara Ali", category: "Neurologist", time: "Tue-Sat 10AM-4PM"},
  {id: 3, name: "Dr. Bilal Ahmed", category: "Orthopedic", time: "Mon-Wed-Fri 2PM-6PM"},
  {id: 4, name: "Dr. Fatima Noor", category: "Pediatrician", time: "Daily 10AM-5PM"},
  {id: 5, name: "Dr. Usman Malik", category: "Gastroenterologist", time: "Tue-Thu-Sat 11AM-4PM"},
  {id: 6, name: "Dr. Ayesha Khan", category: "Dermatologist", time: "Mon-Fri 1PM-7PM"},
  {id: 7, name: "Dr. Hassan Raza", category: "Cardiologist", time: "Tue-Thu 9AM-1PM"},
  {id: 8, name: "Dr. Zainab Ali", category: "Neurologist", time: "Mon-Wed 3PM-7PM"},
  {id: 9, name: "Dr. Omar Farooq", category: "Orthopedic", time: "Daily 9AM-3PM"},
  {id: 10, name: "Dr. Maryam Siddiqui", category: "Pediatrician", time: "Tue-Sat 2PM-8PM"},
  {id: 11, name: "Dr. Ali Hassan", category: "Gastroenterologist", time: "Mon-Fri 10AM-4PM"},
  {id: 12, name: "Dr. Sana Iqbal", category: "Dermatologist", time: "Wed-Fri-Sun 12PM-6PM"},
  {id: 13, name: "Dr. Kamran Shah", category: "Cardiologist", time: "Daily 2PM-8PM"},
  {id: 14, name: "Dr. Nimra Khan", category: "Neurologist", time: "Mon-Thu 10AM-4PM"},
  {id: 15, name: "Dr. Talha Ahmed", category: "Orthopedic", time: "Tue-Fri 1PM-7PM"},
  {id: 16, name: "Dr. Hina Malik", category: "Pediatrician", time: "Mon-Wed-Fri 9AM-2PM"},
  {id: 17, name: "Dr. Imran Qureshi", category: "Gastroenterologist", time: "Daily 3PM-9PM"},
  {id: 18, name: "Dr. Rabia Noor", category: "Dermatologist", time: "Tue-Thu-Sat 10AM-5PM"},
  {id: 19, name: "Dr. Farhan Ali", category: "Cardiologist", time: "Mon-Fri 11AM-5PM"},
  {id: 20, name: "Dr. Mahnoor Siddiqui", category: "Dentist", time: "Mon-Fri 9AM-5PM"}
];

export default function Appointment() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const doctorId = searchParams.get('doctorId');
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(doctorId || '');

  const doctor = doctors.find(d => d.id == selectedDoc);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!selectedDoc || !name || !phone) {
      alert('Please fill all fields');
      return;
    }
    router.push('/booking-success');
  };

  return (
    <div style={{padding: '40px 20px', maxWidth: '600px', margin: '0 auto'}}>
      
      <h1 style={{background: '#d32f2f', color: 'white', padding: '20px', textAlign: 'center', borderRadius: '8px'}}>
        Book Appointment
      </h1>

      <form onSubmit={handleSubmit} style={{background: 'white', padding: '30px', borderRadius: '12px', marginTop: '30px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)'}}>
        
        <label style={{display: 'block', marginBottom: '15px'}}>
          <strong>Select Doctor:</strong>
          <select 
            value={selectedDoc} 
            onChange={(e) => setSelectedDoc(e.target.value)}
            required
            style={{width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc'}}
          >
            <option value="">-- Choose Doctor --</option>
            {doctors.map(d => (
              <option key={d.id} value={d.id}>{d.name} - {d.category}</option>
            ))}
          </select>
        </label>

        {doctor && (
          <div style={{background: '#f5f5f5', padding: '15px', borderRadius: '6px', marginBottom: '20px'}}>
            <p style={{margin: 0}}><strong>Doctor:</strong> {doctor.name}</p>
            <p style={{margin: '5px 0 0 0'}}><strong>Category:</strong> {doctor.category}</p>
            <p style={{margin: '5px 0 0 0'}}><strong>Timing:</strong> {doctor.time}</p>
          </div>
        )}

        <label style={{display: 'block', marginBottom: '15px'}}>
          <strong>Your Name:</strong>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
            style={{width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc'}}
          />
        </label>

        <label style={{display: 'block', marginBottom: '20px'}}>
          <strong>Phone Number:</strong>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="03XX-XXXXXXX"
            style={{width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc'}}
          />
        </label>

        <button type="submit" style={{
          background: '#d32f2f', 
          color: 'white', 
          border: 'none', 
          padding: '12px', 
          borderRadius: '6px', 
          cursor: 'pointer',
          width: '100%',
          fontSize: '16px',
          fontWeight: '600'
        }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
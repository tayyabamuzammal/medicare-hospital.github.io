"use client";
import { useState } from 'react';
import DoctorCard from '../components/DoctorCard';

const doctorsData = [
  {
    id: 1,
    name: "Dr. Ahmed Khan",
    category: "Cardiologist",
    bio: "15+ years experience in cardiac surgery. Specialized in angioplasty and bypass surgery. 500+ successful operations.",
    time: "Mon - Fri: 9:00 AM - 5:00 PM"
  },
  {
    id: 2,
    name: "Dr. Fatima Ali",
    category: "Neurologist",
    bio: "Expert in stroke treatment and epilepsy management. MBBS, FCPS Neurology. Research published in 10+ journals.",
    time: "Tue - Sat: 10:00 AM - 6:00 PM"
  },
  {
    id: 3,
    name: "Dr. Usman Raza",
    category: "Orthopedic",
    bio: "Joint replacement specialist. Advanced knee and hip surgery. Sports injury treatment expert.",
    time: "Mon - Thu: 11:00 AM - 7:00 PM"
  },
  {
    id: 4,
    name: "Dr. Ayesha Malik",
    category: "Pediatrician",
    bio: "Child specialist with focus on newborn care. 12 years experience. Vaccination and growth monitoring expert.",
    time: "Daily: 9:00 AM - 3:00 PM"
  },
  {
    id: 5,
    name: "Dr. Bilal Hassan",
    category: "Dermatologist",
    bio: "Skin and hair specialist. Acne, eczema, and cosmetic dermatology expert. Laser treatment available.",
    time: "Wed - Sun: 2:00 PM - 8:00 PM"
  },
  {
    id: 6,
    name: "Dr. Sana Sheikh",
    category: "Gynecologist",
    bio: "Women's health specialist. Pregnancy care, fertility treatment, and minimally invasive surgery expert.",
    time: "Mon - Sat: 12:00 PM - 8:00 PM"
  }
];

export default function FindDoctor() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Cardiologist", "Neurologist", "Orthopedic", "Pediatrician", "Dermatologist", "Gynecologist"];

  const filteredDoctors = selectedCategory === "All" 
    ? doctorsData 
    : doctorsData.filter(doc => doc.category === selectedCategory);

  return (
    <div style={{padding: '40px 20px', maxWidth: '1200px', margin: '0 auto'}}>
      <h1 style={{color: '#d32f2f', textAlign: 'center', marginBottom: '30px'}}>Find Your Doctor</h1>
      
      <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px'}}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              border: '2px solid #d32f2f',
              background: selectedCategory === cat ? '#d32f2f' : 'white',
              color: selectedCategory === cat ? 'white' : '#d32f2f',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
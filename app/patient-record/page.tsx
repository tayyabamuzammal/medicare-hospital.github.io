"use client";
import { useState, useEffect } from 'react';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  disease: string;
  phone: string;
  date: string;
  status: string;
}

const diseases = ["Fever", "Diabetes", "Hypertension", "Asthma", "Migraine", "Arthritis", "Typhoid", "Malaria"];

export default function PatientRecord() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        // 10 users hain API me, unko 10 baar repeat karke 100 bana dete hain
        const allPatients: Patient[] = [];
        
        for(let i = 0; i < 10; i++) {
          data.forEach((user: any, idx: number) => {
            allPatients.push({
              id: i * 10 + idx + 1,
              name: user.name,
              age: 18 + Math.floor(Math.random() * 50),
              gender: idx % 2 === 0 ? "Male" : "Female",
              disease: diseases[Math.floor(Math.random() * diseases.length)],
              phone: user.phone,
              date: `2026-04-${String(1 + Math.floor(Math.random() * 28)).padStart(2, '0')}`,
              status: Math.random() > 0.5 ? "Admitted" : "Discharged"
            });
          });
        }
        setPatients(allPatients);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.disease.toLowerCase().includes(search.toLowerCase())
  );

  if(loading) {
    return <div style={{textAlign: 'center', padding: '100px', color: '#d32f2f'}}>Loading patients...</div>
  }

  return (
    <div style={{padding: '40px 20px', maxWidth: '1200px', margin: '0 auto'}}>
      <h1 style={{color: '#d32f2f', textAlign: 'center', marginBottom: '10px'}}>Patient Records</h1>
      <p style={{textAlign: 'center', color: '#666', marginBottom: '30px'}}>Total: {patients.length} Patients | API se live data</p>
      
      <input
        type="text"
        placeholder="Search by name or disease..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: '2px solid #ddd',
          marginBottom: '20px',
          fontSize: '16px'
        }}
      />

      <div style={{overflowX: 'auto'}}>
        <table style={{width: '100%', borderCollapse: 'collapse', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
          <thead>
            <tr style={{background: '#d32f2f', color: 'white'}}>
              <th style={{padding: '12px', textAlign: 'left'}}>ID</th>
              <th style={{padding: '12px', textAlign: 'left'}}>Name</th>
              <th style={{padding: '12px', textAlign: 'left'}}>Age</th>
              <th style={{padding: '12px', textAlign: 'left'}}>Gender</th>
              <th style={{padding: '12px', textAlign: 'left'}}>Disease</th>
              <th style={{padding: '12px', textAlign: 'left'}}>Phone</th>
              <th style={{padding: '12px', textAlign: 'left'}}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map(patient => (
              <tr key={patient.id} style={{borderBottom: '1px solid #eee'}}>
                <td style={{padding: '12px'}}>{patient.id}</td>
                <td style={{padding: '12px', fontWeight: 'bold'}}>{patient.name}</td>
                <td style={{padding: '12px'}}>{patient.age}</td>
                <td style={{padding: '12px'}}>{patient.gender}</td>
                <td style={{padding: '12px'}}>{patient.disease}</td>
                <td style={{padding: '12px', fontSize: '13px'}}>{patient.phone}</td>
                <td style={{padding: '12px'}}>
                  <span style={{
                    padding: '5px 10px',
                    borderRadius: '15px',
                    background: patient.status === "Admitted" ? '#ffeb3b' : '#4caf50',
                    color: patient.status === "Admitted" ? 'black' : 'white',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
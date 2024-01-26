// JobApplicationForm.js
import React, { useState } from 'react';
import { firestore } from '../firebase'; // Import firestore

const JobApplicationForm = ({ jobId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');

  const handleApply = async () => {
    try {
      await firestore.collection('jobApplications').add({
        jobId,
        name,
        email,
        resume,
      });
    } catch (error) {
      console.error('Error submitting job application:', error);
    }
  };

  return (
    <div>
      <h2>Job Application</h2>
      <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
      <textarea placeholder="Your Resume" onChange={(e) => setResume(e.target.value)} />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default JobApplicationForm;

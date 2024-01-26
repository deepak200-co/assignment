// Import necessary modules
import React, { useState } from 'react';
import { firestore } from '../firebase';
import './JobListing.css'

const JobListingCreation = ({ user }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleCreateListing = async () => {
    try {
      await firestore.collection('jobListings').add({
        title,
        description,
        requirements,
        createdBy: user.uid,
      });
    } catch (error) {
      console.error('Error creating job listing:', error);
    }
  };

  return (
    <div>
      <h2>Create Job Listing</h2>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Requirements" onChange={(e) => setRequirements(e.target.value)} />
      <button onClick={handleCreateListing}>Create Listing</button>
    </div>
  );
};

export default JobListingCreation;

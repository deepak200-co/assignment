// JobDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase'; 
import {auth} from '../firebase'; 
import { Link } from 'react-router-dom';

const JobDetails = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const jobDetailsSnapshot = await firestore.collection('jobListings').doc(jobId).get();

          if (jobDetailsSnapshot.exists) {
            setJobDetails(jobDetailsSnapshot.data());
          } else {
            console.log('Job not found');
            
          }
        } else {
          console.error('User not authenticated');
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  return (
    <div>
      <h2>Job Details</h2>
      {jobDetails ? (
        <div>
          <h3>{jobDetails.title}</h3>
          <p>{jobDetails.description}</p>
          <p>{jobDetails.requirments} </p>
          <Link to={`/apply/${jobId}`}>Apply for this Job</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetails;

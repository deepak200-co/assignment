// ResponsesManagement.js
import React, { useEffect, useState } from 'react';
import { firestore, auth } from './firebase'; // Import firestore and auth
import { Link } from 'react-router-dom';

const ResponsesManagement = ({ jobId }) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const responsesSnapshot = await firestore
            .collection('jobApplications')
            .where('jobId', '==', jobId)
            .get();

          const responsesData = responsesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setResponses(responsesData);
        } else {
          console.error('User not authenticated');
          // Handle the case where the user is not authenticated
        }
      } catch (error) {
        console.error('Error fetching responses:', error);
      }
    };

    fetchResponses();
  }, [jobId]);

  return (
    <div>
      <h2>Responses for Job {jobId}</h2>
      <ul>
        {responses.map((response) => (
          <li key={response.id}>
            <p>Name: {response.name}</p>
            <p>Email: {response.email}</p>
            <p>Resume: {response.resume}</p>
            <Link to={`/responses/${jobId}`}>Manage Responses</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsesManagement;

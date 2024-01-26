import React, { useEffect, useState } from 'react';
import { firestore, auth } from './firebase';

const NotificationHistory = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const user = auth.currentUser;

        if (user) {
            const unsubscribe = firestore
                .collection('notifications')
                .where('userId', '==', user.uid)
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    const newNotifications = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setNotifications(newNotifications);
                });

            return () => unsubscribe();
        }
    }, []);

    return (
        <div>
            <h2>Notification History</h2>
            <ul>
                {notifications.map((notification) => (
                    <li key={notification.id}>
                        <p>{notification.jobTitle}</p>
                        <p>{notification.applicantName}</p>
                        <p>{notification.timestamp.toDate().toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationHistory;

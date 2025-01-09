import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    // Fetch notifications from backend or any event API
    fetch('/api/notifications')
      .then(response => response.json())
      .then(data => setNotifications(data));
  }, []);

  return (
    <div className="notifications">
      <h2>Latest Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <div key={index}>
            <p>{notification.message}</p>
            <small>{notification.date}</small>
          </div>
        ))
      ) : (
        <p>No notifications available</p>
      )}
    </div>
  );
};

export default Notifications;

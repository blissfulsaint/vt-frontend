// src/components/UserInformation.tsx
import React, { useState } from 'react';

const UserInformation: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isInfoVisible, setInfoVisible] = useState(false);

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/awesome/applicant');
      const data = await response.json();
      setUserData(data);
      setInfoVisible(!isInfoVisible); // Toggle visibility
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  return (
    <div className='UserInformation'>
      <div className="button-container" onClick={handleClick}>
        <div className="image-overlay">
          <img
            src="/brandon.jpg" // Path to the image in the public directory
            alt="Brandon's Picture"
            style={{ cursor: 'pointer' }}
          />
          <button className="info-button">
            {isInfoVisible ? 'Remove Information' : 'Get Information'}
          </button>
        </div>
      </div>
      {isInfoVisible && userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Hobbies: {userData.hobbies.join(', ')}</p>
          <p>Coding Languages: {userData.codingLanguages.join(', ')}</p>
          <p>Additional Info: {userData.additionalInfo}</p>
        </div>
      )}
    </div>
  );
};

export default UserInformation;

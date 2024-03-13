import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import StoryDetails from './StoryDetails';
import './CardView.css'; // Import the CSS file

const CardView = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://child.onrender.com/api/sciencefiction');
      const data = await response.json(); 
      console.log(data);
      setStories(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };  

  console.log(stories);

  // Function to chunk array into rows of size 3
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const rows = chunkArray(stories, 3);

  return ( 
    <>
      <h4>Science Fiction Stories</h4>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="full-screen-row">
          {row.map((story, index) => (
            <div key={index} className="full-screen-container">
              <StoryDetails title={story.Title} img={story.Image} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default CardView;

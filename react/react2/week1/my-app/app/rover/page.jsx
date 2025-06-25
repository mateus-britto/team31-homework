// React 2 - Week 1

// 2. Dynamic Rendering with useEffect

"use client";

import React, { useEffect, useState } from "react";

export default function RoverPhotos() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from the nasa api using useEffect
  useEffect(() => {
    async function fetchRoverPhotos() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch MARS HOVER data.");
        }

        const result = await response.json();
        setData(result.photos);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchRoverPhotos();

    // Handle component unmount
    return () => {
      // This cleanup function runs when the component is removed from the DOM.
      // Since the dependency array is empty, the effect runs only once on mount,
      // and this cleanup function will not handle dependency updates.
      console.log("Component unmounted");
    };
  }, []);

return (
    // Display the fetched photos and captions in the component
     <>
        {data.map((photo) => (
            <div key={photo.id} style={{ width: "400px", padding: "10px" }}>
                <img src={photo.img_src} alt="hover photo" style={{ maxWidth: "100%" }} />
                <p style={{ fontSize: "24px"}}>{photo.camera.full_name}</p>
            </div>
        ))}
    </>
);
}

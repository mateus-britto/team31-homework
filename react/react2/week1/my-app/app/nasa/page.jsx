// React 2 - Week 1

//1. Create a page that renders the NASA Astronomy Picture of the Day (with caption) using Server Side Rendering

import React from "react";
async function fetchPictureData() {
  const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    // Fetch data from the NASA API

    if (!response.ok) {
      throw new Error("Failed to fetch data from the NASA API");
    }

    return response.json();
  } catch (error) {
    console.log("Error: ", error);
  }
}

export default async function PictureOfTheDay() {
  const pictureData = await fetchPictureData();
  // Store the data in a separate variable to render the data

  if (!pictureData) {
    return <h1>Error fetching NASA picture of the day</h1>;
  }

  return (
    <>
      {/* Render the data */}
      <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontSize: "2rem" }}>{pictureData.title}</h1>
        <img
          src={pictureData.url}
          alt="picture of the day"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
        <p style={{ fontSize: "1rem" }}>{pictureData.explanation}</p>
      </div>
    </>
  );
}

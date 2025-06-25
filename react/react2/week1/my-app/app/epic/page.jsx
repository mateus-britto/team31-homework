// React 2 - Week 1

// Create a page that displays a NASA EPIC image on a different date depending on a query string parameter received

"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function EpicImage() {
  // Access the query string parameter using useSearchParams
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  const [imgUrl, setImgUrl] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchImage() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
        // Use the NASA API to fetch EPIC images
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch NASA data");
        }

        const data = await response.json();
        if (data.length === 0) throw new Error("No images found for this date");

        // Create the image from the data
        const image = data[0].image;
        // Format the date to be used in the URL
        const formattedDate = date.split("-");
        // Defines the URL based on the image and formattedDate variables
        const url = `https://api.nasa.gov/EPIC/archive/natural/${formattedDate[0]}/${formattedDate[1]}/${formattedDate[2]}/png/${image}.png?api_key=${apiKey}`;

        setImgUrl(url);
        console.log(formattedDate);
      } catch (error) {
        setError(error.message);
        setImgUrl(null);
      } finally {
        setLoading(false) // Set loading to false when the fetch completes
      }
    }
    fetchImage();
  }, [date]);

  if (!date) return <p>Please provide a specific date like: ?date=YYYY-MM-DD</p>;
  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading image for {date}...</p>;

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>NASA EPIC Image for {date}</h1>
        <img src={imgUrl} alt={`EPIC ${date}`} style={{ maxWidth: "100%" }} />
      </div>
    </>
  );
}

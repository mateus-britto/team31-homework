// React 2 - Week 2

// 5. Create a Form with Focus Management

"use client"

import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter(); // For redirecting after form submission

  // Refs for managing focus
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // State for form validation
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic (created with Copilot)
    const newErrors = {};
    if (!firstNameRef.current.value) newErrors.firstName = "First name is required";
    if (!lastNameRef.current.value) newErrors.lastName = "Last name is required";
    if (!emailRef.current.value || !/\S+@\S+\.\S+/.test(emailRef.current.value))
      newErrors.email = "Valid email is required";
    if (!phoneRef.current.value || !/^\d{8}$/.test(phoneRef.current.value))
      newErrors.phone = "Valid phone number is required";

    setErrors(newErrors);

    // If no errors, redirect to home page
    if (Object.keys(newErrors).length === 0) {
      router.push("/home");
    }
  };

  const handleFocusNext = (currentRef, nextRef) => {
    if (currentRef.current.value) {
      nextRef.current.focus();
    }
  };

  return (
    <Box sx={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", textAlign: "center" }}>
        Sign Up Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          ref={firstNameRef}
          type="text"
          onBlur={() => handleFocusNext(firstNameRef, lastNameRef)}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            borderColor: errors.firstName ? "red" : "initial",
          }}
        />
        {errors.firstName && <Typography color="error">{errors.firstName}</Typography>}

        {/* Last Name */}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          ref={lastNameRef}
          type="text"
          onBlur={() => handleFocusNext(lastNameRef, emailRef)}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            borderColor: errors.lastName ? "red" : "initial",
          }}
        />
        {errors.lastName && <Typography color="error">{errors.lastName}</Typography>}

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          ref={emailRef}
          type="email"
          onBlur={() => handleFocusNext(emailRef, phoneRef)}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            borderColor: errors.email ? "red" : "initial",
          }}
        />
        {errors.email && <Typography color="error">{errors.email}</Typography>}

        {/* Phone Number */}
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          ref={phoneRef}
          type="text"
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            borderColor: errors.phone ? "red" : "initial",
          }}
        />
        {errors.phone && <Typography color="error">{errors.phone}</Typography>}

        {/* Submit Button */}
        <Button type="submit" variant="contained" sx={{ marginTop: "20px", width: "100%" }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

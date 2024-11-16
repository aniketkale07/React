import { useState } from "react";

export default function FormValidation() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  // regex for email 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Please enter your name";
      isValid = false;
    }else if(!usernameRegex.test(username)){
      newErrors.username = "Username should be alphanumeric and 3-16 characters long";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email";
      isValid = false;
    }else if(!emailRegex.test(email)){
      newErrors.email = "Invalid email";
    }

    if (!password.trim()) {
      newErrors.password = "Please enter your password";
      isValid = false;
    }else if(!passwordRegex.test(password)){
      newErrors.password="Password can;t Match";
      isValid=false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const newSubmittedData = {
        username,
        email,
        password,
      };
      setSubmittedData(newSubmittedData); // Correctly set submitted data
      console.log("Submitted Data: ", newSubmittedData);
    }
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </>
  );
}

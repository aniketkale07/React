import React, { useState } from "react";
import "./App.css"; // 

export default function MyForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    });

const [submittedData, setSubmittedData]=useState(null);

    // Handle input changes for all fields
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: fieldValue
        });
        
    };

    // Handle form submission
    const submitForm = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData); // Log form data to console
        setSubmittedData(formData);
    };

    // display the User details which is logged in Form
const displayUser=()=>{
    if(setFormData){
console.log(formData.username);
console.log(formData.email);
console.log(formData.password);
console.log(formData.role);
    }
}
    return (
        <>
            <h3>Form Using React</h3>
            <form onSubmit={submitForm} className="border">
                <div>
                    <label htmlFor="username" className="pr-5">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        value={formData.username}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="pr-5">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="pr-5">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
                <div>
                    <label htmlFor="role" className="pr-5">Role</label>
                    <select
                        name="role"
                        id="role"
                        onChange={handleChange}
                        value={formData.role}
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>
                <button type="submit" className="border p-1 fw-bold">Submit</button>
            </form>

            <br />
                {/* <button onClick={displayUser} type="" className="border p-1 fw-bold">display User</button> */}
            
            {submittedData && (
                <div className="submitted-Data">
<h4>User Information     </h4>
<p><strong>Username :</strong>{submittedData.username}</p>
<p> <strong>Email :</strong> {submittedData.email}</p>
<p> <strong>Password</strong> {submittedData.password}</p>
<p> <strong>Role :</strong> {submittedData.role}</p>
                </div>
            )}
        </>
    );
}

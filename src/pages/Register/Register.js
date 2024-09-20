import React from "react";
import "./Register.css";
import backgroundImage from '../../assets/design5.jpg';  // Adjust the path as needed

const Register = () => {
    return (
        <div
            className="register-container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                minHeight: '90vh',
            }}
        >
            <div className="register-box">
                <h2>Register</h2>
                <form>
                    <div className="input-field">
                        <input type="text" placeholder="Fullname" required />
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Confirm Password" required />
                    </div>
                    <button type="submit" className="register-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;

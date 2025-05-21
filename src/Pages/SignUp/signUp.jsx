import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaLock, FaUser } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Navlanding from '../../components/Navlanding';
import Footerlanding from '../../components/footerlanding';
import FooterLight from '../../components/footer-light';

const SignUp = () => {
    const [successMessage, setSuccessMessage] = useState(""); // State for success message
    const [errorMessage, setErrorMessage] = useState(""); // State for a single error message
    const navigate = useNavigate(); // Hook for navigation

    // Form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        country: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Validation logic
        if (!formData.firstName) {
            showError("First name is required");
            return;
        }
        if (!formData.lastName) {
            showError("Last name is required");
            return;
        }
        if (!formData.email) {
            showError("Email is required");
            return;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            showError("Invalid email format");
            return;
        }
        if (!formData.dateOfBirth) {
            showError("Date of birth is required");
            return;
        }
        if (!formData.country) {
            showError("Country is required");
            return;
        }
        if (!formData.password) {
            showError("Password is required");
            return;
        }
        if (!formData.confirmPassword) {
            showError("Confirm password is required");
            return;
        } else if (formData.password !== formData.confirmPassword) {
            showError("Passwords do not match");
            return;
        }
        if (!formData.termsAccepted) {
            showError("You must accept the terms and conditions");
            return;
        }

        // Clear error message if all validations pass
        setErrorMessage("");

        // try {
        //     const response = await fetch('/api/auth/register', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     const data = await response.json();

        //     if (!response.ok) {
        //         showError(data.message || 'Registration failed');
        //         return;
        //     }

        //     showSuccess('Account Created Successfully');
        //     setTimeout(() => {
        //         navigate('/login');
        //     }, 2000);
        // } catch (error) {
        //     showError('An error occurred. Please try again.');
        // }
    };

    // Function to show error message and auto-clear it
    const showError = (message) => {
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage("");
        }, 3000); // Clear after 3 seconds
    };

    // Function to show success message and auto-clear it
    const showSuccess = (message) => {
        setSuccessMessage(message);
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000); // Clear after 3 seconds
    };

    return (
        <>
            <div>
                <Navlanding />

                {/* Success Message */}
                {successMessage && (
                    <div className="absolute fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
                        {successMessage}
                    </div>
                )}

                {/* Error Message */}
                {errorMessage && (
                    <div className="absolute fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md">
                        {errorMessage}
                    </div>
                )}

                {/* Hero Section */}
                <section className="bg-blue-100 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-around px-4 py-8 md:py-0 gap-8 md:gap-0">
                    <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] order-2 md:order-1">
                        {/* Background shape */}
                        <img
                            src="/src/assets/blueshit.png"
                            alt="Background shape"
                            className="absolute w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] -bottom-7 -left-10 z-0 opacity-80"
                        />

                        {/* Main image */}
                        <img
                            src="/src/assets/girlwrites.png"
                            alt="Main"
                            className="relative z-10 w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className='text-center md:text-right z-20 order-1 md:order-2 mb-6 md:mb-0'>
                        <h1 className='text-2xl sm:text-3xl font-bold text-blue-900 mb-2'>
                            Register Now
                        </h1>
                        <p className='text-sm sm:text-base text-gray-700'>
                            Learn at your own pace, gain valuable skills and accessible <br className="hidden sm:block" />
                            to everyone. Don't miss this opportunity. <br className="hidden sm:block" />
                            Start today!
                        </p>
                    </div>
                </section>

                {/* Form Section */}
                <section className='flex flex-col lg:flex-row justify-center lg:justify-around items-center bg-blue-100 gap-8 px-4 py-10'>
                    {/* Left Column - Logo and Info */}
                    <div className="flex flex-col gap-4 items-center text-center max-w-xs mb-6 lg:mb-0">
                        <div>
                            <img src="/src/assets/small-logo.png" alt="BrainThrust Logo" className="w-32 md:w-40" />
                        </div>
                        <div>
                            <h2 className="text-sm md:text-base font-medium">Join BrainThrust E-Learning and unlock your learning potential!</h2>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm">Log in to BrainThrust E-Learning to get started!</p>
                        </div>

                        <div>
                            <p className="text-xs md:text-sm">
                                By signing up for BrainThrust E-Learning, you agree to our{" "}
                                <Link className="text-red-400">Terms of use</Link> and{" "}
                                <Link className="text-red-400">Privacy Policy</Link>
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <form onSubmit={handleSignUp} className="w-full max-w-md">
                        <div className='py-8 px-4 sm:px-6 space-y-4 bg-blue-400 rounded-md shadow-md'>
                            <h1 className='text-xl font-bold mb-4 text-blue-900'>
                                Register Here
                            </h1>

                            {/* Name Fields */}
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                    <div className='flex items-center bg-blue-100 rounded-md p-1'>
                                        <FiUser className='text-gray-500 ml-2' />
                                        <input
                                            type="text"
                                            id='firstName'
                                            name='firstName'
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className='bg-blue-100 p-2 rounded-md w-full outline-none'
                                        />
                                    </div>
                                </div>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                    <div className='flex items-center bg-blue-100 rounded-md p-1'>
                                        <FiUser className='text-gray-500 ml-2' />
                                        <input
                                            type="text"
                                            id='lastName'
                                            name='lastName'
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className='bg-blue-100 p-2 rounded-md w-full outline-none'
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <div className='flex items-center bg-blue-100 rounded-md p-1'>
                                    <CiMail className='text-gray-500 ml-2' />
                                    <input
                                        type="email"
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='bg-blue-100 p-2 rounded-md w-full outline-none'
                                    />
                                </div>
                            </div>

                            {/* Date of Birth and Country */}
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <label htmlFor="dateOfBirth" className="text-sm font-medium">Date Of Birth</label>
                                    <input
                                        type="date"
                                        id='dateOfBirth'
                                        name='dateOfBirth'
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        className='bg-blue-100 p-2 rounded-md w-full outline-none'
                                    />
                                    {formData.dateOfBirth && (
                                        <small className="text-gray-700 mt-1">
                                            Selected Date: {new Date(formData.dateOfBirth).toLocaleDateString()}
                                        </small>
                                    )}
                                </div>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <label htmlFor="country" className="text-sm font-medium">Country</label>
                                    <select
                                        name="country"
                                        id="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className='bg-blue-100 p-2 rounded-md w-full outline-none'
                                    >
                                        <option value="">Select Country</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Senegal">Senegal</option>
                                    </select>
                                </div>
                            </div>

                            {/* Password Fields */}
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="password" className="text-sm font-medium">Password</label>
                                <div className='flex items-center bg-blue-100 rounded-md p-1'>
                                    <FaLock className='text-gray-500 ml-2' />
                                    <input
                                        type="password"
                                        id='password'
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        className='bg-blue-100 p-2 rounded-md w-full outline-none'
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</label>
                                <div className='flex items-center bg-blue-100 rounded-md p-1'>
                                    <FaLock className='text-gray-500 ml-2' />
                                    <input
                                        type="password"
                                        id='confirmPassword'
                                        name='confirmPassword'
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className='bg-blue-100 p-2 rounded-md w-full outline-none'
                                    />
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <div className='flex items-start gap-2 mt-4'>
                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    id="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    className="mt-1"
                                />
                                <label htmlFor="termsAccepted" className="text-xs sm:text-sm">
                                    I agree to the <Link className='text-red-400'>Terms of use</Link> and <Link className='text-red-400'>Privacy Policy</Link>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className='mt-6'>
                                <button
                                    type="submit"
                                    className='bg-blue-900 text-white p-2 rounded-md w-full hover:bg-blue-800 transition duration-300 font-medium'
                                >
                                    Create Account
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
                <Footerlanding />
                <FooterLight />
            </div>
        </>
    );
};

export default SignUp;
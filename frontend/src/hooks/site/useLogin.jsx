import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import axios from 'axios';

function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password
      });

      // Handle successful login (e.g., store token in localStorage, redirect user)
      console.log('Login successful!', response.data);
      setSuccess('Login successful!');
      localStorage.setItem('token', response.data.token);
      navigate('/panel');
    } catch (error) {
      setError('Invalid credentials. Please try again.'); // Customize error handling based on API response
    }
  };
  return {email, password, error, success, navigate, handleLogin}
}

export default useLogin
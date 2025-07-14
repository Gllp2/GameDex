import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLogosBackground from '../components/floating-logos-background';
import SignUp from '../components/signUp';

function SignUpPage() {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const res = await fetch('http://localhost:3031/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.message || 'Sign up failed');
    } else {
      setSuccess(data.message);
      const loginRes = await fetch('http://localhost:3031/api/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ username: form.username, password: form.password })
      });
      if (loginRes.ok) {
        const loginData = await loginRes.json();
        localStorage.setItem('token', loginData.token);
        navigate('/library');
      } else {
        setError('Signup succeeded but login failed.');
      }
      setForm({
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      });
    }
  };

  return (
    <div>
        <FloatingLogosBackground />
        <SignUp 
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          error={error}
          success={success}
        />
    </div>
  );
}

export default SignUpPage;

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

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.message || 'Sign up failed');
    } else {
      setSuccess(data.message);
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

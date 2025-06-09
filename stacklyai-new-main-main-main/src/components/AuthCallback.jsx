import { useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

export default function AuthCallback() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await axios.get('http://localhost:8000/verify-auth', {
          withCredentials: true
        });

        if (res.data.valid) {
          const userRes = await axios.get('http://localhost:8000/me', {
            withCredentials: true
          });
          
          login({
            userId: userRes.data.id,
            email: userRes.data.email,
            
          });
          
          navigate('/AfterHome');
        } else {
          navigate('/login', { state: { error: "Authentication failed" } });
        }
      } catch (err) {
        navigate('/login', { state: { error: "Authentication error" } });
      }
    };

    verifyAuth();
  }, [navigate, login]);

  return <div>Processing authentication...</div>;
}
import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = ({ isLogin }) => {
    const { loginUser, registerUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (isLogin) {
            await loginUser({ email: formData.email, password: formData.password });
            navigate('/events'); // ✅ Use navigate instead of history.push
          } else {
            await registerUser(formData);
            navigate('/login'); // ✅ Use navigate instead of history.push
          }
        } catch (err) {
          console.log(err.message);
        }
      };

      return (
        <div className="container mt-5">
          <h2>{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
            )}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
        </div>
      );
    };

export default Auth;

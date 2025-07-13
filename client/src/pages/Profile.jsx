import { useEffect, useState } from 'react';
import FloatingLogosBackground from '../components/floating-logos-background';
import Profile from '../components/Profile';
import '../styles/Profile.css'
import CollectionHistory from '../components/CollectionHistory';
import PlatformUsernames from '../components/PlatformUsernames';
import BannerChanger from '../components/banner-changer';
import Header from '../components/Header';

function ProfilePage() {
  const [games, setGames] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/users/me', {
        headers: { Authorization: token }
      });
      if (res.ok) {
        const user = await res.json();
        setGames(user.games || []);
        setUsername(user.username || '');
      }
      }
    fetchUser();
  }, []);

  const totalSpent = games.reduce((sum, g) => sum + (g.user_value || 0), 0);
  return (
    <>
      <Header />
      <div className="profile-bg">
        <FloatingLogosBackground />
        <div className="profile-card">
          <BannerChanger>
            <h1>Profile</h1>
            <img src="/banner/pfp.png" alt="" className="profile-img" />
            <h3>
              <span className="username">{username}</span> Joined July 2025
            </h3>
            <div className="stat-group">
              <div className="stat">
                <span className="number">{games.length}</span>
                <span className="label">Owned Games</span>
              </div>
              <div className="stat">
                <span className="number">
                  {totalSpent}<span className="currency">€</span>
                </span>
                <span className="label">Spent</span>
              </div>
            </div>
          </BannerChanger>
          <section className="profile-extra-section">
            <PlatformUsernames />
            <CollectionHistory />
          </section>
        </div>
        <Profile />
      </div>
    </>
  );
}

export default ProfilePage;
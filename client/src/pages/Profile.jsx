import FloatingLogosBackground from '../components/floating-logos-background';
import Profile from '../components/Profile';
import '../styles/Profile.css'
import CollectionHistory from '../components/CollectionHistory';
import PlatformUsernames from '../components/PlatformUsernames';
import BannerChanger from '../components/banner-changer';

function ProfilePage() {
  return (
    <div className="profile-bg">
      <FloatingLogosBackground />
      <div className="profile-card">
        <BannerChanger>
          <h1>Profile</h1>
          <img src="/banner/pfp.png" alt="" className="profile-img" />
          <h3>
            <span className="username">(Username)</span> Joined July 2025
          </h3>
          <div className="stat-group">
            <div className="stat">
              <span className="number">45</span>
              <span className="label">Owned Games</span>
            </div>
            <div className="stat">
              <span className="number">
                450<span className="currency">$</span>
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
  );
}

export default ProfilePage;
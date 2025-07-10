import { FaSteam, FaXbox, FaPlaystation} from 'react-icons/fa';
import { SiEpicgames, SiEa } from 'react-icons/si';

const platforms = [
  { icon: <SiEpicgames />, name: '@Banana' },
  { icon: <FaSteam />, name: '@Banana' },
  { icon: <FaXbox />, name: '@Banana' },
  { icon: <FaPlaystation />, name: '@Banana' },
  { icon: <SiEa />, name: '@Banana' },
];

export default function PlatformUsernames() {
  return (
    <div className="platform-badges">
      {platforms.map((platform, index) => (
        <div key={index} className="platform-badge">
          {platform.icon}
          {platform.name}
        </div>
      ))}
    </div>
  );
}

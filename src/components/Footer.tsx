import { profile } from '../data/profile';
import { useLocalTime } from '../hooks/useLocalTime';

const Footer = () => {
  const time = useLocalTime(profile.timeZone);

  return (
    <footer className="pb-10">
      <div className="container-page">
        <div className="flex flex-col gap-3 border-t border-fg pt-5 font-mono text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            {profile.location} · {time} local time
          </p>
          <a href="#home" className="link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

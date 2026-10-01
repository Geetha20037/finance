import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Search,
  Menu,
  ChevronDown,
  UserRound,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSearch = (e) => {
    if (e.key !== "Enter") return;

    const value = search.trim().toLowerCase();

    if (!value) return;

    if (value.includes("profile") || value.includes("account")) {
      navigate("/profile");
    } else if (value.includes("setting")) {
      navigate("/settings");
    } else {
      navigate("/dashboard");
    }

    setSearch("");
  };

  const handleLogout = () => {
    localStorage.removeItem("Finova-authenticated");
    navigate("/login");
  };

  return (
    <header className="top-navbar">
      <div className="navbar-left">
        <button
          className="mobile-menu-button"
          onClick={onMenuClick}
          aria-label="Open menu"
          type="button"
        >
          <Menu size={22} />
        </button>

        <div className="mobile-brand">
          <div className="brand-mark">F</div>
          <span>Finova</span>
        </div>

        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search anything..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />

          {search && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}

          <span className="search-shortcut"> k </span>
        </div>
      </div>

      <div className="navbar-actions">
        <ThemeToggle />

        {/* Notifications */}
        <div className="navbar-dropdown" ref={notificationRef}>
          <button
            className="notification-button"
            aria-label="Notifications"
            type="button"
            onClick={() => {
              setNotificationsOpen((value) => !value);
              setProfileOpen(false);
            }}
          >
            <Bell size={19} />
            <span className="notification-dot"></span>
          </button>

          {notificationsOpen && (
            <div className="notification-panel">
              <div className="dropdown-header">
                <div>
                  <strong>Notifications</strong>
                  <span>You have 3 new updates</span>
                </div>

                <button
                  type="button"
                  onClick={() => setNotificationsOpen(false)}
                >
                  <X size={16} />
                </button>
              </div>

              <button
                type="button"
                className="notification-item"
                onClick={() => navigate("/dashboard")}
              >
                <div className="notification-icon notification-success">
                  $
                </div>
                <div>
                  <strong>Payment received</strong>
                  <span>Your salary payment was added.</span>
                </div>
              </button>

              <button
                type="button"
                className="notification-item"
                onClick={() => navigate("/dashboard")}
              >
                <div className="notification-icon"></div>
                <div>
                  <strong>Spending update</strong>
                  <span>Your monthly spending changed.</span>
                </div>
              </button>

              <button
                type="button"
                className="notification-item"
                onClick={() => navigate("/settings")}
              >
                <div className="notification-icon"></div>
                <div>
                  <strong>Account settings</strong>
                  <span>Review your Finova preferences.</span>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Personal Account */}
        <div className="navbar-dropdown" ref={profileRef}>
          <button
            className="navbar-profile"
            type="button"
            onClick={() => {
              setProfileOpen((value) => !value);
              setNotificationsOpen(false);
            }}
          >
            <div className="avatar avatar-small">GP</div>

            <div className="navbar-profile-info">
              <strong>Geetha Priya</strong>
              <span>Personal Account</span>
            </div>

            <ChevronDown
              size={16}
              className={profileOpen ? "profile-chevron-open" : ""}
            />
          </button>

          {profileOpen && (
            <div className="profile-dropdown">
              <div className="profile-dropdown-user">
                <div className="avatar">GP</div>

                <div>
                  <strong>Geetha Priya</strong>
                  <span>Personal Account</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  navigate("/profile");
                  setProfileOpen(false);
                }}
              >
                <UserRound size={17} />
                Profile
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate("/settings");
                  setProfileOpen(false);
                }}
              >
                <Settings size={17} />
                Settings
              </button>

              <button
                type="button"
                className="dropdown-logout"
                onClick={handleLogout}
              >
                <LogOut size={17} />
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;



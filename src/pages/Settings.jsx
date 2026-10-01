import { useState } from "react";
import {
  Bell,
  LockKeyhole,
  Palette,
  UserRound,
  ChevronRight,
  Check,
  Smartphone,
} from "lucide-react";

import PageHeader from "../components/PageHeader";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { theme, setTheme } = useTheme();

  const [notifications, setNotifications] = useState({
    transactions: true,
    weekly: true,
    marketing: false,
  });

  const [saved, setSaved] = useState(false);

  const toggleNotification = (key) => {
    setNotifications((current) => ({
      ...current,
      [key]: !current[key],
    }));

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1500);
  };

  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Preferences"
        title="Settings"
        description="Customize your Finova experience and account preferences."
        action={
          saved ? (
            <div className="saved-message">
              <Check size={16} />
              Saved
            </div>
          ) : null
        }
      />

      <div className="settings-layout">
        <div className="settings-menu">
          <button className="settings-menu-item active">
            <UserRound size={18} />
            <span>General</span>
          </button>

          <button className="settings-menu-item">
            <Bell size={18} />
            <span>Notifications</span>
          </button>

          <button className="settings-menu-item">
            <Palette size={18} />
            <span>Appearance</span>
          </button>

          <button className="settings-menu-item">
            <LockKeyhole size={18} />
            <span>Security</span>
          </button>
        </div>

        <div className="settings-content">
          <section className="dashboard-card settings-section">
            <div className="settings-section-heading">
              <div>
                <span className="eyebrow">Appearance</span>
                <h3>Theme preference</h3>
              </div>

              <Palette size={20} />
            </div>

            <p className="settings-description">
              Choose how Finova looks across your devices.
            </p>

            <div className="theme-options">
              <button
                className={`theme-option ${
                  theme === "light" ? "theme-option-active" : ""
                }`}
                onClick={() => setTheme("light")}
              >
                <div className="theme-preview theme-preview-light">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <span>Light</span>

                {theme === "light" && (
                  <Check size={17} />
                )}
              </button>

              <button
                className={`theme-option ${
                  theme === "dark" ? "theme-option-active" : ""
                }`}
                onClick={() => setTheme("dark")}
              >
                <div className="theme-preview theme-preview-dark">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <span>Dark</span>

                {theme === "dark" && (
                  <Check size={17} />
                )}
              </button>

              <div className="settings-inline-toggle">
                <ThemeToggle showLabel />
              </div>
            </div>
          </section>

          <section className="dashboard-card settings-section">
            <div className="settings-section-heading">
              <div>
                <span className="eyebrow">Notifications</span>
                <h3>Stay informed</h3>
              </div>

              <Bell size={20} />
            </div>

            <div className="settings-list">
              <div className="settings-row">
                <div className="settings-row-icon">
                  <Smartphone size={18} />
                </div>

                <div className="settings-row-content">
                  <strong>Transaction alerts</strong>
                  <span>
                    Get notified whenever a transaction is made.
                  </span>
                </div>

                <button
                  className={`switch ${
                    notifications.transactions ? "switch-on" : ""
                  }`}
                  onClick={() =>
                    toggleNotification("transactions")
                  }
                  aria-label="Toggle transaction alerts"
                >
                  <span></span>
                </button>
              </div>

              <div className="settings-row">
                <div className="settings-row-icon">
                  <Bell size={18} />
                </div>

                <div className="settings-row-content">
                  <strong>Weekly summary</strong>
                  <span>
                    Receive a weekly overview of your spending.
                  </span>
                </div>

                <button
                  className={`switch ${
                    notifications.weekly ? "switch-on" : ""
                  }`}
                  onClick={() => toggleNotification("weekly")}
                  aria-label="Toggle weekly summary"
                >
                  <span></span>
                </button>
              </div>

              <div className="settings-row">
                <div className="settings-row-icon">
                  <Bell size={18} />
                </div>

                <div className="settings-row-content">
                  <strong>Product updates</strong>
                  <span>
                    Receive occasional news and product updates.
                  </span>
                </div>

                <button
                  className={`switch ${
                    notifications.marketing ? "switch-on" : ""
                  }`}
                  onClick={() =>
                    toggleNotification("marketing")
                  }
                  aria-label="Toggle product updates"
                >
                  <span></span>
                </button>
              </div>
            </div>
          </section>

          <section className="dashboard-card settings-section">
            <div className="settings-section-heading">
              <div>
                <span className="eyebrow">Account</span>
                <h3>Account preferences</h3>
              </div>

              <UserRound size={20} />
            </div>

            <div className="settings-navigation-list">
              <button>
                <div>
                  <strong>Personal information</strong>
                  <span>Update your profile details</span>
                </div>

                <ChevronRight size={18} />
              </button>

              <button>
                <div>
                  <strong>Password & security</strong>
                  <span>Manage your password and sessions</span>
                </div>

                <ChevronRight size={18} />
              </button>

              <button>
                <div>
                  <strong>Connected accounts</strong>
                  <span>Manage linked financial accounts</span>
                </div>

                <ChevronRight size={18} />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Settings;



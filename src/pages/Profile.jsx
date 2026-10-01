import { useState } from "react";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Check,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

function Profile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Geetha",
    lastName: "Priya",
    email: "geethapriya@example.com",
    phone: "+91 93926 37307",
    location: "Bengaluru, India",
    birthday: "June 18, 2003",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Account"
        title="Your profile"
        description="Manage your personal information and account details."
        action={
          editing ? (
            <button
              className="button button-primary"
              onClick={handleSave}
            >
              <Check size={17} />
              Save changes
            </button>
          ) : (
            <button
              className="button button-outline"
              onClick={() => setEditing(true)}
            >
              Edit profile
            </button>
          )
        }
      />

      <div className="profile-grid">
        <section className="dashboard-card profile-card">
          <div className="profile-cover"></div>

          <div className="profile-main">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">GP</div>

              {editing && (
                <button
                  className="camera-button"
                  aria-label="Change profile picture"
                >
                  <Camera size={16} />
                </button>
              )}
            </div>

            <div className="profile-name-block">
              <h2>
                {profile.firstName} {profile.lastName}
              </h2>

              <p>Personal account</p>

              <span className="verified-badge">
                <ShieldCheck size={14} />
                Verified account
              </span>
            </div>
          </div>

          <div className="profile-divider"></div>

          <div className="profile-details-grid">
            <div className="profile-detail">
              <div className="detail-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>Email address</span>

                {editing ? (
                  <input
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                ) : (
                  <strong>{profile.email}</strong>
                )}
              </div>
            </div>

            <div className="profile-detail">
              <div className="detail-icon">
                <Phone size={18} />
              </div>

              <div>
                <span>Phone number</span>

                {editing ? (
                  <input
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                ) : (
                  <strong>{profile.phone}</strong>
                )}
              </div>
            </div>

            <div className="profile-detail">
              <div className="detail-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>Location</span>

                {editing ? (
                  <input
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                  />
                ) : (
                  <strong>{profile.location}</strong>
                )}
              </div>
            </div>

            <div className="profile-detail">
              <div className="detail-icon">
                <CalendarDays size={18} />
              </div>

              <div>
                <span>Date of birth</span>

                {editing ? (
                  <input
                    name="birthday"
                    value={profile.birthday}
                    onChange={handleChange}
                  />
                ) : (
                  <strong>{profile.birthday}</strong>
                )}
              </div>
            </div>
          </div>
        </section>

        <aside className="profile-side-column">
          <div className="dashboard-card account-status-card">
            <div className="status-icon">
              <ShieldCheck size={22} />
            </div>

            <h3>Account security</h3>

            <p>
              Your account is protected with strong security
              settings.
            </p>

            <div className="security-status">
              <span>Security score</span>
              <strong>Excellent</strong>
            </div>

            <div className="security-progress">
              <div></div>
            </div>

            <button className="text-button">
              Review security
            </button>
          </div>

          <div className="dashboard-card member-card">
            <span className="eyebrow">Member since</span>
            <strong>March 2026</strong>
            <p>
              You've been part of the Finova community for 7 months.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Profile;



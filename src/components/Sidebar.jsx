import {
  LayoutDashboard,
  UserRound,
  Settings,
  WalletCards,
  PieChart,
  LogOut,
  X,
  ArrowUpRight,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Transactions",
      path: "/dashboard#transactions",
      icon: WalletCards,
    },
    {
      label: "Analytics",
      path: "/dashboard#analytics",
      icon: PieChart,
    },
  ];

  const accountItems = [
    {
      label: "Profile",
      path: "/profile",
      icon: UserRound,
    },
    {
      label: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("Finova-authenticated");
    navigate("/login");
  };

  const handleSectionClick = (section) => {
    onClose();

    if (window.location.pathname !== "/dashboard") {
      navigate(`/dashboard#${section}`);
      return;
    }

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(
        null,
        "",
        `/dashboard#${section}`
      );
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => { onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        ></div>
      )}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <NavLink to="/" className="sidebar-brand">
            <div className="brand-mark">F</div>

            <div>
              <strong>Finova</strong>
              <span>Finance platform</span>
            </div>
          </NavLink>

          <button
            className="sidebar-close"
            onClick={() => { onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            aria-label="Close sidebar"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-content">
          <div className="menu-section">
            <span className="menu-label">Overview</span>

            <nav className="sidebar-nav">

              {/* Dashboard */}
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `sidebar-link ${
                    isActive ? "sidebar-link-active" : ""
                  }`
                }
                onClick={() => { onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                <LayoutDashboard size={19} />
                <span>Dashboard</span>
              </NavLink>

              {/* Transactions */}
              <button
                type="button"
                className="sidebar-link"
                onClick={() => handleSectionClick("transactions")}
              >
                <WalletCards size={19} />
                <span>Transactions</span>
              </button>

              {/* Analytics */}
              <button
                type="button"
                className="sidebar-link"
                onClick={() => handleSectionClick("analytics")}
              >
                <PieChart size={19} />
                <span>Analytics</span>
              </button>

            </nav>
          </div>

          <div className="menu-section">
            <span className="menu-label">Account</span>

            <nav className="sidebar-nav">
              {accountItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `sidebar-link ${
                        isActive ? "sidebar-link-active" : ""
                      }`
                    }
                    onClick={() => { onClose(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  >
                    <Icon size={19} />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>

          <div className="sidebar-promo">
            <div className="promo-icon">
              <ArrowUpRight size={19} />
            </div>

            <h4>Grow your savings</h4>

            <p>
              Set a goal and let Finova help you stay on track.
            </p>

            <button
              type="button"
              onClick={() => handleSectionClick("goals")}
            >
              Explore goals
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        <div className="sidebar-footer">
          <button
            className="logout-button"
            onClick={handleLogout}
            type="button"
          >
            <LogOut size={18} />
            <span>Log out</span>
          </button>

          <p>Finova v1.0.0</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;





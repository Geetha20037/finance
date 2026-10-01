import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (rememberMe) {
      localStorage.setItem("Finova-remember-email", email);
    } else {
      localStorage.removeItem("Finova-remember-email");
    }

    localStorage.setItem("Finova-authenticated", "true");

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="auth-glow auth-glow-one"></div>
        <div className="auth-glow auth-glow-two"></div>
      </div>

      <header className="auth-navbar">
        <Link to="/" className="landing-brand">
          <div className="brand-mark">F</div>
          <span>Finova</span>
        </Link>

        <ThemeToggle />
      </header>

      <main className="auth-main">
        <section className="auth-card">
          <div className="auth-icon">
            <WalletCards size={24} />
          </div>

          <div className="auth-heading">
            <span className="eyebrow">Welcome back</span>

            <h1>Sign in to Finova</h1>

            <p>
              Access your dashboard and keep your finances organized.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="email">Email address</label>

              <div className="auth-input">
                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="auth-field">
              <div className="auth-label-row">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="forgot-button"
                  onClick={() =>
                    alert("Password reset instructions will be available soon.")
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="auth-input">
                <LockKeyhole size={18} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <label className="remember-row">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              <span>Remember me</span>
            </label>

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="auth-submit">
              Sign in
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="auth-security">
            <ShieldCheck size={17} />

            <span>
              Your account experience is protected with secure access.
            </span>
          </div>

          <div className="auth-footer">
            <span>New to Finova?</span>

            <Link to="/">
              Explore Finova
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;




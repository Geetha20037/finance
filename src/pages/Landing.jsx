import {
  ArrowRight,
  Check,
  ShieldCheck,
  BarChart3,
  Wallet,
  Sparkles,
  LockKeyhole,
  Smartphone,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import ThemeToggle from "../components/ThemeToggle";

function Landing() {
  const features = [
    {
      icon: BarChart3,
      title: "Smarter insights",
      text: "Understand where your money goes with clear visual analytics and personalized insights.",
    },
    {
      icon: Wallet,
      title: "All finances in one place",
      text: "Track balances, spending, savings and transactions from one beautifully organized dashboard.",
    },
    {
      icon: ShieldCheck,
      title: "Built with security",
      text: "Your financial experience is designed around privacy, transparency and secure access.",
    },
  ];

  const testimonials = [
    {
      name: "Ananya Rao",
      role: "Product Designer",
      text: "Finova made it much easier to understand my monthly spending. The dashboard is incredibly clean.",
    },
    {
      name: "Rahul Mehta",
      role: "Software Engineer",
      text: "I finally have one place where I can see my goals, transactions and spending patterns.",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Manager",
      text: "The visual reports are simple enough to understand while still giving me useful detail.",
    },
  ];

  return (
    <div className="landing-page">
      <nav className="landing-navbar">
        <Link to="/" className="landing-brand">
          <div className="brand-mark">F</div>
          <span>Finova</span>
        </Link>

        <div className="landing-nav-links">
          <a href="#features">Features</a>
          <a href="#security">Security</a>
          <a href="#reviews">Reviews</a>
        </div>

        <div className="landing-nav-actions">
          <ThemeToggle />

          <Link to="/login" className="nav-login">
            Log in
          </Link>

          <Link to="/login" className="button button-dark">
            Get started
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="hero-content">
            <div className="announcement">
              <Sparkles size={15} />
              <span>Financial clarity, redesigned</span>
              <ArrowRight size={14} />
            </div>

            <h1>
              Your money.
              <br />
              <span>Made clearer.</span>
            </h1>

            <p>
              Finova brings your everyday finances into one intelligent,
              beautifully simple experience. Track, plan and grow with
              confidence.
            </p>

            <div className="hero-actions">
              <Link to="/login" className="button button-primary">
                Start for free
                <ArrowRight size={17} />
              </Link>

              <a href="#features" className="button button-outline">
                Explore features
              </a>
            </div>

            <div className="hero-trust">
              <div className="avatar-stack">
                <div className="mini-avatar">AR</div>
                <div className="mini-avatar">RM</div>
                <div className="mini-avatar">SW</div>
                <div className="mini-avatar">+</div>
              </div>

              <div>
                <div className="stars">
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                </div>

                <span>Loved by 12,000+ people</span>
              </div>
            </div>
          </div>

          <div className="hero-dashboard">
            <div className="dashboard-preview">
              <div className="preview-sidebar">
                <div className="preview-logo">F</div>

                <div className="preview-nav active"></div>
                <div className="preview-nav"></div>
                <div className="preview-nav"></div>
                <div className="preview-nav"></div>
              </div>

              <div className="preview-main">
                <div className="preview-topbar">
                  <div>
                    <div className="skeleton skeleton-small"></div>
                    <div className="skeleton skeleton-title"></div>
                  </div>

                  <div className="preview-avatar">GP</div>
                </div>

                <div className="preview-stats">
                  <div className="preview-card preview-balance">
                    <span>Total balance</span>
                    <strong>â‚¹2,84,590</strong>

                    <div className="preview-positive">
                      +12.8% this month
                    </div>
                  </div>

                  <div className="preview-card">
                    <span>Income</span>
                    <strong>â‚¹78,500</strong>
                    <div className="preview-line"></div>
                  </div>

                  <div className="preview-card">
                    <span>Expenses</span>
                    <strong>â‚¹34,280</strong>
                    <div className="preview-line expense-line"></div>
                  </div>
                </div>

                <div className="preview-lower">
                  <div className="preview-chart">
                    <div className="preview-heading">
                      <span>Cash flow</span>
                      <b>Last 6 months</b>
                    </div>

                    <div className="fake-chart">
                      <div className="chart-bars">
                        <i style={{ height: "38%" }}></i>
                        <i style={{ height: "54%" }}></i>
                        <i style={{ height: "42%" }}></i>
                        <i style={{ height: "69%" }}></i>
                        <i style={{ height: "60%" }}></i>
                        <i style={{ height: "82%" }}></i>
                        <i style={{ height: "74%" }}></i>
                      </div>
                    </div>
                  </div>

                  <div className="preview-transactions">
                    <div className="preview-heading">
                      <span>Transactions</span>
                      <b>View all</b>
                    </div>

                    <div className="fake-transaction">
                      <div className="fake-circle"></div>
                      <span></span>
                      <i></i>
                    </div>

                    <div className="fake-transaction">
                      <div className="fake-circle"></div>
                      <span></span>
                      <i></i>
                    </div>

                    <div className="fake-transaction">
                      <div className="fake-circle"></div>
                      <span></span>
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip">
          <span>BUILT FOR MODERN FINANCE</span>
          <div>
            <strong>Northstar</strong>
            <strong>vertex</strong>
            <strong>orbit</strong>
            <strong>mono</strong>
            <strong>atlas</strong>
          </div>
        </section>

        <section className="features-section section-container" id="features">
          <div className="section-intro">
            <span className="eyebrow">Everything in one place</span>

            <h2>
              A better way to
              <br />
              understand your money.
            </h2>

            <p>
              Powerful financial tools wrapped in an experience that stays
              simple, focused and easy to understand.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>

                  <a href="#security">
                    Learn more
                    <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="security-section section-container" id="security">
          <div className="security-content">
            <span className="eyebrow">Privacy by design</span>

            <h2>Your financial data deserves a safer home.</h2>

            <p>
              Finova keeps your experience transparent and organized so you
              always know what is happening with your financial information.
            </p>

            <div className="security-points">
              <div>
                <LockKeyhole size={19} />
                <span>Secure account access</span>
              </div>

              <div>
                <ShieldCheck size={19} />
                <span>Privacy-focused experience</span>
              </div>

              <div>
                <Smartphone size={19} />
                <span>Designed for every screen</span>
              </div>
            </div>
          </div>

          <div className="security-visual">
            <div className="security-circle">
              <div className="security-lock">
                <LockKeyhole size={38} />
              </div>

              <div className="security-ring ring-one"></div>
              <div className="security-ring ring-two"></div>
              <div className="security-ring ring-three"></div>
            </div>
          </div>
        </section>

        <section className="reviews-section section-container" id="reviews">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Customer stories</span>
              <h2>People are simplifying their finances.</h2>
            </div>

            <div className="review-rating">
              <div className="stars">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>

              <span>4.9 / 5 average rating</span>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="stars">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>

                <p>â€œ{testimonial.text}â€</p>

                <div className="testimonial-user">
                  <div className="avatar">{testimonial.name.slice(0, 2)}</div>

                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section section-container">
          <div className="cta-box">
            <div>
              <span className="eyebrow">Start today</span>

              <h2>
                Make your money
                <br />
                easier to understand.
              </h2>

              <p>
                Join thousands of people building a clearer financial future.
              </p>
            </div>

            <Link to="/login" className="button button-white">
              Get started
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="landing-brand">
              <div className="brand-mark">F</div>
              <span>Finova</span>
            </Link>

            <p>
              Financial clarity for your everyday life.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Product</strong>
              <a href="#features">Features</a>
              <a href="#security">Security</a>
              <Link to="/login">Login</Link>
            </div>

            <div>
              <strong>Company</strong>
              <a href="#reviews">Reviews</a>
              <a href="#features">About</a>
              <a href="#security">Contact</a>
            </div>

            <div>
              <strong>Legal</strong>
              <a href="#security">Privacy</a>
              <a href="#security">Terms</a>
              <a href="#security">Cookies</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Â© 2026 Finova. All rights reserved.</span>
          <span>Made for a clearer financial future.</span>
        </div>
      </footer>
    </div>
  );
}

export default Landing;



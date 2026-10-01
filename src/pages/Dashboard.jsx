import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  PiggyBank,
  Wallet,
  MoreHorizontal,
  Plus,
  Target,
  X,
  Check,
} from "lucide-react";

import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import TransactionList from "../components/TransactionList";
import PageHeader from "../components/PageHeader";

function Dashboard() {
  const [transactionOpen, setTransactionOpen] = useState(false);
  const [goalOpen, setGoalOpen] = useState(false);
  const [insightOpen, setInsightOpen] = useState(false);

  const [transactionType, setTransactionType] = useState("Expense");
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const handleTransactionSubmit = (e) => {
    e.preventDefault();

    if (!transactionName.trim() || !transactionAmount.trim()) {
      return;
    }

    setTransactionOpen(false);
    setTransactionName("");
    setTransactionAmount("");
  };

  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Thursday, October 1, 2026"
        title="Good afternoon, Geetha."
        description="Here's what's happening with your money today."
        action={
          <button
            type="button"
            className="button button-primary"
            onClick={() => setTransactionOpen(true)}
          >
            <Plus size={17} />
            Add transaction
          </button>
        }
      />

      <section className="balance-banner">
        <div className="balance-main">
          <div className="balance-heading">
            <span>Total balance</span>

            <button
              type="button"
              className="balance-more"
              aria-label="More options"
            >
              <MoreHorizontal size={19} />
            </button>
          </div>

          <h2>₹2,84,590.80</h2>

          <div className="balance-change">
            <span>
              <ArrowUpRight size={14} />
              12.8%
            </span>

            <p>compared to last month</p>
          </div>
        </div>

        <div className="balance-decoration">
          <div className="decoration-circle circle-one"></div>
          <div className="decoration-circle circle-two"></div>
          <div className="decoration-circle circle-three"></div>

          <Wallet size={58} strokeWidth={1.2} />
        </div>
      </section>

      <section className="stats-grid">
        <StatCard
          title="Monthly income"
          value="₹78,500"
          change="8.4%"
          description="vs. ₹72,400 last month"
          icon={ArrowDownLeft}
          positive
        />

        <StatCard
          title="Monthly expenses"
          value="₹34,280"
          change="4.2%"
          description="vs. ₹35,780 last month"
          icon={ArrowUpRight}
          positive
        />

        <StatCard
          title="Total savings"
          value="₹1,42,850"
          change="15.6%"
          description="₹19,240 added this month"
          icon={PiggyBank}
          positive
        />

        <StatCard
          title="Credit available"
          value="₹86,420"
          change="2.1%"
          description="of ₹1,20,000 total limit"
          icon={CreditCard}
          positive
        />
      </section>

      <section id="analytics" className="dashboard-grid-main">
        <ChartCard />

        <div id="goals" className="dashboard-card goals-card">
          <div className="card-header">
            <div>
              <span className="eyebrow">Savings</span>
              <h3>Goal progress</h3>
            </div>

            <button
              type="button"
              className="icon-button"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="goal-main">
            <div className="goal-circle">
              <div>
                <strong>68%</strong>
                <span>complete</span>
              </div>
            </div>

            <div className="goal-info">
              <span>Emergency fund</span>
              <strong>₹1,36,000</strong>
              <small>of ₹2,00,000</small>
            </div>
          </div>

          <div className="goal-progress">
            <div style={{ width: "68%" }}></div>
          </div>

          <div className="goal-footer">
            <span>₹64,000 remaining</span>
            <strong>3 months left</strong>
          </div>

          <button
            type="button"
            className="goal-button"
            onClick={() => setGoalOpen(true)}
          >
            <Target size={17} />
            Manage goal
          </button>
        </div>
      </section>

      <section
        id="transactions"
        className="dashboard-grid-bottom"
      >
        <TransactionList />

        <div className="dashboard-card spending-card">
          <div className="card-header">
            <div>
              <span className="eyebrow">This month</span>
              <h3>Spending breakdown</h3>
            </div>

            <button
              type="button"
              className="icon-button"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="spending-chart">
            <div
              className="donut"
              style={{
                background:
                  "conic-gradient(var(--accent) 0deg 130deg, var(--chart-secondary) 130deg 220deg, var(--warning) 220deg 285deg, var(--purple) 285deg 330deg, var(--border-strong) 330deg 360deg)",
              }}
            >
              <div className="donut-inner">
                <strong>₹34.2k</strong>
                <span>spent</span>
              </div>
            </div>
          </div>

          <div className="spending-list">
            <div>
              <span>
                <i className="spending-dot dot-green"></i>
                Housing
              </span>
              <strong>42%</strong>
            </div>

            <div>
              <span>
                <i className="spending-dot dot-blue"></i>
                Shopping
              </span>
              <strong>25%</strong>
            </div>

            <div>
              <span>
                <i className="spending-dot dot-yellow"></i>
                Food
              </span>
              <strong>18%</strong>
            </div>

            <div>
              <span>
                <i className="spending-dot dot-purple"></i>
                Transport
              </span>
              <strong>10%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-tip">
        <div className="tip-icon">
          <DollarSign size={20} />
        </div>

        <div>
          <strong>Finova insight</strong>
          <p>
            You spent 8% less on dining this month. Keep it up and
            you could save an extra ₹2,400 this month.
          </p>
        </div>

        <button
          type="button"
          className="text-button"
          onClick={() => setInsightOpen(true)}
        >
          View insights
        </button>
      </section>

      {transactionOpen && (
        <div
          className="Finova-modal-overlay"
          onMouseDown={() => setTransactionOpen(false)}
        >
          <div
            className="Finova-modal"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="Finova-modal-header">
              <div>
                <span className="eyebrow">Finova</span>
                <h2>Add transaction</h2>
                <p>Record your income or expense.</p>
              </div>

              <button
                type="button"
                onClick={() => setTransactionOpen(false)}
                className="modal-close"
              >
                <X size={20} />
              </button>
            </div>

            <form
              className="Finova-modal-form"
              onSubmit={handleTransactionSubmit}
            >
              <div className="transaction-type">
                <button
                  type="button"
                  className={
                    transactionType === "Expense"
                      ? "type-active"
                      : ""
                  }
                  onClick={() => setTransactionType("Expense")}
                >
                  Expense
                </button>

                <button
                  type="button"
                  className={
                    transactionType === "Income"
                      ? "type-active"
                      : ""
                  }
                  onClick={() => setTransactionType("Income")}
                >
                  Income
                </button>
              </div>

              <label>
                Description
                <input
                  value={transactionName}
                  onChange={(e) =>
                    setTransactionName(e.target.value)
                  }
                  placeholder="e.g. Grocery shopping"
                />
              </label>

              <label>
                Amount
                <input
                  type="number"
                  min="1"
                  value={transactionAmount}
                  onChange={(e) =>
                    setTransactionAmount(e.target.value)
                  }
                  placeholder="₹0.00"
                />
              </label>

              <button
                type="submit"
                className="button button-primary modal-submit"
              >
                <Check size={17} />
                Save transaction
              </button>
            </form>
          </div>
        </div>
      )}

      {goalOpen && (
        <div
          className="Finova-modal-overlay"
          onMouseDown={() => setGoalOpen(false)}
        >
          <div
            className="Finova-modal"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="Finova-modal-header">
              <div>
                <span className="eyebrow">Savings</span>
                <h2>Emergency fund</h2>
                <p>
                  You have completed 68% of your savings goal.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setGoalOpen(false)}
                className="modal-close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="goal-modal-content">
              <strong>₹1,36,000</strong>
              <span>saved of ₹2,00,000</span>

              <div className="goal-progress">
                <div style={{ width: "68%" }}></div>
              </div>

              <p>₹64,000 remaining · 3 months left</p>
            </div>
          </div>
        </div>
      )}

      {insightOpen && (
        <div
          className="Finova-modal-overlay"
          onMouseDown={() => setInsightOpen(false)}
        >
          <div
            className="Finova-modal"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="Finova-modal-header">
              <div>
                <span className="eyebrow">Finova insight</span>
                <h2>Your spending insight</h2>
              </div>

              <button
                type="button"
                onClick={() => setInsightOpen(false)}
                className="modal-close"
              >
                <X size={20} />
              </button>
            </div>

            <p className="insight-modal-text">
              You spent 8% less on dining this month. If you maintain
              this habit, you could save approximately ₹2,400 more
              this month.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;



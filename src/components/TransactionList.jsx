import {
  ShoppingBag,
  Coffee,
  Car,
  Home,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";

const transactions = [
  {
    name: "Salary credited",
    category: "Income",
    date: "Sep 30, 2026",
    amount: "+â‚¹78,500",
    type: "income",
    icon: ArrowDownLeft,
  },
  {
    name: "Amazon Shopping",
    category: "Shopping",
    date: "Sep 29, 2026",
    amount: "-â‚¹2,499",
    type: "expense",
    icon: ShoppingBag,
  },
  {
    name: "Starbucks",
    category: "Food & Drinks",
    date: "Sep 28, 2026",
    amount: "-â‚¹420",
    type: "expense",
    icon: Coffee,
  },
  {
    name: "Uber",
    category: "Transport",
    date: "Sep 27, 2026",
    amount: "-â‚¹680",
    type: "expense",
    icon: Car,
  },
  {
    name: "Apartment Rent",
    category: "Housing",
    date: "Sep 26, 2026",
    amount: "-â‚¹18,000",
    type: "expense",
    icon: Home,
  },
];

function TransactionList() {
  return (
    <div className="dashboard-card transaction-card">
      <div className="card-header">
        <div>
          <span className="eyebrow">Activity</span>
          <h3>Recent transactions</h3>
        </div>

        <button className="text-button">View all</button>
      </div>

      <div className="transaction-list">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;

          return (
            <div className="transaction-item" key={transaction.name}>
              <div className="transaction-icon">
                <Icon size={18} />
              </div>

              <div className="transaction-info">
                <strong>{transaction.name}</strong>
                <span>
                  {transaction.category} Â· {transaction.date}
                </span>
              </div>

              <div
                className={`transaction-amount ${
                  transaction.type === "income"
                    ? "income-amount"
                    : ""
                }`}
              >
                {transaction.type === "income" && (
                  <ArrowUpRight size={13} />
                )}

                {transaction.amount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TransactionList;



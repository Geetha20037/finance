import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 4200, expense: 2600 },
  { month: "Feb", income: 4600, expense: 2800 },
  { month: "Mar", income: 4400, expense: 2500 },
  { month: "Apr", income: 5100, expense: 3100 },
  { month: "May", income: 4800, expense: 2900 },
  { month: "Jun", income: 5600, expense: 3200 },
  { month: "Jul", income: 6100, expense: 3500 },
  { month: "Aug", income: 5800, expense: 3300 },
  { month: "Sep", income: 6400, expense: 3700 },
];

function ChartCard() {
  return (
    <div className="dashboard-card chart-card">
      <div className="card-header">
        <div>
          <span className="eyebrow">Cash flow</span>
          <h3>Income vs expenses</h3>
        </div>

        <select className="period-select" defaultValue="9months">
          <option value="9months">Last 9 months</option>
          <option value="6months">Last 6 months</option>
          <option value="year">This year</option>
        </select>
      </div>

      <div className="chart-legend">
        <span>
          <i className="legend-income"></i>
          Income
        </span>

        <span>
          <i className="legend-expense"></i>
          Expenses
        </span>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="incomeGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--accent)"
                  stopOpacity={0.28}
                />
                <stop
                  offset="100%"
                  stopColor="var(--accent)"
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient
                id="expenseGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="var(--chart-secondary)"
                  stopOpacity={0.18}
                />
                <stop
                  offset="100%"
                  stopColor="var(--chart-secondary)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="var(--border)"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--text-muted)",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--text-muted)",
                fontSize: 12,
              }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />

            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                color: "var(--text)",
              }}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "",
              ]}
            />

            <Area
              type="monotone"
              dataKey="income"
              stroke="var(--accent)"
              strokeWidth={2.5}
              fill="url(#incomeGradient)"
            />

            <Area
              type="monotone"
              dataKey="expense"
              stroke="var(--chart-secondary)"
              strokeWidth={2}
              fill="url(#expenseGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartCard;



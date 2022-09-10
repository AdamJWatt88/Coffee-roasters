// calculate the plans based on size and frequency
export const plans = [
  {
    quantity: "250g",
    weekly: (7.2 * 4).toFixed(2),
    biWeekly: (9.6 * 2).toFixed(2),
    monthly: (12).toFixed(2),
  },
  {
    quantity: "500g",
    weekly: (13 * 4).toFixed(2),
    biWeekly: (17.5 * 2).toFixed(2),
    monthly: (22).toFixed(2),
  },
  {
    quantity: "1000g",
    weekly: (22 * 4).toFixed(2),
    biWeekly: (32 * 2).toFixed(2),
    monthly: (42).toFixed(2),
  },
];

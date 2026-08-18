/**
 * Work experience entries.
 * Update with your own company, role, and responsibilities.
 */
export const experience = [
  {
  id: '1',
  company: 'Infozech Software',
  role: 'Software Engineer',
  duration: 'July 2023 – Present',
  responsibilities: [
    'Own the Bill Generation module — implementing core usage-based billing calculation logic feeding the reconciliation engine, supporting 500+ invoices generated daily across multiple African markets.',
    'Built the reconciliation matching logic comparing customer-provided billing data against towerco-generated invoices to surface deduction values, automating discrepancy detection for ops review at 1K+ requests/day.',
    'Own the API layer for iLease, a tower lease-management platform built on Node.js/Express with a PostgreSQL backend, supporting 5K+ requests/day.',
    'Developed 20+ REST APIs in Node.js/Express with a structured middleware chain (JWT auth, express-validator, centralised error handling), including offset/limit pagination with full-text search and filtering.',
    'Built the React billing module for one-time and recurring invoice generation with dynamic tax, discount, and multi-currency logic; delivered Chart.js dashboards for real-time billing/usage visualisation.',
    'Reduced dashboard re-render overhead by ~40% using React.memo, useMemo, and lazy loading on data-heavy billing views.',
  ],
}

];
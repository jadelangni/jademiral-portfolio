import {
  BarChart3,
  Boxes,
  ChefHat,
  QrCode,
  ReceiptText,
  TrendingUp,
} from 'lucide-react'
import type { Project } from '../types'

/**
 * To add a project: append another object to this array.
 * Do not add links you do not have. Leaving `live` / `repo` undefined renders
 * clearly disabled buttons instead of broken ones.
 *
 * Screenshots: drop image files into /public/screenshots using the file names below.
 * Missing files show a labelled placeholder automatically.
 */
export const projects: Project[] = [
  {
    id: 'icys-simplicitea',
    featured: true,
    title: 'Icy\u2019s Simplicitea',
    tagline: 'Point of Sale and Inventory Management System',
    summary:
      'A web-based Point of Sale and Inventory Management System developed to optimize business operations, sales monitoring, product management, inventory tracking, and reporting for a milk tea business with three branches.',
    problem:
      'Sales, orders, and stock were being recorded by hand. That led to transcription mistakes, slow transactions, stock-outs nobody saw coming, and reports that arrived too late to help decisions. The owner had no single view across branches.',
    // EDIT ME: replace with your exact part of the capstone so it stays accurate.
    role: 'Developer on the capstone team. I contributed to designing and building the system\u2019s modules, from requirements and database design through implementation and testing.',
    contributions: [
      'Took part in requirements analysis with the business to map the manual process.',
      'Helped design the database (ERD) and the interface layouts.',
      'Built features in Laravel, MySQL, and Tailwind CSS.',
      'Tested the modules and took part in the user evaluation.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Git'],
    features: [
      {
        title: 'Fast order taking',
        description:
          'Category-based product grid, automatic totals, and separate Cash and GCash payment flows with printed receipts.',
        icon: ReceiptText,
      },
      {
        title: 'Recipe-linked inventory',
        description:
          'Each drink maps to its ingredients, so every sale deducts the right grams and milliliters automatically.',
        icon: ChefHat,
      },
      {
        title: 'Multi-branch stock control',
        description:
          'Stock per branch (Oslob, Santander, Looc) with alert thresholds and low-stock warnings.',
        icon: Boxes,
      },
      {
        title: 'Inventory forecast',
        description:
          'Seven-day ingredient usage predictions from recent sales, with a recommended restock plan.',
        icon: TrendingUp,
      },
      {
        title: 'Sales reports',
        description:
          'Daily, monthly, and per-staff reports with hourly sales charts and Excel export.',
        icon: BarChart3,
      },
      {
        title: 'Roles and QR attendance',
        description:
          'Admin and Cashier roles, branch assignment, and QR-code clock in / clock out for staff.',
        icon: QrCode,
      },
    ],
    metrics: [
      { label: 'Usability', value: '3.58 / 4', note: 'Very Usable, rated by end-users' },
      { label: 'Security', value: '3.48 / 4', note: 'Very Secure, rated by IT experts' },
      {
        label: 'Maintainability & portability',
        value: '3.48 / 4',
        note: 'Rated by IT experts',
      },
      { label: 'Functional suitability', value: '3.17 / 4', note: 'Functional, rated by IT experts' },
    ],
    metricsSource: 'Evaluation results from the capstone paper, based on the ISO 25010 quality model.',
    screenshots: [
      { file: 'dashboard.png', caption: 'Admin dashboard', figure: 'Figure 16' },
      { file: 'products.png', caption: 'Product list', figure: 'Figure 17' },
      { file: 'recipes.png', caption: 'Recipe configuration', figure: 'Figure 20' },
      { file: 'inventory.png', caption: 'Ingredient inventory', figure: 'Figure 22' },
      { file: 'forecast.png', caption: 'Inventory forecast', figure: 'Figure 24' },
      { file: 'reports.png', caption: 'Daily sales report', figure: 'Figure 30' },
      { file: 'attendance.png', caption: 'Staff attendance log', figure: 'Figure 35' },
      { file: 'employee-login.png', caption: 'Employee QR login', figure: 'Figure 36' },
    ],
    links: {
      live: undefined, // e.g. 'https://your-demo-url.com'
      repo: undefined, // e.g. 'https://github.com/your-handle/icys-simplicitea'
    },
  },
]


// ==========================================================
// Dashboard Images
// ==========================================================

import salesDashboard from "../../projects/excel-sales-dashboard.png";
import foodDeliveryDashboard from "../../projects/food-delivery-dashboard.png";
import hrDashboard from "../../projects/hr-dashboard.png";
import studentDashboard from "../../projects/student-dashboard.png";

// ==========================================================
// Projects Data
// ==========================================================

const projects = [
  {
    id: 1,
    featured: true,
    category: "Power BI",
    title: "Excel Sales Analytics Dashboard",
    subtitle: "Executive Business Intelligence Dashboard",
    image: salesDashboard,

    github: "https://github.com/yourusername/excel-sales-dashboard",
    liveDemo: "",

    duration: "3 Weeks",
    role: "Power BI Developer",
    dataset: "120K+ Sales Records",

    businessChallenge:
      "Business managers relied on multiple Excel reports to monitor sales, profit, customer performance, and regional growth. Report preparation was manual, time-consuming, and lacked real-time insights.",

    objective:
      "Design a centralized executive dashboard that provides complete visibility into sales performance, profitability, customer trends, and regional analysis.",

    solution:
      "Developed an interactive Power BI solution using Power Query, Star Schema Data Modeling, DAX Measures, KPI Cards, Drill-through Reports, Dynamic Filters, and Executive Dashboards.",

    businessImpact:
      "Reduced manual reporting effort, improved executive decision-making, and enabled faster business performance tracking.",

    insights: [
      "West region generated the highest revenue.",
      "Top 20% of customers contributed more than half of total sales.",
      "Technology category achieved the highest profit margin.",
      "Quarter 4 recorded the highest overall sales.",
    ],

    features: [
      "Executive KPI Cards",
      "Dynamic Slicers",
      "Drill Through",
      "Bookmarks",
      "Tooltip Pages",
      "Dynamic Titles",
      "Responsive Dashboard",
    ],

    technologies: [
      "Power BI",
      "Power Query",
      "DAX",
      "Excel",
      "Data Modeling",
      "Business Intelligence",
    ],

    metrics: {
      dashboards: 1,
      pages: 6,
      visuals: 24,
      daxMeasures: 18,
      dataSources: 2,
    },

    screenshots: [salesDashboard],
  },

  {
    id: 2,
    featured: false,
    category: "Power BI",
    title: "Food Delivery Analytics Dashboard",
    subtitle: "Restaurant & Delivery Intelligence",
    image: foodDeliveryDashboard,

    github: "",
    liveDemo: "",

    duration: "2 Weeks",
    role: "Data Analyst",
    dataset: "95K+ Orders",

    businessChallenge:
      "Restaurant owners struggled to monitor daily orders, delivery performance, customer behavior, and revenue using multiple spreadsheets.",

    objective:
      "Create a dashboard that tracks order trends, delivery efficiency, customer ratings, and restaurant performance in one place.",

    solution:
      "Built a Power BI dashboard integrating sales, delivery, customer, and restaurant datasets with interactive filtering and KPI reporting.",

    businessImpact:
      "Improved operational visibility and enabled data-driven business decisions for restaurant management.",

    insights: [
      "Dinner hours generated the highest order volume.",
      "Top-rated restaurants also had the fastest delivery times.",
      "Weekends accounted for the highest revenue.",
      "Online payment was the most preferred payment method.",
    ],

    features: [
      "Restaurant Performance Dashboard",
      "Order Analysis",
      "Delivery Time Analysis",
      "Customer Ratings",
      "Revenue Dashboard",
      "Interactive Filters",
    ],

    technologies: [
      "Power BI",
      "Power Query",
      "Excel",
      "DAX",
    ],

    metrics: {
      dashboards: 1,
      pages: 5,
      visuals: 20,
      daxMeasures: 14,
      dataSources: 2,
    },

    screenshots: [foodDeliveryDashboard],
  },

  {
    id: 3,
    featured: false,
    category: "Power BI",
    title: "HR Analytics Dashboard",
    subtitle: "Employee Workforce Analytics",
    image: hrDashboard,

    github: "",
    liveDemo: "",

    duration: "2 Weeks",
    role: "Power BI Developer",
    dataset: "35K+ Employees",

    businessChallenge:
      "HR teams lacked a centralized reporting solution for monitoring employee attrition, workforce demographics, departmental performance, and hiring trends.",

    objective:
      "Develop a comprehensive HR analytics dashboard to support employee retention strategies and workforce planning.",

    solution:
      "Created an interactive dashboard using DAX calculations, employee segmentation, department analysis, and dynamic KPI reporting.",

    businessImpact:
      "Improved HR reporting efficiency and supported data-driven workforce planning.",

    insights: [
      "Highest attrition occurred within the first two years.",
      "Research department maintained the highest employee retention.",
      "Employees under 30 showed the highest turnover.",
      "Overtime employees had higher attrition rates.",
    ],

    features: [
      "Attrition Dashboard",
      "Employee KPIs",
      "Department Analysis",
      "Gender Distribution",
      "Experience Analysis",
      "Interactive Filters",
    ],

    technologies: [
      "Power BI",
      "DAX",
      "Excel",
      "Power Query",
    ],

    metrics: {
      dashboards: 1,
      pages: 5,
      visuals: 18,
      daxMeasures: 12,
      dataSources: 1,
    },

    screenshots: [hrDashboard],
  },

  {
    id: 4,
    featured: false,
    category: "Power BI",
    title: "Student Performance Analytics Dashboard",
    subtitle: "Academic Performance Intelligence",
    image: studentDashboard,

    github: "",
    liveDemo: "",

    duration: "2 Weeks",
    role: "Data Analyst",
    dataset: "15K+ Student Records",

    businessChallenge:
      "Educational institutions required an interactive reporting solution to monitor attendance, academic performance, placements, and department-wise statistics.",

    objective:
      "Provide academic administrators with real-time student performance insights using interactive Power BI dashboards.",

    solution:
      "Designed dashboards integrating attendance, academic results, placement statistics, and departmental performance into a unified reporting solution.",

    businessImpact:
      "Reduced manual academic reporting and improved institutional decision-making.",

    insights: [
      "Attendance strongly influenced final academic performance.",
      "Computer Science students achieved the highest placement percentage.",
      "Semester 2 recorded the highest failure rate.",
      "Overall placement percentage improved year over year.",
    ],

    features: [
      "Academic KPI Dashboard",
      "Placement Analysis",
      "Attendance Dashboard",
      "Department Comparison",
      "Performance Trends",
      "Interactive Filtering",
    ],

    technologies: [
      "Power BI",
      "Excel",
      "Power Query",
      "DAX",
    ],

    metrics: {
      dashboards: 1,
      pages: 5,
      visuals: 21,
      daxMeasures: 11,
      dataSources: 1,
    },

    screenshots: [studentDashboard],
  },
];

export default projects;
// ======================================================
// Enterprise Sales Performance Analytics Solution
// ======================================================

// Dashboard Images
import executiveOverview from "../assets/executive-overview.JPG";
import salesPerformance from "../assets/sales-performance.JPG";
import productPerformance from "../assets/product-performance.JPG";
import regionalPerformance from "../assets/regional-performance.JPG";
import salesOperations from "../assets/sales-operations.JPG";

const salesProject = {
  // ======================================================
  // HERO SECTION
  // ======================================================

  hero: {
    title: "Enterprise Sales Performance Analytics Solution",

    subtitle: "End-to-End Business Intelligence Case Study",

    description:
      "An enterprise-grade Power BI solution built using Power Query, Data Modeling, DAX, and interactive dashboards to transform raw sales data into meaningful business insights for executives and decision-makers.",

    technologies: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Modeling",
      "Business Intelligence",
    ],

    buttons: {
      github: "#",
      documentation: "#",
      liveDemo: "#",
    },
  },

  // ======================================================
  // PROJECT STATISTICS
  // ======================================================

  statistics: [
    {
      id: 1,
      label: "Sales Records",
      value: "1M+",
    },
    {
      id: 2,
      label: "Dashboards",
      value: "5",
    },
    {
      id: 3,
      label: "Power Query Steps",
      value: "20",
    },
    {
      id: 4,
      label: "DAX Measures",
      value: "20",
    },
    {
      id: 5,
      label: "Visualizations",
      value: "20",
    },
    {
      id: 6,
      label: "Regions",
      value: "7+",
    },
  ],

  // ======================================================
  // DASHBOARDS
  // ======================================================

  dashboards: [
    {
      id: 1,

      title: "Executive Sales Overview",

      image: executiveOverview,

      description:
        "Provides executives with a complete overview of revenue, profit, orders, KPIs, and business growth.",

      purpose: "Executive Reporting",

      kpis: [
        "Revenue",
        "Profit",
        "Orders",
        "Profit Margin",
        "Growth %",
      ],
    },

    {
      id: 2,

      title: "Sales Performance Dashboard",

      image: salesPerformance,

      description:
        "Analyzes sales trends, monthly growth, customer performance, and sales channel contribution.",

      purpose: "Sales Analytics",

      kpis: [
        "Monthly Sales",
        "Revenue",
        "Orders",
        "Growth %",
        "Sales Channel",
      ],
    },

    {
      id: 3,

      title: "Product Performance Dashboard",

      image: productPerformance,

      description:
        "Evaluates top-performing products, category contribution, profitability, and quantity sold.",

      purpose: "Product Analytics",

      kpis: [
        "Top Products",
        "Category Sales",
        "Profit",
        "Quantity Sold",
        "Average Sales",
      ],
    },

    {
      id: 4,

      title: "Regional Performance Dashboard",

      image: regionalPerformance,

      description:
        "Compares regional performance, country-wise revenue, profitability, and business growth.",

      purpose: "Regional Analytics",

      kpis: [
        "Country Sales",
        "Regional Revenue",
        "Profit",
        "Growth %",
        "Top Region",
      ],
    },

    {
      id: 5,

      title: "Sales Operations Dashboard",

      image: salesOperations,

      description:
        "Tracks operational efficiency, order fulfillment, shipping performance, and priorities.",

      purpose: "Operations Analytics",

      kpis: [
        "Orders",
        "Priority",
        "Revenue",
        "Profit",
        "Fulfillment",
      ],
    },
  ],

  // ======================================================
  // BUSINESS CHALLENGE
  // ======================================================

  businessChallenge: {
    title: "Transform Raw Sales Data into Business Intelligence",

    description:
      "Organizations often struggle with fragmented sales data stored across multiple files and regions. This project demonstrates how Power BI consolidates, cleans, models, and visualizes enterprise sales data into actionable insights for executive decision-making.",

    points: [
      "Consolidate multi-region sales data into one model.",
      "Clean and transform data using Power Query.",
      "Design an optimized Star Schema.",
      "Develop interactive executive dashboards.",
    ],
  },

  // ======================================================
  // DATASET OVERVIEW
  // ======================================================

  datasetOverview: [
    {
      label: "Records",
      value: "1M+",
    },

    {
      label: "Countries",
      value: "180+",
    },

    {
      label: "Regions",
      value: "7",
    },

    {
      label: "Sales Channels",
      value: "Online & Offline",
    },
  ],

  // ======================================================
  // ETL PIPELINE
  // ======================================================

  etlPipeline: [
    {
      title: "Excel / CSV",

      description:
        "Import raw enterprise sales datasets from multiple sources.",
    },

    {
      title: "Power Query",

      description:
        "Perform ETL operations using Power Query Editor.",
    },

    {
      title: "Data Cleaning",

      description:
        "Remove duplicates, null values, errors, and fix data types.",
    },

    {
      title: "Data Modeling",

      description:
        "Create an optimized Star Schema with relationships.",
    },

    {
      title: "DAX",

      description:
        "Develop reusable KPIs, calculated columns, and measures.",
    },

    {
      title: "Visualizations",

      description:
        "Build interactive dashboards for business reporting.",
    },

    {
      title: "Business Insights",

      description:
        "Generate actionable insights for executive decision-making.",
    },
  ],
  powerQueryTransformations: [
  "Changed Data Types",
  "Removed Null Values",
  "Removed Duplicate Records",
  "Filtered Rows",
  "Renamed Columns",
  "Split Columns",
  "Merged Queries",
  "Appended Queries",
  "Pivot Columns",
  "Unpivot Columns",
  "Grouped Rows",
  "Conditional Columns",
  "Custom Columns",
  "Replace Values",
  "Trim & Clean Text",
  "Extract Date Parts",
  "Added Index Column",
  "Sorted Data",
  "Created Lookup Tables",
  "Loaded Optimized Model",
],
dataModel: {
  fact: "Fact Sales",

  dimensions: [
    "Dim Customer",
    "Dim Product",
    "Dim Date",
    "Dim Region",
    "Dim Salesperson",
  ],

  benefits: [
    "Optimized query performance",
    "Simplified relationships",
    "Reusable DAX calculations",
    "Scalable enterprise model",
    "Reduced data redundancy",
  ],
},
daxMeasures: [
  {
    name: "Total Sales",
    description: "Calculates total sales revenue.",
    formula: "Total Sales = SUM(Sales[Revenue])",
  },

  {
    name: "Total Profit",
    description: "Calculates total profit.",
    formula: "Total Profit = SUM(Sales[Profit])",
  },

  {
    name: "Profit Margin",
    description: "Returns overall profit margin percentage.",
    formula: "Profit Margin = DIVIDE([Total Profit],[Total Sales])",
  },

  {
    name: "Average Order Value",
    description: "Average revenue per order.",
    formula: "AOV = DIVIDE([Total Sales],[Order Count])",
  },

  {
    name: "Sales Growth %",
    description: "Year-over-year sales growth.",
    formula:
      "Sales Growth % = DIVIDE([Current Year]-[Previous Year],[Previous Year])",
  },

  {
    name: "Customer Count",
    description: "Distinct customer count.",
    formula:
      "Customer Count = DISTINCTCOUNT(Customer[Customer ID])",
  },
],
businessInsights: [
  {
    title: "Revenue Concentration",
    description:
      "Nearly 65% of total revenue is generated by the top-performing product categories, indicating a strong dependence on a limited product portfolio.",
  },

  {
    title: "Regional Growth Opportunity",
    description:
      "The South and West regions consistently outperform other regions, while some markets show significant growth potential with targeted sales strategies.",
  },

  {
    title: "Customer Profitability",
    description:
      "A small percentage of customers contribute a disproportionately high share of overall profit, highlighting opportunities for customer retention programs.",
  },

  {
    title: "Seasonal Sales Pattern",
    description:
      "Sales increase during the final quarter of the year, suggesting seasonal demand that can be supported through inventory and marketing planning.",
  },

  {
    title: "Product Optimization",
    description:
      "Several products generate high sales volume but low profit margins, indicating opportunities for pricing or cost optimization.",
  },

  {
    title: "Operational Performance",
    description:
      "High-priority orders consistently achieve faster fulfillment rates, demonstrating effective operational prioritization.",
  },
],
recommendations: [
  {
    title: "Increase Investment in High-Performing Regions",

    description:
      "Allocate additional marketing and sales resources to regions demonstrating consistent revenue growth to maximize return on investment.",
  },

  {
    title: "Optimize Low-Profit Products",

    description:
      "Review pricing strategies and production costs for products with high sales volume but low profitability.",
  },

  {
    title: "Improve Customer Retention",

    description:
      "Develop loyalty programs targeting high-value customers to increase repeat purchases and lifetime value.",
  },

  {
    title: "Enhance Inventory Planning",

    description:
      "Forecast seasonal demand to maintain optimal inventory levels and reduce stock shortages during peak sales periods.",
  },

  {
    title: "Expand High-Growth Markets",

    description:
      "Identify emerging markets with increasing demand and implement targeted expansion strategies.",
  },

  {
    title: "Automate Executive Reporting",

    description:
      "Use Power BI scheduled refresh and dashboards to provide real-time executive reporting and reduce manual reporting effort.",
  },
],
projectOutcomes: [
  {
    metric: "80%",
    title: "Reduction in Manual Reporting",
    description:
      "Automated reporting reduced manual report preparation effort significantly.",
  },

  {
    metric: "60%",
    title: "Faster Report Generation",
    description:
      "Interactive dashboards enabled faster access to business insights.",
  },

  {
    metric: "100%",
    title: "Executive KPI Visibility",
    description:
      "Centralized KPIs into a single interactive dashboard for executives.",
  },

  {
    metric: "20+",
    title: "Business KPIs",
    description:
      "Developed reusable DAX measures to monitor business performance.",
  },

  {
    metric: "5",
    title: "Interactive Dashboards",
    description:
      "Designed dashboards for executive, sales, product, regional, and operational analytics.",
  },

  {
    metric: "1M+",
    title: "Sales Records",
    description:
      "Processed and analyzed more than one million sales records using Power BI.",
  },
],
technicalSkills: [
  "Power BI",
  "Power Query",
  "DAX",
  "SQL",
  "Microsoft Excel",
  "Data Modeling",
  "Star Schema",
  "ETL",
  "Data Cleaning",
  "Data Transformation",
  "Dashboard Design",
  "KPI Development",
  "Business Intelligence",
  "Data Visualization",
  "Analytics",
  "Performance Optimization",
],
projectTimeline: [

{
title:"Business Requirement Analysis",

description:
"Understand business objectives, KPIs, stakeholders, and reporting requirements."

},

{
title:"Data Collection",

description:
"Gather sales datasets from multiple business sources."

},

{
title:"Power Query ETL",

description:
"Clean, transform, merge, append, and optimize raw datasets."

},

{
title:"Data Modeling",

description:
"Create an optimized Star Schema with proper table relationships."

},

{
title:"DAX Development",

description:
"Develop calculated columns, KPIs, measures, and business metrics."

},

{
title:"Dashboard Design",

description:
"Design interactive executive dashboards with drill-down analysis."

},

{
title:"Testing & Validation",

description:
"Validate calculations, visuals, filters, and report performance."

},

{
title:"Deployment",

description:
"Publish reports to Power BI Service and prepare executive reporting."

}

],
challengesSolutions: [

{
challenge:"Data collected from multiple Excel files",

solution:"Merged and appended datasets using Power Query."

},

{
challenge:"Missing values and inconsistent formats",

solution:"Applied cleaning, transformation, and standardization."

},

{
challenge:"Duplicate records",

solution:"Removed duplicates before loading into the data model."

},

{
challenge:"Complex business calculations",

solution:"Created reusable DAX measures for KPIs."

},

{
challenge:"Slow dashboard performance",

solution:"Designed an optimized Star Schema."

},

{
challenge:"Large dataset",

solution:"Optimized relationships and removed unnecessary columns."

},

{
challenge:"Executive reporting",

solution:"Built interactive dashboards with drill-through and slicers."

}

],
lessonsLearned: [
  {
    title: "Data Quality is Critical",
    description:
      "Clean, consistent, and validated data is the foundation of reliable business intelligence and accurate decision-making.",
  },

  {
    title: "Power Query Simplifies ETL",
    description:
      "Using Power Query significantly reduced manual preprocessing by automating data cleaning and transformation tasks.",
  },

  {
    title: "Star Schema Improves Performance",
    description:
      "An optimized Star Schema enhanced report performance, simplified relationships, and made DAX calculations more efficient.",
  },

  {
    title: "DAX Enables Business Logic",
    description:
      "Reusable DAX measures allowed complex KPIs and calculations to be implemented while keeping reports maintainable.",
  },

  {
    title: "Dashboards Should Tell a Story",
    description:
      "Effective dashboards communicate insights clearly, helping decision-makers understand trends and take action quickly.",
  },

  {
    title: "Business Understanding Matters",
    description:
      "Technical implementation becomes more valuable when it is aligned with business goals and stakeholder requirements.",
  },
],
projectSummary: {
  title: "Enterprise Sales Performance Analytics Solution",

  description:
    "This project demonstrates an end-to-end Business Intelligence solution developed using Power BI, Power Query, DAX, and Star Schema data modeling. It transforms raw enterprise sales data into interactive dashboards and actionable insights that support executive decision-making.",

  highlights: [
    "1M+ Sales Records Processed",
    "5 Interactive Dashboards",
    "20 DAX Measures",
    "20 Power Query Transformations",
    "Star Schema Data Model",
    "Executive KPI Reporting",
  ],

  github: "https://github.com/yourusername",

  pbix: "#",

  demo: "#",

  contact: "#",
},
};

export default salesProject;
import { useState } from "react";

import salesProject from "./data/salesProject";

import ProjectHero from "./components/ProjectHero";
import ProjectStats from "./components/ProjectStats";
import DashboardTabs from "./components/DashboardTabs";
import DashboardViewer from "./components/DashboardViewer";
import BusinessChallenge from "./components/BusinessChallenge";
import DatasetOverview from "./components/DatasetOverview";
import ETLPipeline from "./components/ETLPipeline";
import PowerQueryShowcase from "./components/PowerQueryShowcase";
import DataModel from "./components/DataModel";
import DAXShowcase from "./components/DAXShowcase";
import BusinessInsights from "./components/BusinessInsights";
import Recommendations from "./components/Recommendations";
import ProjectOutcomes from "./components/ProjectOutcomes";
import TechnicalSkills from "./components/TechnicalSkills";
import ProjectTimeline from "./components/ProjectTimeline";
import ChallengesSolutions from "./components/ChallengesSolutions";
import LessonsLearned from "./components/LessonsLearned";
import ProjectSummary from "./components/ProjectSummary";


const SalesPerformanceCaseStudy = () => {
  // Active Dashboard Tab
  const [activeTab, setActiveTab] = useState(1);

  // Selected Dashboard
  const selectedDashboard =
    salesProject.dashboards.find(
      (dashboard) => dashboard.id === activeTab
    ) || salesProject.dashboards[0];

  return (
    <section className="space-y-16 rounded-3xl border border-slate-700 bg-slate-950 p-8 lg:p-10">

      {/* Hero Section */}
      <ProjectHero hero={salesProject.hero} />

      {/* Statistics */}
      <ProjectStats statistics={salesProject.statistics} />

      {/* Dashboard Navigation */}
      <DashboardTabs
        dashboards={salesProject.dashboards}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Dashboard Viewer */}
      <DashboardViewer dashboard={selectedDashboard} />

      {/* Business Challenge */}
      <BusinessChallenge
        challenge={salesProject.businessChallenge}
      />

      {/* Dataset Overview */}
      <DatasetOverview
        dataset={salesProject.datasetOverview}
      />

      {/* ETL Pipeline */}
      <ETLPipeline
        pipeline={salesProject.etlPipeline}
      />
<PowerQueryShowcase
  transformations={salesProject.powerQueryTransformations}
/>
<DataModel
  model={salesProject.dataModel}
/>
<DAXShowcase
  measures={salesProject.daxMeasures}
/>
<BusinessInsights
    insights={salesProject.businessInsights}
/>
<Recommendations
    recommendations={salesProject.recommendations}
/>
<ProjectOutcomes
    outcomes={salesProject.projectOutcomes}
/>
<TechnicalSkills
    skills={salesProject.technicalSkills}
/>
<ProjectTimeline
    timeline={salesProject.projectTimeline}
/>
<ChallengesSolutions
    items={salesProject.challengesSolutions}
/>
<LessonsLearned
    lessons={salesProject.lessonsLearned}
/>
<ProjectSummary
    summary={salesProject.projectSummary}
/>
    </section>
  );
};

export default SalesPerformanceCaseStudy;
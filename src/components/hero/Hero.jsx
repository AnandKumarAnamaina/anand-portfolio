import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import FloatingCard from "./FloatingCard";
import SocialIcons from "./SocialIcons";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 pb-2"
    >
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* Left Side */}
          <HeroContent />

          {/* Right Side */}
          <div className="relative flex justify-center items-center min-h-[650px]">

            <HeroImage />

            <FloatingCard
  title="Dashboards"
  value="50+"
  subtitle="Power BI"
  className="top-10 -left-12"
/>

<FloatingCard
  title="Projects"
  value="20+"
  subtitle="Completed"
  className="top-8 -right-12"
/>

<FloatingCard
  title="Experience"
  value="3+"
  subtitle="Years"
  className="bottom-16 -left-10"
/>

<FloatingCard
  title="Students"
  value="300+"
  subtitle="Trained"
  className="bottom-8 -right-10"
/>

          </div>

        </div>

        <SocialIcons />

        <ScrollIndicator />

      </div>
    </section>
  );
}
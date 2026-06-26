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
      className="relative overflow-hidden bg-white pt-24 pb-12"
    >
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10">

          <HeroContent />
<div className="relative flex justify-center">
  <HeroImage />
</div>
        </div>

        <SocialIcons />

        <ScrollIndicator />
      </div>
    </section>
  );
}
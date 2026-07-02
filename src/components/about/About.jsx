import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-8 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-[150px] opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-[150px] opacity-30"></div>

      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[420px_1fr] gap-24 items-center">

        <AboutImage />

        <AboutContent />

      </div>
    </section>
  );
}
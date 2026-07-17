import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-[150px] opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-[150px] opacity-30"></div>

      <div className="max-w-[1280px] mx-auto w-full px-8 grid lg:grid-cols-[360px_1fr] gap-20 items-center">

        <AboutImage />

        <AboutContent />

      </div>
    </section>
  );
}
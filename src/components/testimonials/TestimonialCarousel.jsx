import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import testimonials from "./testimonialsData";

export default function TestimonialCarousel() {

  const trackRef = useRef(null);

  const animationRef = useRef(null);

  const position = useRef(0);

  const [paused, setPaused] = useState(false);

  const items = [...testimonials, ...testimonials];
  const getSpeed = () => {
  if (window.innerWidth < 640) return 30;
  if (window.innerWidth < 1024) return 40;
  return 55;
};

  useEffect(() => {

    const track = trackRef.current;

    if (!track) return;

    let lastTime = performance.now();

    const speed = getSpeed();

    const animate = (time) => {

  const delta = (time - lastTime) / 1000;

  lastTime = time;

  if (!paused) {

    position.current -= speed * delta;

    const halfWidth = track.scrollWidth / 2;

    if (Math.abs(position.current) >= halfWidth) {
      position.current += halfWidth;
    }

    track.style.transform = `translate3d(${position.current}px,0,0)`;

  }

  animationRef.current = requestAnimationFrame(animate);

};

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);

  }, [paused]);

  return (

    <section className="relative overflow-hidden py-8">

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-slate-100 via-slate-100/80 to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-slate-100 via-slate-100/80 to-transparent" />

      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <div
          ref={trackRef}
          className="flex gap-8 will-change-transform"
        >

          {items.map((item, index) => (

            <motion.article
              key={`${item.id}-${index}`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: (index % testimonials.length) * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                 rotate: -0.5,
              }}
              className="
                group
                w-[340px]
                md:w-[380px]
                lg:w-[400px]
                flex-shrink-0
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-lg
                transition-all
                duration-500
                hover:border-blue-200
                hover:shadow-[0_30px_60px_rgba(37,99,235,.18)]
              "
            >

              {/* Gradient Bar */}

              <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500" />

              {/* Card Body */}

              <div className="relative flex h-full flex-col overflow-hidden p-8">

                {/* Premium Glow */}

                <div className="
                  absolute
                  -top-20
                  -right-20
                  h-44
                  w-44
                  rounded-full
                  bg-blue-200/30
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:scale-125
                " />

                {/* Continue in Part 2 */}
                {/* Rating + Verified */}

<div className="relative z-10 mb-6 flex items-center justify-between">

  <div className="flex items-center gap-1">
    {[...Array(item.rating)].map((_, i) => (
      <motion.svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: i * 0.08,
          duration: 0.25,
        }}
        className="h-5 w-5 text-amber-400"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
      </motion.svg>
    ))}
  </div>

  <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1 text-xs font-semibold text-green-700 shadow-sm">
    <span className="h-2 w-2 rounded-full bg-green-500"></span>
    Verified
  </span>

</div>

{/* Decorative Quote */}

<div className="pointer-events-none absolute right-6 top-4 select-none text-[120px] font-serif font-bold leading-none text-slate-100 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
  “
</div>

{/* Testimonial */}

<p className="relative z-10 min-h-[240px] text-[15px] italic leading-8 text-slate-600">
  {item.feedback}
</p>

{/* Divider */}

<div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

{/* Student */}

<div className="relative z-10 mt-auto flex items-center gap-5">

  {/* Profile */}

  <div className="relative flex-shrink-0">

    <img
      src={item.image}
      alt={item.name}
      className="
        h-26
        w-26
        rounded-full
        object-cover
        border-4
        border-white
        shadow-xl
        transition-all
        duration-500
        group-hover:scale-110
      "
    />

    <span
      className="
        absolute
        bottom-1
        right-1
        h-5
        w-5
        rounded-full
        border-2
        border-white
        bg-green-500
      "
    />

  </div>

  {/* Details */}

  <div className="flex-1">

    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
      {item.name}
    </h3>

    <p className="mt-1 text-sm text-slate-500">
      {item.role}
    </p>

    <span className="mt-3 inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
      🎓 {item.course}
    </span>

  </div>

</div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>

  );

}
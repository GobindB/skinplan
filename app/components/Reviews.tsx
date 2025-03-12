import { motion, useMotionValue, useTransform, useAnimation, PanInfo } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  const reviews = [
    {
      name: "Sarah K.",
      text: "This app completely transformed my skincare routine. The personalized recommendations are spot-on!",
      rating: 5,
      date: "2 days ago"
    },
    {
      name: "Michael L.",
      text: "Finally found a routine that works for my sensitive skin. The progress tracking is amazing.",
      rating: 5,
      date: "1 week ago"
    },
    {
      name: "Jessica W.",
      text: "Love how the app adapts to my skin's changing needs. The reminders are super helpful!",
      rating: 5,
      date: "2 weeks ago"
    }
  ];

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      const direction = info.offset.x > 0 ? -1 : 1;
      const newIndex = Math.min(Math.max(currentIndex + direction, 0), reviews.length - 1);
      setCurrentIndex(newIndex);
    }
    controls.start({ x: 0 });
  };

  return (
    <div className="w-full overflow-hidden" ref={constraintsRef}>
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={controls}
        className="flex touch-pan-x"
        style={{ x }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className={`w-full flex-shrink-0 p-4 ${
              index === currentIndex ? 'opacity-100' : 'opacity-50'
            }`}
            initial={false}
            animate={{ scale: index === currentIndex ? 1 : 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 rounded-xl bg-[#1A1A1E] border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-sm font-medium">{review.name}</h3>
                  <p className="text-xs text-white/40">{review.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-[#FF3BFF]">★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-white/60">{review.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-[#FF3BFF]'
                : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 
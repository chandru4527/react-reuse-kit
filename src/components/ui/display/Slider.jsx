import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { twMerge } from "tailwind-merge";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = ({
  slides = [],
  navigation = false,
  pagination = false,
  autoplay = true,
  loop = true,
  speed = 600,
  autoplayDelay = 4000,
  effect = "slide",
  direction = "horizontal",
  slidesPerView = 1,
  spaceBetween = 0,
  centeredSlides = false,
  grabCursor = false,
  keyboard = false,
  mousewheel = false,
  pauseOnMouseEnter = true,
  breakpoints,
  className = "",
  imageClassName = "",
  navigationClassName = "",
  prevButtonClassName = "",
  nextButtonClassName = "",
  paginationClassName = "",
  ...props
}) => {
  const autoplayConfig = autoplay
    ? {
      delay: autoplayDelay,
      disableOnInteraction: false,
      pauseOnMouseEnter,
    }
    : undefined;

  const modules = [
    navigation && Navigation,
    pagination && Pagination,
    autoplay && Autoplay,
    effect === "fade" && EffectFade,
    keyboard && Keyboard,
    mousewheel && Mousewheel,
  ].filter(Boolean);

  return (
    <div className={twMerge("relative w-full", className)}>
      <Swiper
        modules={modules}
        slidesPerView={effect === "fade" ? 1 : slidesPerView}
        spaceBetween={effect === "fade" ? 0 : spaceBetween}
        centeredSlides={centeredSlides}
        grabCursor={grabCursor}
        direction={direction}
        loop={loop}
        speed={speed}
        effect={effect}
        autoplay={autoplayConfig}
        breakpoints={breakpoints}
        keyboard={keyboard ? { enabled: true } : false}
        mousewheel={mousewheel ? { forceToAxis: true } : false}
        fadeEffect={{
          crossFade: true,
        }}
        navigation={
          navigation
            ? {
              prevEl: ".slider-prev",
              nextEl: ".slider-next",
            }
            : false
        }
        pagination={
          pagination
            ? {
              clickable: true,
              el: ".slider-pagination",
            }
            : false
        }
        {...props}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide?.id ?? index}>
            <img
              src={slide?.image || slide}
              alt={slide?.alt || `Banner ${index + 1}`}
              className={twMerge(
                "h-full w-full object-cover",
                imageClassName
              )}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {navigation && (
        <>
          <button
            type="button"
            aria-label="Previous banner"
            className={twMerge(
              "slider-prev absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:bg-white",
              navigationClassName,
              prevButtonClassName
            )}
          >
            <MdChevronLeft size={24} />
          </button>

          <button
            type="button"
            aria-label="Next banner"
            className={twMerge(
              "slider-next absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:bg-white",
              navigationClassName,
              nextButtonClassName
            )}
          >
            <MdChevronRight size={24} />
          </button>
        </>
      )}

      {pagination && (
        <div
          className={twMerge(
            "slider-pagination absolute bottom-4 left-0 z-10 flex w-full justify-center",
            paginationClassName
          )}
        />
      )}
    </div>
  );
};

export default Slider;
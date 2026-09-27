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
import Button from "../buttons/Button";
import { twMerge } from "tailwind-merge";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/**
 * @param {Object} props
 * @param {Array<string | Object>} [props.slides=[]]
 * @param {boolean} [props.navigation=false]
 * @param {boolean} [props.pagination=false]
 * @param {boolean} [props.autoplay=true]
 * @param {boolean} [props.loop=true]
 * @param {number} [props.speed=600]
 * @param {number} [props.autoplayDelay=4000]
 * @param {"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"} [props.effect="slide"]
 * @param {"horizontal" | "vertical"} [props.direction="horizontal"]
 * @param {number | "auto"} [props.slidesPerView=1]
 * @param {number} [props.spaceBetween=0]
 * @param {boolean} [props.centeredSlides=false]
 * @param {boolean} [props.grabCursor=false]
 * @param {boolean} [props.keyboard=false]
 * @param {boolean} [props.mousewheel=false]
 * @param {boolean} [props.pauseOnMouseEnter=true]
 * @param {Object} [props.breakpoints]
 * @param {string} [props.className=""]
 * @param {string} [props.containerClassName=""]
 * @param {string} [props.slideClassName=""]
 * @param {string} [props.imageClassName=""]
 * @param {string} [props.navigationClassName=""]
 * @param {string} [props.prevButtonClassName=""]
 * @param {string} [props.nextButtonClassName=""]
 * @param {string} [props.paginationClassName=""]
 */

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
  containerClassName = "",
  slideClassName = "",
  imageClassName = "",

  navigationClassName = "",
  prevButtonClassName = "",
  nextButtonClassName = "",

  paginationClassName = "",

  ...props
}) => {
  const modules = [
    navigation && Navigation,
    pagination && Pagination,
    autoplay && Autoplay,
    effect === "fade" && EffectFade,
    keyboard && Keyboard,
    mousewheel && Mousewheel,
  ].filter(Boolean);

  const autoplayConfig = autoplay
    ? {
      delay: autoplayDelay,
      disableOnInteraction: false,
      pauseOnMouseEnter,
    }
    : undefined;

  const getSlideData = (slide, index) => {
    if (typeof slide === "string") {
      return {
        id: index,
        image: slide,
        alt: `Slide ${index + 1}`,
      };
    }

    return {
      id: slide?.id ?? index,
      image: slide?.image,
      alt: slide?.alt || `Slide ${index + 1}`,
    };
  };

  return (
    <div
      className={twMerge(
        "relative w-full overflow-hidden",
        containerClassName,
        className
      )}
    >
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
        className="h-full w-full"
        {...props}
      >
        {slides.map((slide, index) => {
          const {
            id,
            image,
            alt,
          } = getSlideData(slide, index);

          return (
            <SwiperSlide
              key={id}
              className={slideClassName}
            >
              {image && (
                <img
                  src={image}
                  alt={alt}
                  className={twMerge(
                    "h-full w-full object-cover",
                    imageClassName
                  )}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      {navigation && (
        <>
          <Button
            type="button"
            variant="normal"
            size="xs"
            shape="full"
            className={twMerge(
              "slider-prev absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 bg-white/90 p-0 text-gray-800 shadow-md hover:bg-white",
              navigationClassName,
              prevButtonClassName
            )}
            aria-label="Previous slide"
          >
            <MdChevronLeft size={24} />
          </Button>

          <Button
            type="button"
            variant="normal"
            size="xs"
            shape="full"
            className={twMerge(
              "slider-next absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 bg-white/90 p-0 text-gray-800 shadow-md hover:bg-white",
              navigationClassName,
              nextButtonClassName
            )}
            aria-label="Next slide"
          >
            <MdChevronRight size={24} />
          </Button>
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
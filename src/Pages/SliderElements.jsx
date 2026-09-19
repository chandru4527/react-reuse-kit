import React from "react";
import Slider from "../components/ui/display/Slider";

const SliderElements = () => {
  const images = [
    {
      id: 1,
      image:
        "https://c4.wallpaperflare.com/wallpaper/229/61/86/spy-x-family-yor-forger-hd-wallpaper-preview.jpg",
      title: "Explore New Collection",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj5s_eQvOmGlbkkXRTttSx1vKXG6EKghSYNfrX67_XNPW3t80lrhj30ck&s=10",
      title: "Latest Fashion Trends",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMpUW4QBSefnOjBENcfexmLThv4dlHJZhg81vwJGYFNHWOiE8QjZ6duQ&s=10",
      title: "Discover Something New",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDjte9NovgNwSAUxFVueAihOfrPJPBH4DjNnDtzUXcu2DyeDwCyFsP8Jg9&s=10",
      title: "Special Offers",
    },
  ];

  return (
    <div className="flex flex-col justify-center p-10">
      <div className="w-full max-w-3xl mb-10">
        <Slider
          slides={images}
          effect="slide"
          autoplay
          loop
          navigation
          pagination
          speed={600}
          autoplayDelay={3000}
        />
      </div>

      <div className="w-full max-w-3xl mb-10">
        <Slider
          slides={images}
          navigation={false}
          effect="fade"
          autoplayDelay={3000}
          speed={600}
          className="h-56"
        />
      </div>

      {/* <div className="w-full max-w-3xl ">
        <Slider
          slides={images}
          effect="fade"
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides
          grabCursor
          keyboard
          mousewheel
          pauseOnMouseEnter
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        />
      </div> */}
    </div>
  );
};

export default SliderElements;
import Slider from "../components/display/Slider";

const SliderElements = () => {
  const images = [
    {
      id: 1,
      image:
        "https://c4.wallpaperflare.com/wallpaper/229/61/86/spy-x-family-yor-forger-hd-wallpaper-preview.jpg",
      alt: "Yor Forger",
      title: "Explore New Collection",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj5s_eQvOmGlbkkXRTttSx1vKXG6EKghSYNfrX67_XNPW3t80lrhj30ck&s=10",
      alt: "Fashion",
      title: "Latest Fashion Trends",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMpUW4QBSefnOjBENcfexmLThv4dlHJZhg81vwJGYFNHWOiE8QjZ6duQ&s=10",
      alt: "New Collection",
      title: "Discover Something New",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDjte9NovgNwSAUxFVueAihOfrPJPBH4DjNnDtzUXcu2DyeDwCyFsP8Jg9&s=10",
      alt: "Special Offers",
      title: "Special Offers",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900">
            Slider Component
          </h1>

          <p className="mt-2 text-gray-500">
            Reusable • Responsive • Built with React, Swiper & Tailwind CSS
          </p>
        </div>

        {/* 1. Basic Slider */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            1. Basic Slider
          </h2>

          <div className="h-72 w-full overflow-hidden rounded-xl">
            <Slider
              slides={images}
              effect="slide"
              navigation
              pagination
              autoplay
              loop
              speed={600}
              autoplayDelay={3000}
            />
          </div>
        </section>

        {/* 2. Fade Slider */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            2. Fade Effect
          </h2>

          <div className="h-72 w-full overflow-hidden rounded-xl">
            <Slider
              slides={images}
              effect="fade"
              navigation
              pagination
              autoplay
              loop
              speed={800}
              autoplayDelay={3000}
            />
          </div>
        </section>

        {/* 3. Multiple Slides */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            3. Multiple Slides
          </h2>

          <div className="h-64 w-full overflow-hidden rounded-xl">
            <Slider
              slides={images}
              slidesPerView={3}
              spaceBetween={20}
              navigation
              pagination
              loop
              autoplay={false}
              grabCursor
            />
          </div>
        </section>

        {/* 4. Responsive Breakpoints */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            4. Responsive Breakpoints
          </h2>

          <div className="h-64 w-full overflow-hidden rounded-xl">
            <Slider
              slides={images}
              slidesPerView={1}
              spaceBetween={16}
              navigation
              pagination
              loop
              autoplay={false}
              grabCursor
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            />
          </div>
        </section>

        {/* 5. Centered Slides */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            5. Centered Slides
          </h2>

          <div className="h-64 w-full overflow-hidden rounded-xl">
            <Slider
              slides={images}
              slidesPerView={2}
              spaceBetween={20}
              centeredSlides
              navigation
              pagination
              loop
              autoplay={false}
              grabCursor
            />
          </div>
        </section>

        {/* 6. Autoplay */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            6. Autoplay
          </h2>

          <div className="h-64 w-full overflow-hidden rounded-xl">
            <Slider
              slides={images}
              autoplay
              autoplayDelay={1500}
              pauseOnMouseEnter
              loop
              pagination
            />
          </div>
        </section>

        {/* 7. Keyboard & Mousewheel */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            7. Keyboard & Mousewheel
          </h2>

          <div className="h-64 w-full overflow-hidden rounded-xl">
            <Slider
              slides={images}
              navigation
              pagination
              autoplay={false}
              loop
              keyboard
              mousewheel
              grabCursor
            />
          </div>
        </section>

        {/* 8. Custom Navigation */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            8. Custom Navigation
          </h2>

          <div className="h-64 w-full overflow-hidden rounded-xl">
            <Slider
              slides={images}
              navigation
              pagination
              autoplay={false}
              loop
              navigationClassName="!bg-black/50 !text-white"
              prevButtonClassName="!left-2"
              nextButtonClassName="!right-2"
            />
          </div>
        </section>

        {/* 9. Vertical Slider */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            9. Vertical Slider
          </h2>

          <div className="h-80 w-full max-w-md overflow-hidden rounded-xl">
            <Slider
              slides={images}
              direction="vertical"
              navigation
              pagination
              autoplay
              loop
              autoplayDelay={2500}
            />
          </div>
        </section>

        {/* 10. No Navigation / Pagination */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            10. Autoplay Only
          </h2>

          <div className="h-64 w-full overflow-hidden rounded-xl">
            <Slider
              slides={images}
              autoplay
              loop
              navigation={false}
              pagination={false}
              autoplayDelay={2000}
            />
          </div>
        </section>

        {/* 11. Custom Image Styling */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            11. Custom Image Styling
          </h2>

          <div className="h-72 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-2">
            <Slider
              slides={images}
              navigation
              pagination
              autoplay={false}
              loop
              imageClassName="rounded-xl object-contain"
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default SliderElements;
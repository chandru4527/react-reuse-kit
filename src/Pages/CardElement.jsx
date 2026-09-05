import React from "react";
import {
  MdShoppingCart,
  MdFavorite,
  MdPeople,
  MdShoppingBag,
  MdLightbulb,
  MdFolder,
  MdDelete,
  MdEdit,
  MdArrowForward,
} from "react-icons/md";

import Card from "../components/ui/display/Card";

const CardElements = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">

      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPlO36q9_kyBPRD2G08hbwojbQCN7ZRrNcVtWLyU1X55yY1OAZj6B0G3G&s=10"
        imageAlt="Yor Forger Anime Girl"
        imageClassName="h-70 object-cover object-center"
        width="md"
        title="Yor Forger"
        description="A kind and elegant woman who secretly lives a dangerous double life as a highly skilled assassin,."
        actions={[
          {
            label: 'like',
            icon: <MdFavorite />
          }
        ]}
      />


      {/* 1. Product Card */}
      <Card
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        imageAlt="Red Shoes"
        imageClassName="h-52"
        badge="20% OFF"
        badgeClassName="bg-red-100 text-red-600"
        title="Nike Running Shoes"
        description="Comfortable and stylish running shoes for everyday use."
        actions={[
          {
            label: "Add to Cart",
            icon: <MdShoppingCart />,
            variant: "primary",
            className: 'flex justify-center items-center',
            onClick: () => console.log("Added"),
          },
          {
            label: "Favorite",
            icon: <MdFavorite />,
            variant: "outline",
            onClick: () => console.log("Favorite"),
          },
        ]}
      >
        <p className="text-2xl font-bold text-blue-600">$99.00</p>
      </Card>

      {/* 2. Statistics Card */}
      <Card
        icon={<MdPeople size={26} />}
        iconClassName="bg-blue-100 text-blue-600"
        title="Total Users"
        description="Registered users in your application"
        className='flex'
      >
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold">12,540</h2>

          <span className="text-sm font-medium text-green-600">
            ↑ 12.5%
          </span>
        </div>
      </Card>

      {/* 3. Orders Card */}
      <Card
        icon={<MdShoppingBag size={26} />}
        iconClassName="bg-green-100 text-green-600"
        title="Total Orders"
        description="Total orders this month"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold">1,248</h2>

          <span className="text-sm font-medium text-green-600">
            ↑ 8.2%
          </span>
        </div>
      </Card>

      {/* 4. Image Card */}
      <Card
        image="https://images.unsplash.com/photo-1500534623283-312aade485b7"
        imageAlt="Nature"
        imageClassName="h-52"
        title="Beautiful Nature"
        description="Explore beautiful places and discover amazing views around the world."
        actions={[
          {
            label: "Read More",
            icon: <MdArrowForward />,
            // className: "border border-blue-600 text-blue-600 hover:bg-blue-50",
          },
        ]}
      />

      {/* 5. Header Footer Card */}
      <Card
        header={
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Recent Orders</h2>

            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
        }
        footer={
          <p className="text-center text-sm text-gray-500">
            Last updated: Today
          </p>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Order #12345</span>
            <span className="font-semibold">$120.00</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Order #12346</span>
            <span className="font-semibold">$85.00</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Order #12347</span>
            <span className="font-semibold">$200.00</span>
          </div>
        </div>
      </Card>

      {/* 6. Profile Card */}
      <Card
        image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
        imageAlt="Profile"
        imageClassName="h-52"
        title="John Doe"
        description="UI/UX Designer"
        bodyClassName="text-center"
        actions={[
          {
            label: "View Profile",
            className: "w-full bg-blue-600 text-white hover:bg-blue-700",
          },
        ]}
      >
        <p className="text-sm text-gray-500">
          Passionate designer who loves creating beautiful user experiences.
        </p>
      </Card>

      {/* 7. Blog Card */}
      <Card
        badge="Technology"
        badgeClassName="bg-purple-100 text-purple-600"
        title="The Future of Web Development"
        description="Explore the latest technologies shaping the future of web development."
        footer={
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Aug 30, 2026</span>

            <button className="flex items-center gap-1 text-sm font-medium text-blue-600">
              Read More <MdArrowForward />
            </button>
          </div>
        }
      />

      {/* 8. Clickable Card */}
      <Card
        icon={<MdLightbulb size={28} />}
        iconClassName="bg-yellow-100 text-yellow-600"
        title="Tips & Tricks"
        description="Useful tips to improve your productivity and workflow."
        clickable
        onClick={() => console.log("Card clicked")}
        className="hover:border-yellow-400"
      >
        <span className="flex items-center gap-1 font-medium text-yellow-600">
          Learn More <MdArrowForward />
        </span>
      </Card>

      {/* 9. Multiple Actions Card */}
      <Card
        icon={<MdFolder size={26} />}
        iconClassName="bg-green-100 text-green-600"
        title="Project Management"
        description="Manage your projects, tasks and team collaboration in one place."
        actions={[
          {
            label: "View Details",
            // className: "border border-blue-600 text-blue-600 hover:bg-blue-50",
          },
          {
            label: "Edit",
            icon: <MdEdit />,
            // className: "border border-gray-300 text-gray-700 hover:bg-gray-100",
          },
          {
            label: "Delete",
            icon: <MdDelete />,
            // className: "border border-red-500 text-red-500 hover:bg-red-50",
          },
        ]}
      />

      {/* 10. Loading Card */}
      <Card loading />

      {/* 11. Image Bottom Card */}
      <Card
        image="https://images.unsplash.com/photo-1444723121867-7a241cacace9"
        imageAlt="City"
        imagePosition="bottom"
        imageClassName="h-48"
        title="City Lights"
        description="The city comes alive at night with beautiful lights and endless energy."
        actions={[
          {
            label: "Explore Now",
            className: "border border-blue-600 text-blue-600 hover:bg-blue-50",
          },
        ]}
      />

      {/* 12. Minimal Card */}
      <Card
        icon={<MdFavorite size={26} />}
        iconClassName="bg-purple-100 text-purple-600"
        title="Bookmarks"
        description="Save your important bookmarks and access them anywhere."
      />
    </div>
  );
};

export default CardElements;
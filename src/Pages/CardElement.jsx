import {
  MdArrowForward,
  MdDelete,
  MdEdit,
  MdFavorite,
  MdFolder,
  MdGroup,
  MdHistory,
  MdLightbulb,
  MdRestaurant,
  MdShoppingBag,
  MdShoppingCart,
  MdVolunteerActivism,
} from "react-icons/md";

import Card from "../components/display/Card";

const CardElements = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">

      {/* 1. Profile / Image Card */}
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPlO36q9_kyBPRD2G08hbwojbQCN7ZRrNcVtWLyU1X55yY1OAZj6B0G3G&s=10"
        imageAlt="Yor Forger Anime Girl"
        imageClassName="h-70 object-cover object-center"
        width="md"
        title="Yor Forger"
        description="A kind and elegant woman who secretly lives a dangerous double life as a highly skilled assassin."
        descriptionClassName="line-clamp-2"
        actions={[
          {
            label: "Like",
            icon: MdFavorite,
            iconPosition: "start",
            variant: "outline",
            onClick: () => console.log("Liked"),
          },
        ]}
      />

      {/* 2. Product Card */}
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
            icon: MdShoppingCart,
            iconPosition: "start",
            variant: "primary",
            onClick: () => console.log("Added"),
          },
          {
            label: "Favorite",
            icon: MdFavorite,
            iconPosition: "start",
            variant: "outline",
            onClick: () => console.log("Favorite"),
          },
        ]}
      >
        <p className="text-2xl font-bold text-blue-600">$99.00</p>
      </Card>

      {/* 3. Statistics Cards */}
      <Card
        variant="stat"
        title="Total Users"
        value="53"
        icon={<MdGroup />}
        iconClassName="bg-blue-100 text-blue-600"
      />

      <Card
        variant="stat"
        title="Total Chefs"
        value="36"
        icon={<MdRestaurant />}
        iconClassName="bg-green-100 text-green-600"
      />

      <Card
        variant="stat"
        title="Total Donations"
        value="52"
        icon={<MdVolunteerActivism />}
        iconClassName="bg-pink-100 text-pink-600"
      />

      <Card
        variant="stat"
        title="Yesterday Bookings"
        value="0"
        icon={<MdHistory />}
        iconClassName="bg-orange-100 text-orange-600"
      />

      {/* 4. Orders Card */}
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

      {/* 5. Image Card */}
      <Card
        image="https://images.unsplash.com/photo-1500534623283-312aade485b7"
        imageAlt="Nature"
        imageClassName="h-52"
        title="Beautiful Nature"
        description="Explore beautiful places and discover amazing views around the world."
        actions={[
          {
            label: "Read More",
            icon: MdArrowForward,
            iconPosition: "end",
            variant: "outline",
          },
        ]}
      />

      {/* 6. Header / Footer Card */}
      <Card
        header={
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Recent Orders</h2>

            <button
              type="button"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
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

      {/* 7. Profile Card */}
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
            variant: "primary",
            className: "w-full",
          },
        ]}
      >
        <p className="text-sm text-gray-500">
          Passionate designer who loves creating beautiful user
          experiences.
        </p>
      </Card>

      {/* 8. Blog Card */}
      <Card
        badge="Technology"
        badgeClassName="bg-purple-100 text-purple-600"
        title="The Future of Web Development"
        description="Explore the latest technologies shaping the future of web development."
        footer={
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Aug 30, 2026
            </span>

            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Read More
              <MdArrowForward />
            </button>
          </div>
        }
      />

      {/* 9. Clickable Card */}
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
          Learn More
          <MdArrowForward />
        </span>
      </Card>

      {/* 10. Multiple Actions Card */}
      <Card
        icon={<MdFolder size={26} />}
        iconClassName="bg-green-100 text-green-600"
        title="Project Management"
        description="Manage your projects, tasks and team collaboration in one place."
        actions={[
          {
            label: "View Details",
            variant: "primary",
          },
          {
            label: "Edit",
            icon: MdEdit,
            iconPosition: "start",
            variant: "outline",
          },
          {
            label: "Delete",
            icon: MdDelete,
            iconPosition: "start",
            variant: "danger",
          },
        ]}
      />

      {/* 11. Loading Card */}
      <Card loading />

      {/* 12. Image Bottom Card */}
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
            icon: MdArrowForward,
            iconPosition: "end",
            variant: "outline",
          },
        ]}
      />

      {/* 13. Minimal Card */}
      <Card
        icon={<MdFavorite size={26} />}
        iconClassName="bg-purple-100 text-purple-600"
        title="Bookmarks"
        description="Save your important bookmarks and access them anywhere."
      />

      {/* 14. Dark Mode Card */}
      <Card
        darkMode
        icon={<MdLightbulb size={26} />}
        iconClassName="bg-yellow-500/20 text-yellow-400"
        title="Dark Mode"
        description="This card demonstrates the reusable dark mode option."
        actions={[
          {
            label: "Explore",
            icon: MdArrowForward,
            iconPosition: "end",
            variant: "outline",
          },
        ]}
      />

      {/* 15. Custom Width Card */}
      <Card
        width="sm"
        title="Small Width"
        description="Reusable card width can be controlled through the width prop."
        className="border-blue-200"
      />

      {/* 16. Custom Card */}
      <Card
        title="Custom Styled Card"
        description="Customize the card using className and individual class props."
        className="border-2 border-dashed border-purple-300 shadow-none"
        titleClassName="text-purple-700"
        descriptionClassName="text-purple-500"
        bodyClassName="bg-purple-50"
        actions={[
          {
            label: "Continue",
            icon: MdArrowForward,
            iconPosition: "end",
            variant: "primary",
          },
        ]}
      />

    </div>
  );
};

export default CardElements;
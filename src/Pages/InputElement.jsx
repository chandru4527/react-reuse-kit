import Input from "../components/forms/Input";
import {
  MdEmail,
  MdSearch,
  MdPerson,
  MdLock,
  MdPhone,
  MdBusiness,
  MdCalendarToday,
  MdAccessTime,
  MdNumbers,
  MdStar,
} from "react-icons/md";

const InputElement = () => {
  return (
    <div className="min-h-screen flex-1 bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Input Components
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Basic, icons, password, validation, custom styling
            and different input types
          </p>
        </div>

        {/* Input Examples */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {/* 1. Basic Input */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              1. Basic Input
            </h2>

            <Input
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
            />
          </div>

          {/* 2. Left Icon */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              2. Left Icon
            </h2>

            <Input
              type="email"
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              icon={MdEmail}
              iconClassName="text-blue-600"
            />
          </div>

          {/* 3. Right Icon */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              3. Right Icon
            </h2>

            <Input
              label="Search"
              name="search"
              placeholder="Search anything..."
              icon={MdSearch}
              iconPosition="right"
              iconClassName="text-blue-600"
            />
          </div>

          {/* 4. Custom Icon */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              4. Custom Icon
            </h2>

            <Input
              label="Username"
              name="username"
              placeholder="Enter username"
              icon={MdPerson}
              iconSize={24}
              iconClassName="text-purple-500"
            />
          </div>

          {/* 5. Password */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              5. Password Input
            </h2>

            <Input
              type="password"
              label="Password"
              name="password"
              placeholder="Enter password"
              icon={MdLock}
              iconClassName="text-blue-600"
            />
          </div>

          {/* 6. Error */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              6. Input with Error
            </h2>

            <Input
              type="email"
              label="Email"
              name="email"
              placeholder="Enter email"
              icon={MdEmail}
              iconClassName="text-red-500"
              error="Email is required"
            />
          </div>

          {/* 7. Custom Error */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              7. Custom Error Style
            </h2>

            <Input
              label="Username"
              name="username"
              placeholder="Enter username"
              error="Username already exists"
              errorClassName="font-medium text-orange-500"
            />
          </div>

          {/* 8. Helper Text */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              8. Helper Text
            </h2>

            <Input
              type="tel"
              label="Mobile Number"
              name="mobile"
              placeholder="Enter mobile number"
              icon={MdPhone}
              iconClassName="text-blue-600"
              helperText="We'll never share your number."
            />
          </div>

          {/* 9. Custom Helper */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              9. Custom Helper Style
            </h2>

            <Input
              label="Password"
              type="password"
              name="passwordInfo"
              placeholder="Create password"
              helperText="Use at least 8 characters."
              helperTextClassName="text-blue-500"
            />
          </div>

          {/* 10. Disabled */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              10. Disabled Input
            </h2>

            <Input
              label="Organization"
              name="organization"
              value="Cookedin Technologies"
              icon={MdBusiness}
              iconClassName="text-gray-400"
              disabled
              readOnly
            />
          </div>

          {/* 11. Read Only */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              11. Read Only Input
            </h2>

            <Input
              label="User ID"
              name="userId"
              value="USR-10245"
              readOnly
              inputClassName="bg-gray-100"
            />
          </div>

          {/* 12. Date */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              12. Date Input
            </h2>

            <Input
              type="date"
              label="Date"
              name="date"
              icon={MdCalendarToday}
              iconClassName="text-blue-600"
            />
          </div>

          {/* 13. Time */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              13. Time Input
            </h2>

            <Input
              type="time"
              label="Time"
              name="time"
              icon={MdAccessTime}
              iconClassName="text-blue-600"
            />
          </div>

          {/* 14. Number */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              14. Number Input
            </h2>

            <Input
              type="number"
              label="Quantity"
              name="quantity"
              placeholder="Enter quantity"
              icon={MdNumbers}
              iconClassName="text-blue-600"
              min={1}
              max={100}
            />
          </div>

          {/* 15. Search */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              15. Search Input
            </h2>

            <Input
              type="search"
              label="Search"
              name="searchInput"
              placeholder="Search products..."
              icon={MdSearch}
              iconClassName="text-gray-500"
            />
          </div>

          {/* 16. URL */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              16. URL Input
            </h2>

            <Input
              type="url"
              label="Website"
              name="website"
              placeholder="https://example.com"
            />
          </div>

          {/* 17. Custom Styling */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              17. Custom Styling
            </h2>

            <Input
              label="Custom Styled Input"
              name="custom"
              placeholder="Custom style"
              icon={MdStar}
              iconSize={24}
              iconClassName="text-purple-500"
              inputClassName="border-purple-500 focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          {/* 18. Custom Label */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              18. Custom Label
            </h2>

            <Input
              label="Username"
              name="customLabel"
              placeholder="Enter username"
              labelClassName="font-semibold text-blue-600"
            />
          </div>

          {/* 19. No Border */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              19. No Border
            </h2>

            <Input
              label="Username"
              name="noBorder"
              placeholder="Enter username"
              inputClassName="border-0 bg-transparent shadow-none focus:border-0"
            />
          </div>

          {/* 20. Bottom Border */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              20. Bottom Border
            </h2>

            <Input
              label="Username"
              name="bottomBorder"
              placeholder="Enter username"
              inputClassName="rounded-none border-x-0 border-t-0 border-b-2 border-blue-500 focus:border-blue-600"
            />
          </div>

          {/* 21. Required */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              21. Required Input
            </h2>

            <Input
              type="email"
              label="Email"
              name="requiredEmail"
              placeholder="Enter your email"
              icon={MdEmail}
              iconClassName="text-blue-600"
              required
            />
          </div>

          {/* 22. Password Without Icon */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              22. Password Without Icon
            </h2>

            <Input
              type="password"
              label="Password"
              name="simplePassword"
              placeholder="Enter password"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default InputElement;
import Input from "../components/ui/forms/Input";
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Input Components
          </h1>
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
              2. Input with Left Icon
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
              3. Input with Right Icon
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
              iconClassName="text-blue-500 text-xl"
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

          {/* 7. Helper Text */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              7. Input with Helper Text
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

          {/* 8. Disabled */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              8. Disabled Input
            </h2>

            <Input
              label="Organization"
              name="organization"
              value="Cookedin Technologies"
              icon={MdBusiness}
              iconClassName="text-blue-600"
              disabled
              readOnly
            />
          </div>

          {/* 9. Date */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              9. Date Input
            </h2>

            <Input
              type="date"
              label="Date"
              name="date"
              icon={MdCalendarToday}
              iconClassName="text-blue-600"
            />
          </div>

          {/* 10. Time */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              10. Time Input
            </h2>

            <Input
              type="time"
              label="Time"
              name="time"
              icon={MdAccessTime}
              iconClassName="text-blue-600"
            />
          </div>

          {/* 11. Number */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              11. Number Input
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

          {/* 12. Custom Styling */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              12. Custom Styling
            </h2>

            <Input
              label="Custom Styled Input"
              name="custom"
              placeholder="Custom style"
              icon={MdStar}
              iconClassName="text-purple-500 text-xl"
              inputClassName="border-purple-500 focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          {/* 13. Custom Label */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              13. Custom Label
            </h2>

            <Input
              label="Username"
              name="username"
              placeholder="Enter username"
              labelClassName="text-blue-600 font-semibold"
            />
          </div>

          {/* 14. No Border */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              14. No Border
            </h2>

            <Input
              label="Username"
              name="username"
              placeholder="Enter username"
              inputClassName="border-0 bg-transparent shadow-none focus:border-0"
            />
          </div>

          {/* 15. Bottom Border */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              15. Bottom Border
            </h2>

            <Input
              label="Username"
              name="username"
              placeholder="Enter username"
              inputClassName="rounded-none border-x-0 border-t-0 border-b-2 border-blue-500 focus:border-blue-600"
            />
          </div>

          {/* 16. Required Input */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              16. Required Input
            </h2>

            <Input
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
              icon={MdEmail}
              iconClassName="text-blue-600"
              required
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default InputElement;
import React from "react";
import Input from "../components/ui/forms/Input";
import {
  MdEmail, MdSearch, MdPerson, MdLock, MdPhone, MdBusiness, MdCalendarToday,
  MdAccessTime, MdNumbers, MdStar,
} from "react-icons/md";

const InputElement = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900"> Input Components </h1>
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
              placeholder="Enter your email"
              icon={MdEmail}
              iconClassName='text-blue-600'
            />

          </div>

          {/* 3. Right Icon */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              3. Input with Right Icon
            </h2>

            <Input
              label="Search"
              placeholder="Search anything..."
              icon={MdSearch}
              iconClassName='text-blue-600'
              iconPosition="right"
            />

          </div>

          {/* 4. Custom Icon Color */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              4. Icon Color Change
            </h2>

            <Input
              label="Username"
              placeholder="Enter username"
              icon={MdPerson}
              iconClassName="text-blue-500 text-xl"
            />
          </div>

          {/* 5. Error */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              5. Input with Error
            </h2>

            <Input
              type="password"
              label="Password"
              placeholder="Enter password"
              icon={MdLock}
              iconClassName='text-blue-600'
              error="Password must be at least 6 characters"
            />

          </div>

          {/* 6. Helper Text */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              6. Input with Helper Text
            </h2>

            <Input
              type="tel"
              label="Mobile Number"
              placeholder="Enter mobile number"
              icon={MdPhone}
              iconClassName='text-blue-600'
              helperText="We'll never share your number."
            />
          </div>

          {/* 7. Disabled */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              7. Disabled Input
            </h2>

            <Input
              label="Organization"
              value="Cookedin Technologies"
              icon={MdBusiness}
              iconClassName = 'text-blue-600'
              disabled
              readOnly
            />
          </div>

          {/* 8. Input Types */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              8. Input Types
            </h2>

            <div className="space-y-3">
              <Input
                type="date"
                label="Date"
                icon={MdCalendarToday}
              />

              <Input
                type="time"
                label="Time"
                icon={MdAccessTime}
              />

              <Input
                type="number"
                label="Number"
                placeholder="12345"
                icon={MdNumbers}
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter password"
                icon={MdLock}
              />
            </div>
          </div>

          {/* 9. React Hook Form */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              9. With React Hook Form
            </h2>

            <Input
              type="email"
              label="Email"
              placeholder="Enter email"
              icon={MdEmail}
              error="Email is required"
            />

          </div>

          {/* 10. Custom Styling */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              10. Custom Styling
            </h2>

            <Input
              label="Custom Styled Input"
              placeholder="Custom style"
              icon={MdStar}
              iconClassName="text-purple-500 text-xl"
              inputClassName="border-purple-500 focus:border-purple-600 focus:ring-purple-200"
            />

          </div>

          {/* no border */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              11. No Border
            </h2>
            <Input
              label="Username"
              placeholder="Enter username"
              // inputClassName="border-b border-blue-600"
            />
          </div>
        </div>

      </div>
    </div>

  );
};

export default InputElement;

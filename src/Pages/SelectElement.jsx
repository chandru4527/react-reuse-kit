import { useState } from "react";
import {
  MdCategory,
  MdPublic,
  MdLocationCity,
  MdStar,
} from "react-icons/md";
import Select from "../components/ui/forms/Select";

const SelectElement = () => {
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [selectedOption, setSelectedOption] = useState("option2");

  const basicOptions = [
    { label: "Option One", value: "option1" },
    { label: "Option Two", value: "option2" },
    { label: "Option Three", value: "option3" },
    { label: "Option Four", value: "option4" },
  ];

  const categoryOptions = [
    { label: "Electronics", value: "electronics" },
    { label: "Clothing", value: "clothing" },
    { label: "Home Appliances", value: "home" },
    { label: "Books", value: "books" },
  ];

  const countryOptions = [
    { label: "India", value: "india" },
    { label: "United States", value: "usa" },
    { label: "United Kingdom", value: "uk" },
    { label: "Canada", value: "canada" },
    { label: "Australia", value: "australia" },
    { label: "Germany", value: "germany" },
    { label: "France", value: "france" },
    { label: "Japan", value: "japan" },
  ];

  const cityOptions = Array.from({ length: 15 }, (_, index) => ({
    label: `City ${index + 1}`,
    value: `city-${index + 1}`,
  }));

  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Pending", value: "pending" },
    { label: "Disabled", value: "disabled", disabled: true },
  ];

  const longTextOptions = [
    {
      label:
        "This is a very long option text that should not go outside the select component",
      value: "long1",
    },
    { label: "Short Option", value: "short" },
    {
      label: "Another Long Option Text That Should Be Truncated Properly",
      value: "long2",
    },
    { label: "Last Option", value: "last" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Select Components
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            A reusable select dropdown with icons, custom styling, error
            handling, disabled options, long text handling and more.
          </p>
        </div>

        {/* Basic Examples */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {/* 1. Basic */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              1. Basic Select
            </h3>

            <Select
              name="basic"
              value={category}
              options={basicOptions}
              placeholder="Select an option"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* 2. Label */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              2. With Label
            </h3>

            <Select
              label="Category"
              name="category"
              value={category}
              options={categoryOptions}
              placeholder="Choose category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* 3. Left Icon */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              3. With Icon
            </h3>

            <Select
              label="Category"
              name="categoryIcon"
              value={category}
              options={categoryOptions}
              placeholder="Choose category"
              icon={MdCategory}
              iconClassName="text-blue-600"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* 4. Selected */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              4. Selected Option
            </h3>

            <Select
              label="Option"
              name="selected"
              value={selectedOption}
              options={basicOptions}
              placeholder="Select option"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
          </div>

          {/* 5. Required */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              5. Required
            </h3>

            <Select
              label="Country"
              name="requiredCountry"
              value={country}
              options={countryOptions}
              placeholder="Select country"
              required
              icon={MdPublic}
              iconClassName="text-blue-600"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          {/* 6. Disabled */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              6. Disabled
            </h3>

            <Select
              label="Status"
              name="disabled"
              value="disabled"
              options={statusOptions}
              placeholder="Select status"
              disabled
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          {/* 7. Disabled Option */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              7. Disabled Option
            </h3>

            <Select
              label="Status"
              name="status"
              value={status}
              options={statusOptions}
              placeholder="Select status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          {/* 8. Error */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              8. Error State
            </h3>

            <Select
              label="Category"
              name="error"
              value=""
              options={categoryOptions}
              placeholder="Select category"
              error="Please select a category"
              onChange={() => { }}
            />
          </div>

          {/* 9. Long Text */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              9. Long Text
            </h3>

            <Select
              label="Option"
              name="longText"
              value=""
              options={longTextOptions}
              placeholder="Select an option"
              onChange={() => { }}
            />
          </div>

          {/* 10. Many Options */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              10. Many Options
            </h3>

            <Select
              label="City"
              name="city"
              value={city}
              options={cityOptions}
              placeholder="Select city"
              icon={MdLocationCity}
              iconClassName="text-blue-600"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* 11. Custom Label */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              11. Custom Label
            </h3>

            <Select
              label="Category"
              labelClassName="text-blue-600 font-semibold"
              name="customLabel"
              value={category}
              options={categoryOptions}
              placeholder="Choose category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* 12. Custom Styling */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              12. Custom Styling
            </h3>

            <Select
              label="Category"
              name="customStyle"
              value={category}
              options={categoryOptions}
              placeholder="Choose category"
              icon={MdStar}
              iconClassName="text-purple-500 text-xl"
              selectClassName="border-purple-500 focus:border-purple-600"
              dropdownClassName="border-purple-200 shadow-xl"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

        </div>

        {/* Multiple Instances */}
        <div className="mt-12">
          <h3 className="mb-5 text-sm font-semibold text-gray-800">
            13. Multiple Instances
          </h3>

          <div className="grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">

            <Select
              label="Category"
              name="formCategory"
              value={category}
              options={categoryOptions}
              placeholder="Choose category"
              icon={MdCategory}
              iconClassName="text-blue-600"
              onChange={(e) => setCategory(e.target.value)}
            />

            <Select
              label="Country"
              name="formCountry"
              value={country}
              options={countryOptions}
              placeholder="Select country"
              icon={MdPublic}
              iconClassName="text-green-600"
              onChange={(e) => setCountry(e.target.value)}
            />

            <Select
              label="City"
              name="formCity"
              value={city}
              options={cityOptions}
              placeholder="Select city"
              icon={MdLocationCity}
              iconClassName="text-purple-600"
              onChange={(e) => setCity(e.target.value)}
            />

          </div>
        </div>

      </div>
    </div>
  );
};

export default SelectElement;
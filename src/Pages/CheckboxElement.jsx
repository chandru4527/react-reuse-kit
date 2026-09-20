import { useState } from "react";
import Checkbox from "../components/ui/forms/Checkbox";

const CheckboxElement = () => {
  const [selectedPermissions, setSelectedPermissions] = useState([
    "users",
    "products",
    "reports",
  ]);

  const [selectedModules, setSelectedModules] = useState([
    "module1",
    "module2",
    "module4",
  ]);

  const [selectedFruits, setSelectedFruits] = useState([
    "apple",
    "banana",
    "mango",
  ]);

  const permissions = [
    { label: "Manage Users", value: "users" },
    { label: "Manage Products", value: "products" },
    { label: "Manage Orders", value: "orders" },
    { label: "Manage Reports", value: "reports" },
    { label: "Manage Settings", value: "settings" },
  ];

  const categories = [
    { label: "Electronics", value: "electronics" },
    { label: "Clothing", value: "clothing" },
    { label: "Books", value: "books" },
    { label: "Home & Kitchen", value: "home" },
  ];

  const modules = [
    { label: "Module 1", value: "module1" },
    { label: "Module 2", value: "module2" },
    { label: "Module 3", value: "module3" },
    { label: "Module 4", value: "module4" },
  ];

  const fruits = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
    { label: "Mango", value: "mango" },
    { label: "Grapes", value: "grapes" },
  ];

  const handlePermissionChange = (value) => {
    setSelectedPermissions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleModuleChange = (value) => {
    setSelectedModules((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleFruitChange = (value) => {
    setSelectedFruits((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const selectAllModules = () => {
    setSelectedModules(modules.map((item) => item.value));
  };

  const clearAllModules = () => {
    setSelectedModules([]);
  };

  const getSelectedFruitLabels = () => {
    return fruits.filter((fruit) =>
      selectedFruits.includes(fruit.value)
    );
  };

  return (
    <div className="space-y-10 p-5">
      <section>
        <h2 className="mb-5 text-base font-bold text-purple-700">
          1. SINGLE CHECKBOX EXAMPLES
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {/* Default */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              Default (Unchecked)
            </h3>

            <Checkbox
              label="Remember me"
              name="remember"
              value="remember"
            />
          </div>

          {/* Checked */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              Checked
            </h3>

            <Checkbox
              label="Remember me"
              name="rememberChecked"
              value="remember"
              defaultChecked
            />
          </div>

          {/* Disabled */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              Disabled
            </h3>

            <Checkbox
              label="Disabled checkbox"
              name="disabled"
              value="disabled"
              disabled
            />
          </div>

          {/* Disabled Checked */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              Disabled Checked
            </h3>

            <Checkbox
              label="Disabled checked"
              name="disabledChecked"
              value="disabled"
              disabled
              defaultChecked
            />
          </div>

          {/* Label Left */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              With Label Left
            </h3>

            <Checkbox
              label="Receive Notifications"
              name="notifications"
              value="notifications"
              labelPosition="left"
              defaultChecked
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Different Sizes */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="mb-5 text-sm font-semibold text-gray-800">
              Different Sizes
            </h3>

            <div className="space-y-4">
              <Checkbox
                label="Small Checkbox (sm)"
                name="small"
                value="small"
                inputClassName="h-4 w-4 accent-purple-600"
              />

              <Checkbox
                label="Medium Checkbox (md)"
                name="medium"
                value="medium"
                defaultChecked
                inputClassName="h-5 w-5 accent-purple-600"
              />

              <Checkbox
                label="Large Checkbox (lg)"
                name="large"
                value="large"
                defaultChecked
                inputClassName="h-6 w-6 accent-purple-600"
              />
            </div>
          </div>

          {/* Required */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              Required
            </h3>

            <Checkbox
              label="I agree to the Terms & Conditions"
              name="terms"
              value="accepted"
              required
            />
          </div>

          {/* Error */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              With Error
            </h3>

            <Checkbox
              label="Accept Terms"
              name="acceptTerms"
              value="terms"
              error="You must accept the terms and conditions"
            />
          </div>

          {/* Custom Styled */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="mb-6 text-sm font-semibold text-gray-800">
              Custom Styled
            </h3>

            <Checkbox
              label="Custom success style"
              name="success"
              value="success"
              defaultChecked
              inputClassName="accent-green-600"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-base font-bold text-purple-700">
          2. CHECKBOX GROUP (MULTIPLE SELECTION)
        </h2>

        <div className="grid gap-4 lg:grid-cols-4">
          {/* Basic Vertical */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-purple-700">
              Basic Group (Vertical)
            </h3>

            <p className="mb-5 mt-1 text-xs text-gray-500">
              Select your permissions
            </p>

            <div className="space-y-3">
              {permissions.map((permission) => (
                <Checkbox
                  key={permission.value}
                  label={permission.label}
                  name="permissions"
                  value={permission.value}
                  checked={selectedPermissions.includes(permission.value)}
                  onChange={() =>
                    handlePermissionChange(permission.value)
                  }
                />
              ))}
            </div>
          </div>

          {/* Basic Horizontal */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-purple-700">
              Basic Group (Horizontal)
            </h3>

            <p className="mb-5 mt-1 text-xs text-gray-500">
              Select your favorite categories
            </p>

            <div className="flex flex-wrap gap-5">
              {categories.map((category) => (
                <Checkbox
                  key={category.value}
                  label={category.label}
                  name="categories"
                  value={category.value}
                />
              ))}
            </div>
          </div>

          {/* Two Column */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-purple-700">
              Two Column Layout
            </h3>

            <p className="mb-5 mt-1 text-xs text-gray-500">
              Select multiple modules
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Dashboard", value: "dashboard" },
                { label: "Coupons", value: "coupons" },
                { label: "Users", value: "users" },
                { label: "Reports", value: "reports" },
                { label: "Products", value: "products" },
                { label: "Settings", value: "settings" },
                { label: "Orders", value: "orders" },
                { label: "Support", value: "support" },
              ].map((item, index) => (
                <Checkbox
                  key={item.value}
                  label={item.label}
                  name="modules"
                  value={item.value}
                  defaultChecked={[0, 2, 4, 6].includes(index)}
                />
              ))}
            </div>
          </div>

          {/* Disabled Options */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-purple-700">
              Disabled Options
            </h3>

            <p className="mb-5 mt-1 text-xs text-gray-500">
              Some options are disabled
            </p>

            <div className="space-y-3">
              <Checkbox
                label="Option 1 (Disabled)"
                name="options"
                value="option1"
                disabled
                defaultChecked
              />

              <Checkbox
                label="Option 2 (Disabled)"
                name="options"
                value="option2"
                disabled
              />

              <Checkbox
                label="Option 3 (Enabled)"
                name="options"
                value="option3"
                defaultChecked
              />

              <Checkbox
                label="Option 4 (Enabled)"
                name="options"
                value="option4"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-4">
          {/* Error Group */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-purple-700">
              With Error (Group)
            </h3>

            <p className="mb-5 mt-1 text-xs text-gray-500">
              Select at least one permission
            </p>

            <div className="space-y-3">
              {["Create", "Read", "Update", "Delete"].map((item) => (
                <Checkbox
                  key={item}
                  label={item}
                  name="crud"
                  value={item.toLowerCase()}
                />
              ))}
            </div>

            <p className="mt-3 text-xs text-red-500">
              Please select at least one permission
            </p>
          </div>

          {/* Select All / Clear All */}
          <div className="rounded-lg border border-gray-200 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-purple-700">
                  Select All / Clear All
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Choose modules
                </p>
              </div>

              <div className="flex gap-3 text-xs font-semibold text-purple-700">
                <button
                  type="button"
                  onClick={selectAllModules}
                  className="hover:underline"
                >
                  Select All
                </button>

                <button
                  type="button"
                  onClick={clearAllModules}
                  className="hover:underline"
                >
                  Clear All
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {modules.map((module) => (
                <Checkbox
                  key={module.value}
                  label={module.label}
                  name="modules"
                  value={module.value}
                  checked={selectedModules.includes(module.value)}
                  onChange={() => handleModuleChange(module.value)}
                />
              ))}
            </div>
          </div>

          {/* Pre-selected Multiple */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-purple-700">
              Pre-selected Multiple
            </h3>

            <p className="mb-5 mt-1 text-xs text-gray-500">
              You have selected {selectedFruits.length} items
            </p>

            <div className="space-y-3">
              {fruits.map((fruit) => (
                <Checkbox
                  key={fruit.value}
                  label={fruit.label}
                  name="fruits"
                  value={fruit.value}
                  checked={selectedFruits.includes(fruit.value)}
                  onChange={() => handleFruitChange(fruit.value)}
                />
              ))}
            </div>
          </div>

          {/* Chip Summary */}
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-purple-700">
              Chip Style Summary
            </h3>

            <p className="mb-5 mt-1 text-xs text-gray-500">
              Selected Items
            </p>

            <div className="flex flex-wrap gap-2">
              {getSelectedFruitLabels().map((fruit) => (
                <span
                  key={fruit.value}
                  className="inline-flex items-center gap-2 rounded-md bg-purple-700 px-3 py-2 text-xs font-medium text-white"
                >
                  {fruit.label}

                  <button
                    type="button"
                    onClick={() => handleFruitChange(fruit.value)}
                    className="text-sm leading-none hover:text-gray-200"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="mt-5 flex min-h-12 items-center justify-center rounded-lg border border-dashed border-gray-300">
              <button
                type="button"
                className="text-xl text-purple-700"
                onClick={() => setSelectedFruits([])}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckboxElement;
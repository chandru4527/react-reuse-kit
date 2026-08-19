import React from 'react'
import { useState } from "react";

import Navigation from './Navigation'
import PageNavigation from './PageNavigation';
import Breadcrumb from './Breadcrumb';
import Tabs from './Tabs';
import Stepper from './Stepper';
import Button from '../buttons/Button';
import {
    MdDashboard, MdPeople, MdShoppingCart, MdCategory, MdSettings, MdPerson, MdChevronRight, MdLocalFireDepartment,
    MdMessage, MdAnalytics, MdHome, MdSearch, MdNotifications,
} from "react-icons/md";

import useDrawerStore from '../../../store/drawerStore';

const NavigationElements = () => {

    const [activeTab, setActiveTab] = useState("all");

    // const { openDrawer } = useDrawerStore();

    const openDrawer = useDrawerStore(
        (state) => state.openDrawer
    );

    const handleFilter = () => {
        openDrawer({
            position: "right",
            title: "User Details",
            size: "md",
            content: <div>User Details</div>,

        });
    };
    const handleFilter2 = () => {
        openDrawer({
            position: "left",
            title: "User Details",
            size: "md",
            content: <div>User Details</div>,

        });
    };




    return (
        <div className='flex flex-col gap-3'>

            <Button className='w-40'
                onClick={handleFilter}>
                Filter
            </Button>
            <Button className='w-40'
                onClick={handleFilter2}>
                Filter
            </Button>

            <Breadcrumb
                items={[
                    {
                        label: "Dashboard",
                        to: "/admin/dashboard",
                        icon: <MdDashboard size={18} />,
                    },
                    {
                        label: "Users",
                        to: "/admin/users",
                        icon: <MdPeople size={18} />,
                    },
                    {
                        label: "User Details",
                        icon: <MdPerson size={18} />,
                    },
                ]}
            />

            <Breadcrumb
                items={[
                    {
                        label: "Dashboard",
                        to: "/admin/dashboard",
                    },
                    {
                        label: "Users",
                        to: "/admin/users",
                    },
                    {
                        label: "All Users",
                    },
                ]}
            />


            <Breadcrumb
                separator={<MdChevronRight size={18} />}
                items={[
                    {
                        label: "Dashboard",
                        to: "/admin/dashboard",
                    },
                    {
                        label: "Users",
                        to: "/admin/users",
                    },
                    {
                        label: "User Details",
                    },
                ]}
            />

            <Breadcrumb
                color="text-gray-500"
                hoverColor="hover:text-blue-600"
                currentColor="text-blue-600"
                items={[
                    {
                        label: "Dashboard",
                        to: "/admin/dashboard",
                    },
                    {
                        label: "Users",
                        to: "/admin/users",
                    },
                    {
                        label: "User Details",
                    },
                ]}
            />

            <Breadcrumb
                size="sm"
                items={[
                    {
                        label: "Dashboard",
                        to: "/admin/dashboard",
                    },
                    {
                        label: "Users",
                        to: "/admin/users",
                    },
                    {
                        label: "All Users",
                    },
                ]}
            />

            <Breadcrumb
                className="rounded-lg bg-gray-50 px-4 py-3"
                items={[
                    {
                        label: "Dashboard",
                        to: "/admin/dashboard",
                    },
                    {
                        label: "Users",
                        to: "/admin/users",
                    },
                    {
                        label: "All Users",
                    },
                ]}
            />

            <aside className="w-64 min-h-full border-r bg-white p-4">

                <nav className="space-y-2">

                    <Navigation
                        type="navlink"
                        to="/admin/dashboard"
                        icon={<MdDashboard size={20} />}
                        color="text-gray-600"
                        activeColor="text-white"
                        activeBgColor="bg-blue-600"
                        hoverBgColor="hover:bg-gray-100"
                        className="w-full justify-start"
                    >
                        Dashboard
                    </Navigation>

                    <Navigation
                        type="navlink"
                        to="/admin/users"
                        icon={<MdPeople size={20} />}
                        color="text-gray-600"
                        activeColor="text-white"
                        activeBgColor="bg-blue-600"
                        hoverBgColor="hover:bg-gray-100"
                        className="w-full justify-start"
                    >
                        Users
                    </Navigation>

                    <Navigation
                        type="navlink"
                        to="/admin/orders"
                        icon={<MdShoppingCart size={20} />}
                        color="text-gray-600"
                        activeColor="text-white"
                        activeBgColor="bg-blue-600"
                        hoverBgColor="hover:bg-gray-100"
                        className="w-full justify-start"
                    >
                        Orders
                    </Navigation>

                    <Navigation
                        type="navlink"
                        to="/admin/categories"
                        icon={<MdCategory size={20} />}
                        color="text-gray-600"
                        activeColor="text-white"
                        activeBgColor="bg-blue-600"
                        hoverBgColor="hover:bg-gray-100"
                        className="w-full justify-start"
                    >
                        Categories
                    </Navigation>

                    <Navigation
                        type="navlink"
                        to="/admin/settings"
                        icon={<MdSettings size={20} />}
                        color="text-gray-600"
                        activeColor="text-white"
                        activeBgColor="bg-blue-600"
                        hoverBgColor="hover:bg-gray-100"
                        className="w-full justify-start"
                    >
                        Settings
                    </Navigation>

                </nav>

            </aside>

            <Navigation
                type="navlink"
                to="/admin/orders"
                icon={<MdShoppingCart size={20} />}
                color="text-gray-700"
                bgColor="bg-gray-50"
                activeColor="text-white"
                activeBgColor="bg-green-600"
                hoverBgColor="hover:bg-gray-200"
                className="w-full justify-start"
            >
                Orders
            </Navigation>

            <Navigation
                type="link"
                to="/admin/users"
                color='text-black'
                className=" bg-blue-600 text-white hover:bg-blue-700"
            >
                View Users
            </Navigation>

            <Navigation
                type="a"
                href="https://google.com"
                color="text-gray-600"
                hoverColor="hover:text-black"
            >
                Visit Website
            </Navigation>


            <div className="flex items-center justify-between mt-6">

                <PageNavigation
                    direction="previous"
                    className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                >
                    Previous
                </PageNavigation>

                <PageNavigation
                    direction="next"
                    className=" bg-blue-600 text-white hover:bg-blue-700"
                >
                    Next
                </PageNavigation>

            </div>


            <Tabs
                variant="simple"
                items={[
                    { label: "Dashboard", value: "dashboard" },
                    { label: "Workout", value: "workout" },
                    { label: "Message", value: "message" },
                    { label: "Analytics", value: "analytics" },
                    { label: "Profile", value: "profile" },
                ]}
            />

            <Tabs
                variant="underline"
                items={[
                    { label: "Dashboard", value: "dashboard" },
                    { label: "Workout", value: "workout" },
                    { label: "Message", value: "message" },
                    { label: "Analytics", value: "analytics" },
                ]}
            />

            <Tabs
                variant="soft"
                activeColor='text-white'
                activeBgColor='bg-green-600'
                items={[
                    { label: "Home", value: "home" },
                    { label: "Products", value: "products" },
                    { label: "Contact", value: "contact" },
                ]}
            />

            <Tabs
                variant="underline"
                items={[
                    {
                        label: "Dashboard",
                        value: "dashboard",
                        icon: <MdDashboard size={18} />,
                    },
                    {
                        label: "Workout",
                        value: "workout",
                        icon: <MdLocalFireDepartment size={18} />,
                    },
                    {
                        label: "Message",
                        value: "message",
                        icon: <MdMessage size={18} />,
                    },
                    {
                        label: "Analytics",
                        value: "analytics",
                        icon: <MdAnalytics size={18} />,
                    },
                ]}
            />

            <Tabs
                variant="iconBox"
                activeColor='text-white'
                className='cursor-pointer'
                items={[
                    {
                        value: "home",
                        icon: <MdHome size={22} />,
                    },
                    {
                        value: "search",
                        icon: <MdSearch size={22} />,
                    },
                    {
                        value: "notifications",
                        icon: <MdNotifications size={22} />,
                    },
                    {
                        value: "settings",
                        icon: <MdSettings size={22} />,
                    },
                ]}
            />


            <Stepper
                activeStep={1}
                size='sm'
                color='text-gray-600'
                activeColor='text-white'
                completedColor='text-white'
                completedBgColor='bg-blue-600'
                lineColor='bg-gray-300'
                activeLineColor='bg-blue-600'
                steps={[
                    {
                        label: "Account",
                        description: "Create your account",
                    },
                    {
                        label: "Address",
                        description: "Enter your address",
                    },
                    {
                        label: "Payment",
                        description: "Choose payment method",
                    },
                    {
                        label: "Review",
                        description: "Confirm details",
                    },
                ]}
            />




        </div>



    )
}

export default NavigationElements

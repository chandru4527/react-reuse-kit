import React, {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    MdOutlineVisibility,
    MdOutlineEdit,
    MdOutlineDelete,
} from "react-icons/md";

import dayjs from "dayjs";
import { useForm } from "react-hook-form";

// Components
import DataTable from "./DataTable";
import Badge from "../feedback/Badge";
import DebouncedInput from "./DebouncedInput";
import DateFilter from "../forms/DateFilter";
import { Select } from "../forms";
import ConfirmContent from "../overlay/ConfirmContent";

// Store
import useModalStore from "../../../store/modalStore";

const TableElement = () => {

    const { openModal, closeModal, } = useModalStore();

    const { register, } = useForm();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // Pagination
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    // Filters
    const [search, setSearch] = useState("");
    const [gender, setGender] = useState("");

    const [dateFilter, setDateFilter] = useState({
        startDate: "",
        endDate: "",
    });

    // View User
    const handleView = (user) => {

        openModal({
            title: "User Details",
            size: "md",
            rounded: "xl",
            padding: "md",
            content: (
                <div className="space-y-3">
                    <p>
                        <strong>Name:</strong>{" "}
                        {user.firstName} {user.lastName}
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        {user.email}
                    </p>
                    <p>
                        <strong>Phone:</strong>{" "}
                        {user.phone}
                    </p>
                    <p>
                        <strong>Age:</strong>{" "}
                        {user.age}
                    </p>
                    <p>
                        <strong>City:</strong>{" "}
                        {user.city}
                    </p>

                    <p>
                        <strong>Gender:</strong>{" "}
                        {user.gender}
                    </p>

                    <p>
                        <strong>Registered:</strong>{" "}
                        {dayjs(user.registeredDate).format(
                            "DD MMM YYYY"
                        )}
                    </p>

                </div>
            ),

            action: {
                label: "Close",
                variant: "primary",
                onClick: closeModal,
            },
        });
    };

    // Edit User
    const handleEdit = (user) => {

        openModal({
            title: "Edit User",
            size: "lg",
            rounded: "xl",
            padding: "md",
            content: (
                <div>
                    <p className="text-gray-600">
                        Edit {user.firstName} {user.lastName}
                    </p>
                </div>
            ),

            action: {
                label: "Save Changes",
                variant: "primary",
                onClick: async () => {
                    try {
                        // Your update API
                        console.log(
                            "Update user:",
                            user.id, user.firstName
                        );

                        closeModal();

                    } catch (error) {

                        console.error(error);

                    }

                },
            },
        });
    };

    // Delete User
    const handleDelete = (user) => {

        openModal({
            title: "Delete User",
            size: "sm",
            rounded: "xl",
            padding: "md",
            content: (
                <ConfirmContent
                    type="danger"
                    message={
                        <>
                            Are you sure you want to delete{" "}
                            <strong>{user.firstName}</strong>?
                        </>
                    }
                />
            ),

            action: {
                label: "Delete",
                variant: "danger",
                onClick: () => {
                    console.log(
                        "Delete:",
                        user.id, user.firstName
                    );

                    closeModal();
                },
            },
        });
    };

    // Table Columns
    const columns = useMemo(
        () => [
            {
                Header: "First Name",
                accessor: "firstName",
            },
            {
                Header: "Last Name",
                accessor: "lastName",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Phone",
                accessor: "phone",
            },
            {
                Header: "Age",
                accessor: "age",
            },
            {
                Header: "City",
                accessor: "city",
            },
            {
                Header: "Gender",
                accessor: "gender",
                Cell: ({ row }) => (
                    <Badge
                        variant={
                            row.gender === "male"
                                ? "primary"
                                : "success"
                        }
                    >
                        {row.gender}
                    </Badge>
                ),
            },
            {
                Header: "Registered Date",
                accessor: "registeredDate",
                Cell: ({ row }) => (
                    <span>
                        {dayjs(row.registeredDate).format(
                            "DD MMM YYYY"
                        )}
                    </span>
                ),
            },
            // Actions
            {
                Header: "Actions",
                accessor: "actions",
                Cell: ({ row }) => (

                    <div className="flex items-center gap-2">

                        {/* View */}
                        <button
                            type="button"
                            onClick={() =>
                                handleView(row)
                            }
                            className="
                                rounded-md
                                p-2
                                hover:bg-gray-100
                            "
                        >
                            <MdOutlineVisibility
                                size={20}
                            />
                        </button>

                        {/* Edit */}
                        <button
                            type="button"
                            onClick={() =>
                                handleEdit(row)
                            }
                            className="
                                rounded-md
                                p-2
                                hover:bg-gray-100
                            "
                        >
                            <MdOutlineEdit
                                size={20}
                            />
                        </button>

                        {/* Delete */}
                        <button
                            type="button"
                            onClick={() =>
                                handleDelete(row)
                            }
                            className="
                                rounded-md
                                p-2
                                text-red-600
                                hover:bg-red-50
                            "
                        >
                            <MdOutlineDelete
                                size={20}
                            />
                        </button>

                    </div>
                ),
            },
        ],
        []
    );

    // Fetch Users
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {

        try {
            setLoading(true);
            const response = await fetch(
                "https://randomuser.me/api/?results=50"
            );
            const data = await response.json();

            // Convert API data into our table structure
            const formattedUsers =
                data.results.map((user) => ({
                    id: user.login.uuid,
                    firstName: user.name.first,
                    lastName: user.name.last,
                    email: user.email,
                    phone: user.phone,
                    age: user.dob.age,
                    city: user.location.city,
                    gender: user.gender,
                    registeredDate:
                        user.registered.date,
                }));

            setUsers(formattedUsers);

        } catch (error) {
            console.error(
                "Failed to fetch users:",
                error
            );

        } finally {

            setLoading(false);

        }
    };

    // Search + Gender + Date Filter
    const filteredUsers = useMemo(() => {
        return users.filter((user) => {

            // Search
            const query = search.toLowerCase().trim();

            const matchSearch =
                user.firstName.toLowerCase().includes(query) ||
                user.lastName.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query) ||
                user.city.toLowerCase().includes(query);

            // Gender
            const matchGender =
                !gender ||
                user.gender === gender;

            // User registered date
            const registeredDate = dayjs(user.registeredDate);

            // From date
            const matchStartDate =
                !dateFilter.startDate ||
                !registeredDate.isBefore(
                    dayjs(dateFilter.startDate),
                    "day"
                );

            // To date
            const matchEndDate =
                !dateFilter.endDate ||
                !registeredDate.isAfter(
                    dayjs(dateFilter.endDate),
                    "day"
                );

            return (matchSearch && matchGender && matchStartDate && matchEndDate);
        });
    }, [users, search, gender, dateFilter,]);

    // Pagination
    const totalPages =
        limit === 0
            ? 1
            : Math.ceil(
                filteredUsers.length / limit
            );

    const paginatedUsers =
        limit === 0
            ? filteredUsers
            : filteredUsers.slice(
                (page - 1) * limit,
                page * limit
            );

    // Reset page when filter changes
    useEffect(() => {
        setPage(1);
    }, [
        search,
        gender,
        dateFilter,
        limit,
    ]);

    return (

        <div className="space-y-4 p-6">
            {/* Search + Filter */}
            <div className="grid grid-cols-3 items-end gap-4 ">

                {/* Left Filters */}
                <div className="grid grid-cols-2  items-center gap-3 col-span-2">

                    {/* Search */}
                    <DebouncedInput
                        value={search}
                        onDebouncedChange={setSearch}
                        delay={500}
                        placeholder="Search name, email, city..."
                        className=""
                    />

                    {/* Gender */}
                    <Select
                        className=""
                        name="gender"
                        register={register}
                        value={gender}
                        onChange={(e) =>
                            setGender(
                                e.target.value
                            )
                        }
                        placeholder="All Gender"
                        options={[
                            {
                                label: "Male",
                                value: "male",
                            },
                            {
                                label: "Female",
                                value: "female",
                            },
                        ]}
                    />

                    {/* Date Filter */}
                    <DateFilter
                        dateFormat="DD MMM YYYY"
                        onApply={setDateFilter}
                    />

                </div>

                {/* Show Entries */}
                <div className="flex items-center justify-center gap-2 rounded border border-gray-300 px-2">

                    <Select
                        className="border-none"
                        value={limit}
                        onChange={(e) =>
                            setLimit(
                                Number(
                                    e.target.value
                                )
                            )
                        }
                        placeholder="Show"
                        options={[
                            {
                                label: "Show All",
                                value: 0,
                            },
                            {
                                label: "Show 10",
                                value: 10,
                            },
                            {
                                label: "Show 20",
                                value: 20,
                            },
                            {
                                label: "Show 50",
                                value: 50,
                            },
                            {
                                label: "Show 100",
                                value: 100,
                            },
                        ]}
                    />

                </div>

            </div>

            {/* Active Date Filter */}
            {(dateFilter.startDate || dateFilter.endDate) && (
                <div className="flex items-center gap-2 text-sm text-gray-600">

                    <span className="font-medium">  Date Range: </span>
                    <span>
                        {dateFilter.startDate || "Start date"}
                    </span>
                    <span>-</span>
                    <span>
                        {dateFilter.endDate || "End date"}
                    </span>

                </div>
            )}

            {/* Table */}
            <DataTable
                columns={columns}
                data={paginatedUsers}
                loading={loading}
                rowKey="id"
                sortable
                pagination={limit !== 0}
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />

        </div>
    );
};

export default TableElement;
import React from 'react'
import FormElements from './components/ui/forms/FormElements'
import ButtonElement from './components/ui/buttons/ButtonElement'
import FeedbackElement from './components/ui/feedback/FeedbackElement'
import DataTable from './components/ui/table/DataTable'


import Button from './components/ui/buttons/Button'
import Badge from './components/ui/feedback/Badge'

const App = () => {

  const columns = [
    {
      Header: "Name",
      accessor: "name",
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
      accessor: "location.city", // nested object
    },
    {
      Header: "Area",
      accessor: "location.area",
    },
    {
      Header: "Permissions",
      accessor: "permissions", // array
      Cell: ({ row }) =>
        row.permissions.length
          ? row.permissions.join(", ")
          : "No Permissions",
    },
    {
      Header: "Status",
      accessor: "activeStatus",
      Cell: ({ row }) => (
        <Badge variant={row.activeStatus ? "success" : "danger"}>
          {row.activeStatus ? "Active" : "Inactive"}
        </Badge>
      ),
    },
    {
      Header: "Verified",
      accessor: "verified",
      Cell: ({ row }) => (
        <Badge variant={row.verified ? "primary" : "warning"}>
          {row.verified ? "Verified" : "Pending"}
        </Badge>
      ),
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: ({ row }) => (
        <div className="flex gap-2">
          <Button size="sm">Edit</Button>
          <Button size="sm" variant="danger">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const users = [
    {
      _id: "u1",
      name: "Surya Kumar",
      email: "surya@gmail.com",
      phone: "9876543210",
      age: 24,
      role: "admin",
      activeStatus: true,
      verified: true,
      location: {
        city: "Coimbatore",
        area: "Saravanampatti",
      },
      permissions: ["dashboard", "users", "services"],
      createdAt: "2026-08-01T10:30:00Z",
    },
    {
      _id: "u2",
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876501234",
      age: 22,
      role: "subadmin",
      activeStatus: false,
      verified: true,
      location: {
        city: "Chennai",
        area: "Velachery",
      },
      permissions: ["bookings", "revenue"],
      createdAt: "2026-08-05T14:15:00Z",
    },
    {
      _id: "u3",
      name: "Hari",
      email: "hari@gmail.com",
      phone: "9123456789",
      age: 29,
      role: "user",
      activeStatus: true,
      verified: false,
      location: {
        city: "Erode",
        area: "Perundurai",
      },
      permissions: [],
      createdAt: "2026-08-10T09:00:00Z",
    },
  ];



  return (
    <div>
      <h1 className='text-center font-bold mt-10 text-2xl'>Reusable Components</h1>
      {/* 1 form reusable inputs */}
      {/* <FormElements/> */}

      {/* 2 buttons  */}
      {/* <ButtonElement/> */}

      {/* 3 feedback */}
      {/* <FeedbackElement/> */}

      {/* 4 table */}
      <DataTable columns={columns} data={users} />
    </div>
  )
}

export default App
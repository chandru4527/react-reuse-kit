import React from 'react'
import Badge from '../feedback/Badge'
import Loader from './Loader'
import Spinner from './Spinner'
import EmptyState from './EmptyState'
import Button from "../buttons/Button";
import Tooltip from './Tooltip'
import Alert from './Alert'


const FeedbackElement = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-5 m-10'>

            {/* badges */}
            <div className='flex flex-wrap justify-center items-center gap-2 max-w-xl mb-10'>

                <h1 className='font-bold text-xl'>Badges</h1>

                <Badge variant="success">Approved</Badge>

                <Badge variant="danger">Rejected</Badge>

                <Badge variant="warning">Pending</Badge>

                <Badge variant="primary">Active</Badge>

                <Badge variant="default">Inactive</Badge>

                <Badge variant="info">Inactive</Badge>

                <Badge variant="success" dot>
                    Online
                </Badge>

                <Badge variant="danger" dot>
                    Offline
                </Badge>
                <Badge size="sm">User</Badge>

                <Badge size="md">Admin</Badge>

                <Badge size="lg">Sub Admin</Badge>

                <Badge rounded="md">Verified</Badge>

                <Badge rounded="lg">Premium</Badge>

                <Badge rounded="full">Active</Badge>
            </div>

            <div className='flex justify-center items-center gap-2'>
                <h1 className='font-bold text-xl'>Loader</h1>
                <Loader size="sm" />
                <Loader />
                <Loader size="lg" />
                <Loader text="Loading users..." />
                {/* <Loader fullscreen text="Please wait..." /> */}
            </div>

            <div className='flex justify-center items-center gap-2'>
                <h1 className='font-bold text-xl'>Spinners</h1>

                <Spinner size="sm" />
                <Spinner />
                <Spinner size="lg" />
                <Spinner color="green" />
                <Spinner color="red" />
                <Spinner color="yellow" />
                <Spinner color="gray" />

                <div className="flex items-center gap-2 border">
                    <Spinner size="sm" />
                    <span>Updating user...</span>
                </div>

            </div>

            <div className='flex justify-center items-center gap-2'>
                <h1 className='font-bold text-xl'>empty state</h1>

                <EmptyState />

                <EmptyState
                    title="No Users Found"
                    description="No users are available in the system."
                />

                <EmptyState
                    title="No Search Results"
                    description="Try adjusting your search or filter."
                />


                <EmptyState
                    title="No Bookings Yet"
                    description="Bookings will appear here once users make a reservation."
                    action={
                        <Button variant="primary">
                            Add Booking
                        </Button>
                    }
                />
            </div>

            <Tooltip content={'CK'} bgColor='primary'>
                chandrukumar
            </Tooltip>

            <Alert
                type="success"
                title="Success"
                message="User has been updated successfully."
            />

            <Alert
                type="danger"
                title="Error"
                message="Something went wrong. Please try again."
            // position='top-right'
            />





        </div>

    )
}

export default FeedbackElement
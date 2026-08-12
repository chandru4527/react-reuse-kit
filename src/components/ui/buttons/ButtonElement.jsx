import React from 'react'
import Button from './Button'

const ButtonElement = () => {

    let isPending = true
    return (
        <div className='flex flex-col justify-center items-center gap-5 m-10'>
            <Button>Save</Button>

            <Button variant="secondary">Cancel</Button>

            <Button variant="danger">Delete</Button>

            <Button variant="success">Approve</Button>

            <Button variant="warning">Warning</Button>

            <Button variant="outline">Edit</Button>

            <Button variant="ghost">View</Button>

            <Button variant="link">Forgot Password?</Button>

            <Button size="sm">Small</Button>
            <Button size="md">Small</Button>
            <Button size="lg">Small</Button>

            <Button size="xl">XLarge</Button>

            <Button
                type="submit"
                loading={isPending}
                loadingText="Saving..."
            >
                Save Changes
            </Button>
        </div>
    )
}

export default ButtonElement
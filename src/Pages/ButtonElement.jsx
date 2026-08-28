import React from 'react'
import Button from '../components/ui/buttons/Button'
import { MdAdd, MdDelete, MdArrowForward } from "react-icons/md";

const ButtonElement = () => {

    let isPending = true;

    return (
        <div className="flex flex-wrap gap-4 p-6">
            <Button>Default Button</Button>

            <Button variant="success">
                Success
            </Button>

            <Button variant="danger" leftIcon={<MdDelete />}>
                Delete
            </Button>

            <Button variant="outline" leftIcon={<MdAdd />}>
                Add User
            </Button>

            <Button variant="ghost">
                Ghost Button
            </Button>

            <Button
                variant="primary"
                rightIcon={<MdArrowForward />}
            >
                Continue
            </Button>

            <Button loading>
                Save
            </Button>

            <Button disabled>
                Disabled
            </Button>

            <Button fullWidth>
                Full Width Button
            </Button>

            <Button
                className="rounded-full bg-purple-600 hover:bg-purple-700"
            >
                Custom Button
            </Button>
        </div>
    )
}

export default ButtonElement
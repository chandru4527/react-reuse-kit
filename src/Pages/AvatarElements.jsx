import React from 'react'
import Avatar from '../components/ui/display/Avatar'
import { MdRestaurant, MdPerson, MdNotifications } from "react-icons/md";

const AvatarElements = () => {

    const anime = 'https://tse2.mm.bing.net/th/id/OIP.wY5abcWi8KXwF51VlFWVRwHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3'


    return (
        <div className='flex flex-col gap-5'>


            <Avatar src={anime} name="Chandru Kumar" size='xl' />

            <Avatar name="c" size="xs" />
            <Avatar name="c" size="sm" />
            <Avatar name="c" size="md" />
            <Avatar name="c" size="lg" />
            <Avatar name="c" size="xl" />
            <Avatar name="c" size="2xl" />

            <Avatar
                icon={<MdNotifications className="text-xl" />}
                shape="square"
                size="md"
                badge={3}
                className='w-12'
            />

            <Avatar
                src=""
                rounded="lg"
                size="lg"
                name='ck'
            />

            <Avatar
                src={anime}
                name="Surya Kumar"
                status="online"
                className='w-10'
            />

            <Avatar
                name="Priya"
                status="busy"
                className='w-10'
            />

            <Avatar
                icon={<MdRestaurant className="text-2xl" />}
                shape="rounded"
            />

            <Avatar
                src={anime}
                status="online"
                ring
                className='w-10'
            />

            <Avatar
                name="SK"
                badge={5}
                className='w-10'
            />

            <Avatar
                src={anime}
                size="xl"
                editable
                onClick={() => console.log("Change avatar icon")}
                onEdit={() => console.log("Change avatar")}
                // onClick={() => console.log('onclick')}
                className='w-20'
            />

            <Avatar name="SK" shape="circle" />
            <Avatar name="SK" shape="rounded" />
            <Avatar name="SK" shape="soft" />
            <Avatar name="SK" shape="square" />
            <Avatar name="SK" shape="pill" size="pillMd" />
            <Avatar name="SK" shape="hex" gradient />
        </div>
    )
}

export default AvatarElements
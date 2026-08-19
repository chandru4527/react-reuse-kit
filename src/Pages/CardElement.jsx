import React from 'react'
import { MdPeople, MdStorage, MdCurrencyRupee } from 'react-icons/md'
import Card from '../components/ui/display/Card'
import Button from '../components/ui/buttons/Button'

const CardElement = () => {

    const anime = 'https://tse2.mm.bing.net/th/id/OIP.wY5abcWi8KXwF51VlFWVRwHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3'

    return (
        <div className='min-h-screen flex flex-col gap-10'>

            <h1>1 Dashboard Stat Card</h1>

            <Card
                title="Total Users"
                value="2,540"
                icon={<MdPeople />}
                iconColor="text-blue-600"
                iconBg="bg-blue-100"
                width='md'
            />

            <h1>2 Image / Service Card</h1>

            <Card
                size='sm'
                width='md'
                image={anime}
                title="Anime"
                subtitle="anime girl"
                actions={
                    <>
                        <Button size="sm">View</Button>
                        <Button size="sm" variant="outline">
                            Edit
                        </Button>
                    </>
                }
            >
                <p className="text-sm text-gray-600">
                    anime girl beautifull
                </p>
            </Card>

            <h1>3 Booking Card</h1>
            <Card
                width='lg'
                size='md'
                title="Booking #BK1024"
                subtitle="Today, 2:30 PM"
                footer={<span className="text-sm text-gray-500">Customer: Priya</span>}
            >
                <p className="text-sm text-gray-700">
                    Pickup at Velachery, Chennai
                </p>
            </Card>

            <h1>4 Custom Content Card</h1>
            <Card
                title="Monthly Overview"
                size="sm"
                width='lg'
            >
                <div className="h-48 flex items-center justify-center rounded bg-gray-300">
                    Chart goes here
                </div>

                <div className="mt-4 flex gap-2">
                    <Button>Download</Button>
                    <Button variant="outline">View Details</Button>
                </div>
            </Card>

            <h1>5 Horizontal Card</h1>
            <Card
                size='sm'
                width='lg'
                orientation="horizontal"
                image={anime}
                title="Chef Priya"
                subtitle="South Indian Specialist"
            />

            <h1>6 Glassmorphism Card</h1>
            <Card
                width='xl'
                title="Active Sessions"
                value="1,230"
                className="bg-white/10 backdrop-blur-lg border-white/10 shadow-xl"
            />

            <h1>7 Notification card</h1>
            <Card width='xl'
                className="border-l-4 border-l-blue-500">
                <h3 className="font-semibold">Server Alert</h3>
                <p className="text-sm text-gray-600">
                    CPU usage exceeded 90%.
                </p>
            </Card>

            <h1>Img Card</h1>
            <Card
                size='sm'
                width='md'
                image={anime}
                title="Anime"
                subtitle="Anime Grirl"
            />

        </div>
    )
}

export default CardElement
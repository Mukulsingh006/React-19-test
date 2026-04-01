import React, { useRef } from 'react'
import { FaCamera } from 'react-icons/fa';
import Tab from './Tab';

const Profile = () => {
    const bannerInputRef = useRef<HTMLInputElement>(null)
    const profileInputRef = useRef<HTMLInputElement>(null)

    const [bannerUrl, setBannerUrl] = React.useState("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")

    const [profileUrl, setProfileUrl] = React.useState("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D");


    const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setBannerUrl(URL.createObjectURL(file));
        }
    };

    function handleProfileChange(event: any): void {
        const file = event.target.files?.[0];
        if (file) {
            setProfileUrl(URL.createObjectURL(file));
        }
    }

    return <div className='relative w-[94%] ml-[5rem]'>
        <div className="relative">
            <img src={bannerUrl} alt="Banner Image" className='w-full h-60 object-cover' />

            <button
                type="button"
                className='absolute top-2 right-2 bg-white text-black px-4 py-2 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300 hover:text-white'
                onClick={() => bannerInputRef.current?.click()}
            >
                <FaCamera size={24} className='inline-block' />
            </button>

            <input
                ref={bannerInputRef}
                type="file"
                accept='image/*'
                className='hidden'
                onChange={handleBannerChange}
                title="Upload banner image"
                aria-label="Upload banner image"
            />

        </div>

        {/* Logo */}

        <div className="flex items-center ml-4 mt-4">
            <img src={profileUrl} alt="Profile Image" className='w-36 h-36 rounded-full object-cover border-4 border-white' />

            <button
                type="button"
                className='absolute ml-[2.7rem] z-10 mt-[4.8rem] bg-white text-black p-3 rounded-full hover:bg-gray-600 transition duration-300 hover:text-white'
                onClick={() => profileInputRef.current?.click()}
            >
                <FaCamera size={24} className='inline-block' />
            </button>

            <input
                ref={profileInputRef}
                type="file"
                accept='image/*'
                className='hidden'
                onChange={handleProfileChange}
                title="Upload profile image"
                aria-label="Upload profile image"
            />

            {/* Channel Details */}
            <div className="ml-4 mt-4">
                <h1 className="text-2xl font-bold">
                    Channel Name
                </h1>
                <p>100k subscribers</p>
                <p className='mt-2 '>
                    This is a short description about the channel. It provides an overview of the content and what viewers can expect to find on the channel.
                </p>
                <button className="subscribe mt-4 bg-red-500 p-2 rounded-full text-white">
                    Subscribe
                </button>
            </div>

        </div>

        <Tab />

    </div>

}

export default Profile

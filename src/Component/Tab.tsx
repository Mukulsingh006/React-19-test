import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa"
import { GoProjectSymlink } from "react-icons/go"
import Card from "./Card"
import About from "./About"
import Contact from "./Contact"
import { useState } from "react"



const tabs = [
    {
        id: "home",
        icons: <FaHome />,
        label: "Home",
        content: (
           <p className="text-shadow-black">
            Hello and welcome to my React portfolio! This is a simple tabbed interface showcasing different sections of my work and information. Click on the tabs above to explore my projects, about me, and contact details. Each section is designed to demonstrate my skills in React development and UI design. Feel free to navigate through the tabs to learn more about me and my work!
           </p>
        )
    },
    {
        id: "about",
        icons: <FaInfoCircle />,
        label: "About",
        content: <About />
    },
    {
        id: "course",
        icons: <FaInfoCircle />,
        label: "Course",
        content: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">React Mini Course</h2>
                <p className="text-gray-600">A quick YouTube lesson covering hooks, components, and styling.</p>
                <div className="mx-auto w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <div className="relative pb-[56.25%]">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/dGcsHMXbSOA"
                            title="React Tutorial"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Intro to component structure</li>
                    <li>Hook examples: useState, useEffect</li>
                    <li>Simple state-driven UI</li>
                </ul>
            </div>
        )
    },
    {
        id: "projects",
        icons: <GoProjectSymlink />,
        label: "Projects",
        content: (
            <div className="flex flex-wrap justify-between -m-2">
                {[
                    {
                        title: "E-commerce UI",
                        description: "Built with responsive design, hover effects, and consistent color scheme.",
                        imageUrl: "https://source.unsplash.com/collection/190727/600x400"
                    },
                    {
                        title: "Dashboard Panel",
                        description: "Modern analytics dashboard with cards and charts UI pattern.",
                        imageUrl: "https://source.unsplash.com/collection/1163637/600x400"
                    },
                    {
                        title: "Portfolio Landing",
                        description: "Clean and attractive hero section with call-to-action buttons.",
                        imageUrl: "https://source.unsplash.com/collection/865251/600x400"
                    }
                ].map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
        )
    },
    {
        id: "contact",
        icons: <FaPhone />,
        label: "Contact",
        content: <Contact />
    }
]


const Tab = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)


    return <div className="p-4 mt-[3rem] ">
        <div className="flex border-b border-gray-300">
            {tabs.map(tab => (
                <button key={tab.id} className={`flex-1 text-center py-2 px-4 font-medium text-sm
                    ${activeTab === tab.id ? 'border-b-2' : 'text-gray-600 '}`} onClick={
                        () => setActiveTab(tab.id)}>
                    <div className="flex items-center justify-center space-x-2">
                        {tab.icons}
                        <span>{tab.label}</span>
                    </div>
                </button>
            ))}
        </div>

        <div className="mt-4">
            {tabs.find(tab => tab.id === activeTab)?.content}
        </div>


    </div>
}

export default Tab

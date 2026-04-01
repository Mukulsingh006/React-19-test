import Profile from "./Component/Profile"
import Sidebar from "./Component/Sidebar"


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-100 to-indigo-100 text-gray-800">
      <Sidebar />
      <Profile />
    </div>
  )
}

export default App

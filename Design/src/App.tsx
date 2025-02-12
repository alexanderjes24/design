import './App.css'
import Sidebar from './Sidebar'
import ProfileHeader from './ProfileHeader'
import Content from './Content'

function App() {

  return (
    <>
   <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <ProfileHeader />
        <Content/>
      </div>
    </div>
    
    </>
  )
}

export default App

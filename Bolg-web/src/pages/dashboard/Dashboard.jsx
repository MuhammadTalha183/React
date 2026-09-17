
import Navbar from "../../components/Navbar";
import CreateBlogModal from "../../components/CreateBlogModal";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <h2>welcome to User Dashboard</h2>
      <h3>Manage Your Blog Posts</h3>
      <p>This is the user's dashboard where they can manage their blog posts.</p>
      <CreateBlogModal />

    </div>
  )
}
export default Dashboard
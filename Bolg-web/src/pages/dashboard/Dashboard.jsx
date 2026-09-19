
// import Navbar from "../../components/Navbar";
// import CreateBlogModal from "../../components/CreateBlogModal";
// function Dashboard() {
//   return (
//     <div>
//       <Navbar />
//      <div className=" ">
//       <h1>Dashboard</h1>
//       <h2>welcome to User Dashboard</h2>
//       <h3>Manage Your Blog Posts</h3>
//       <p>This is the user's dashboard where they can manage their blog posts.</p>
//      </div>
//       <CreateBlogModal />

//     </div>
//   )
// }
// export default Dashboard
import Navbar from "../../components/Navbar";
import CreateBlogModal from "../../components/CreateBlogModal";
import AnimatedCanvasBackground from "../../components/AnimatedCanvasBackground";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";




function Dashboard() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [user, setUser] = useState(null);


  const themeBg = isDarkMode
    ? "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #111827 100%)"
    : "linear-gradient(135deg, #f8fafc 0%, #eef2ff 45%, #faf5ff 100%)";


  const textColor = isDarkMode
    ? "gradient(90deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%)"
    : "#1e293b";


  const textMuted = isDarkMode
    ? "rgba(255, 255, 255, 0.6)"
    : "#6b7280";


  const cardBg = isDarkMode
    ? "rgba(30, 41, 59, 0.75)"
    : "rgba(255, 255, 255, 0.8)";


  const cardBorder = isDarkMode
    ? "rgba(255, 255, 255, 0.12)"
    : "rgba(99, 102, 241, 0.15)";


  useEffect(() => {
  
      const unsubscribe =
        onAuthStateChanged(
          auth,
          (currentUser) => {
  
            setUser(currentUser);
  
          }
        );
  
      return () => unsubscribe();
  
    }, []);
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
<AnimatedCanvasBackground
        isDarkMode={isDarkMode}
      />
       <Navbar
        user={user}

        isDarkMode={isDarkMode}

        setIsDarkMode={setIsDarkMode}

        textColor={textColor}

        textMuted={textMuted}

        cardBorder={cardBorder}
      />


      {/* Dashboard Content */}
      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Welcome Section */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            sm:p-8
            lg:p-10
            dark:border-slate-800
            dark:bg-slate-900
          "
        >

          {/* Decorative Background */}
          <div
            className="
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-indigo-500/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-20
              h-56
              w-56
              rounded-full
              bg-purple-500/10
              blur-3xl
            "
          />

          <div className="relative z-10">

            {/* Small Badge */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-indigo-200
                bg-indigo-50
                px-4
                py-2
                text-sm
                font-medium
                text-indigo-600
                dark:border-indigo-500/20
                dark:bg-indigo-500/10
                dark:text-indigo-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              User Dashboard
            </div>

            {/* Main Heading */}
            <h1
              className="
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-4xl
                lg:text-5xl
                dark:text-white
              "
            >
              Welcome to your{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-indigo-600
                  via-purple-600
                  to-pink-600
                  bg-clip-text
                  text-transparent
                "
              >
                Dashboard
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="
                mt-4
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
                dark:text-slate-400
              "
            >
              Manage your blog posts, create new stories, and share your
              ideas with your audience.
            </p>

          </div>
        </div>


        {/* Management Section */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Manage Posts Card */}
          <div
            className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div
              className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-indigo-100
                text-2xl
                transition-transform
                duration-300
                group-hover:scale-110
                dark:bg-indigo-500/10
              "
            >
              📝
            </div>

            <h2
              className="
                text-xl
                font-bold
                text-slate-900
                sm:text-2xl
                dark:text-white
              "
            >
              Manage Your Blog Posts
            </h2>

            <p
              className="
                mt-3
                leading-7
                text-slate-600
                dark:text-slate-400
              "
            >
              Create, update, and manage your blog content from one
              convenient place.
            </p>

          </div>


          {/* Create Blog Card */}
          <div
            className="
              rounded-3xl
              border
              border-purple-200
              bg-gradient-to-br
              from-indigo-50
              via-white
              to-purple-50
              p-6
              shadow-sm
              sm:p-8
              dark:border-purple-500/20
              dark:from-indigo-500/10
              dark:via-slate-900
              dark:to-purple-500/10
            "
          >

            <div
              className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-indigo-600
                to-purple-600
                text-2xl
                shadow-lg
              "
            >
              ✨
            </div>

            <h2
              className="
                text-xl
                font-bold
                text-slate-900
                sm:text-2xl
                dark:text-white
              "
            >
              Start Writing
            </h2>

            <p
              className="
                mb-6
                mt-3
                leading-7
                text-slate-600
                dark:text-slate-400
              "
            >
              Have something interesting to share? Start writing your next
              blog post.
            </p>

            {/* Existing Functionality */}
            <CreateBlogModal />

          </div>

        </div>


        {/* Info Section */}
        <div
          className="
            mt-8
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            sm:p-8
            dark:border-slate-800
            dark:bg-slate-900
          "
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-emerald-100
                text-xl
                dark:bg-emerald-500/10
              "
            >
              🚀
            </div>

            <div>
              <h3
                className="
                  text-lg
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                Your creative space
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                This is your personal space to create and manage your
                stories. Keep writing and keep sharing.
              </p>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;

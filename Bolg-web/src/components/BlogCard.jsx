import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";

function BlogCard() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogsData = async () => {
    try {
      setLoading(true);

      const querySnapshot = await getDocs(
        collection(db, "blogs")
      );

      const blogs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAllBlogs(blogs);
    } catch (error) {
      console.log("Error fetching blogs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogsData();
  }, []);

  return (
    <section className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">

      {/* ================= HEADER ================= */}

      <div className="mx-auto mb-10 max-w-7xl text-center">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
          ✨ Explore Stories
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Discover{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Amazing Blogs
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
          Explore ideas, experiences, knowledge and stories shared
          by our community.
        </p>

      </div>


      {/* ================= LOADING ================= */}

      {loading && (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >

              <div className="h-56 animate-pulse bg-slate-200 dark:bg-slate-800" />

              <div className="space-y-4 p-6">

                <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

                <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

              </div>

            </div>
          ))}

        </div>
      )}


      {/* ================= EMPTY STATE ================= */}

      {!loading && allBlogs.length === 0 && (
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900/60">

          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-4xl dark:bg-indigo-500/10">
            📝
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            No blogs yet
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Be the first person to share something with the community.
          </p>

        </div>
      )}


      {/* ================= BLOG GRID ================= */}

      {!loading && allBlogs.length > 0 && (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {allBlogs.map((blog) => (

            <article
              key={blog.id}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-56 overflow-hidden">

                <img
                  src={blog.blogImgUrl || blog.file}
                  alt={blog.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Blog badge */}

                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  Blog
                </div>

              </div>


              {/* ================= CONTENT ================= */}

              <div className="p-6">

                <h2 className="
                  line-clamp-2
                  text-xl
                  font-bold
                  leading-snug
                  text-slate-900
                  transition-colors
                  duration-200
                  group-hover:text-indigo-600
                  dark:text-white
                  dark:group-hover:text-indigo-400
                ">
                  {blog.title}
                </h2>


                <p className="
                  mt-3
                  line-clamp-3
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                ">
                  {blog.description}
                </p>


                {/* ================= FOOTER ================= */}

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">

                  <div className="flex items-center gap-3">

                    <div className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-indigo-500
                      via-purple-500
                      to-pink-500
                      text-sm
                      font-bold
                      text-white
                    ">
                      {blog.authorId
                        ? blog.authorId.charAt(0).toUpperCase()
                        : "U"}
                    </div>

                    <div>

                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Community Author
                      </p>

                      <p className="text-xs text-slate-400">
                        Shared a story
                      </p>

                    </div>

                  </div>


                  <div className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-100
                    text-slate-500
                    transition-all
                    duration-200
                    group-hover:bg-indigo-100
                    group-hover:text-indigo-600
                    dark:bg-slate-800
                    dark:text-slate-400
                    dark:group-hover:bg-indigo-500/10
                    dark:group-hover:text-indigo-400
                  ">
                    →
                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>
      )}

    </section>
  );
}

export default BlogCard;
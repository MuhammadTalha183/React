import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";

function BlogCard({
  isDarkMode,
  textColor,
  textMuted,
  cardBg,
  cardBorder,
}) {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get all blogs from Firestore
  const getBlogsData = async () => {
    try {
      setLoading(true);

      const querySnapshot = await getDocs(collection(db, "blogs"));

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
    <section
      style={{
        background: isDarkMode ? "#0f172a" : "#f8fafc",
        color: textColor,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
      className="px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-10 text-center">

          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
            style={{
              background: isDarkMode
                ? "rgba(99, 102, 241, 0.12)"
                : "rgba(99, 102, 241, 0.08)",
              color: isDarkMode ? "#a5b4fc" : "#4f46e5",
            }}
          >
            Latest Articles
          </div>

          <h1
            className="text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ color: textColor }}
          >
            Explore Our{" "}
            <span
              style={{
                color: isDarkMode ? "#818cf8" : "#4f46e5",
              }}
            >
              Blogs
            </span>
          </h1>

          <p
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base"
            style={{ color: textMuted }}
          >
            Discover interesting articles, ideas, experiences, and knowledge
            shared by our community.
          </p>
        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-2xl"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                }}
              >
                <div
                  className="h-52"
                  style={{
                    background: isDarkMode
                      ? "#1e293b"
                      : "#e2e8f0",
                  }}
                />

                <div className="p-6">
                  <div
                    className="mb-4 h-6 rounded"
                    style={{
                      background: isDarkMode
                        ? "#334155"
                        : "#e2e8f0",
                    }}
                  />

                  <div
                    className="mb-2 h-4 rounded"
                    style={{
                      background: isDarkMode
                        ? "#334155"
                        : "#e2e8f0",
                    }}
                  />

                  <div
                    className="h-4 w-3/4 rounded"
                    style={{
                      background: isDarkMode
                        ? "#334155"
                        : "#e2e8f0",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= EMPTY STATE ================= */}
        {!loading && allBlogs.length === 0 && (
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
            }}
          >
            <div
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-2xl"
              style={{
                background: isDarkMode
                  ? "rgba(99, 102, 241, 0.12)"
                  : "rgba(99, 102, 241, 0.08)",
              }}
            >
              📝
            </div>

            <h2
              className="text-xl font-semibold"
              style={{ color: textColor }}
            >
              No blogs found
            </h2>

            <p
              className="mt-2"
              style={{ color: textMuted }}
            >
              There are no blogs available right now.
            </p>
          </div>
        )}

        {/* ================= BLOG GRID ================= */}
        {!loading && allBlogs.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {allBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  boxShadow: isDarkMode
                    ? "0 10px 30px rgba(0, 0, 0, 0.18)"
                    : "0 10px 30px rgba(15, 23, 42, 0.06)",
                }}
              >

                {/* ================= BLOG IMAGE ================= */}
                <div className="relative h-56 overflow-hidden">

                  {blog.blogImgUrl ? (
                    <img
                      src={blog.blogImgUrl}
                      alt={blog.title || "Blog image"}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={{
                        background: isDarkMode
                          ? "#1e293b"
                          : "#e2e8f0",
                        color: textMuted,
                      }}
                    >
                      No Image
                    </div>
                  )}

                  {/* Image overlay */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: isDarkMode
                        ? "linear-gradient(to top, rgba(15,23,42,0.65), transparent)"
                        : "linear-gradient(to top, rgba(15,23,42,0.35), transparent)",
                    }}
                  />
                </div>

                {/* ================= BLOG CONTENT ================= */}
                <div className="p-6">

                  <h2
                    className="mb-3 line-clamp-2 text-xl font-semibold transition-colors duration-300"
                    style={{ color: textColor }}
                  >
                    {blog.title || "Untitled Blog"}
                  </h2>

                  <p
                    className="mb-6 line-clamp-3 text-sm leading-6"
                    style={{ color: textMuted }}
                  >
                    {blog.description || "No description available."}
                  </p>

                  {/* ================= FOOTER ================= */}
                  <div
                    className="flex items-center justify-between border-t pt-4"
                    style={{
                      borderColor: cardBorder,
                    }}
                  >

                    {/* Author */}
                    <div className="flex min-w-0 items-center gap-3">

                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                        style={{
                          background: isDarkMode
                            ? "#3730a3"
                            : "#e0e7ff",
                          color: isDarkMode
                            ? "#e0e7ff"
                            : "#4338ca",
                        }}
                      >
                        A
                      </div>

                      <div className="min-w-0">
                        <p
                          className="text-xs font-medium"
                          style={{ color: textMuted }}
                        >
                          Author
                        </p>

                        <p
                          className="max-w-[150px] truncate text-xs"
                          style={{ color: textColor }}
                          title={blog.authorId}
                        >
                          {blog.authorId || "Unknown"}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <button
                      type="button"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        background: isDarkMode
                          ? "rgba(148, 163, 184, 0.10)"
                          : "#f1f5f9",
                        color: textColor,
                      }}
                    >
                      →
                    </button>

                  </div>
                </div>
              </article>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default BlogCard;
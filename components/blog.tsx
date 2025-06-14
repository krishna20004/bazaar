const blogPosts = [
  {
    id: 1,
    tag: "Hybridized auction",
    title:
      "Climate change is beginning to have a devastating impact on forests across the world",
    time: "2 hours ago",
    image: "/0.png",
  },
  {
    id: 2,
    tag: "Hybridized auction",
    title:
      "Climate change is beginning to have a devastating impact on forests across the world",
    time: "2 hours ago",
    image: "/2.png",
  },
  {
    id: 3,
    tag: "Hybridized auction",
    title:
      "Climate change is beginning to have a devastating impact on forests across the world",
    time: "2 hours ago",
    image: "/0.png",
  },
  {
    id: 4,
    tag: "Hybridized auction",
    title:
      "Climate change is beginning to have a devastating impact on forests across the world",
    time: "2 hours ago",
    image: "/2.png",
  },
];

const RecentBlogs = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-900">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
        Recent Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg  overflow-hidden">
            <div className="p-1 pb-0">
              <span className="text-xs font-semibold text-green-700 ">
                {post.tag}
              </span>
            </div>
            <img
              src={post.image}
              alt="Blog"
              className="w-full h-60 object-cover rounded"
            />

            <div className="p-2">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs text-gray-500">{post.time}</p>
                <button className="text-gray-500 hover:text-gray-700 text-xl leading-none">
                  &#x22EE;
                </button>
              </div>
              <h3 className="text-sm font-semibold textblack-800 leading-snug">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;

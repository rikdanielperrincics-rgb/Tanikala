function UserPosts({ posts, userEmail }) {
    const userPosts = posts.filter(
        (post) => post.email === userEmail
    );

    return (
        <div className="UserPosts">
        {posts ? userPosts.map((post) => (
            <div
            key={post._id}
            className="w-full border-t border-b border-gray-300 py-6 flex flex-col"
            >
            {/* HEADER */}
            <div className="px-2 md:px-8">
                <div className="flex justify-between items-center text-[0.85rem] text-[#766a94] mb-0.5 font-medium">
                <span>By: {post.author}</span>
                <span>{post.date}</span>
                </div>

                <p className="text-[1.6rem] font-bold text-[#766a94] leading-tight tracking-tight">
                {post.title}
                </p>
            </div>

            {/* CONTENT */}
            <div className="text-[1rem] text-[#5E4A7E] opacity-90 mb-5 leading-relaxed px-2 md:px-8">
                {post.content}
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-6 px-2 md:px-8">
                {post.postTags.map((tag) => (
                <span
                    key={tag}
                    className="px-4 py-1 rounded-full text-white text-[1rem] font-semibold bg-[#C7B3EE]"
                >
                    {tag}
                </span>
                ))}
            </div>

            {/* ACTIONS */}
            </div>
        )): "No Recent Activities"}
        </div>
    );
}

export default UserPosts;
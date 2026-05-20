import UserPost from "./UserPost";

function UserPosts({ posts, userEmail }) {
    const userPosts = posts.filter(
        (post) => post.email === userEmail
    );

    return (
        <div className="UserPosts">
        {userPosts.length ? userPosts.map((post) => (
            <UserPost post={post} key={post._id}/>
        )):
            <p className="text-[2rem] text-gray-400 font-light tracking-wide text-center selection:bg-purple-100 justify-center">
                Hmm.. no posts yet...
            </p>
        }
        </div>
    );
}

export default UserPosts;
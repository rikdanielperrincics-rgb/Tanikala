import UserPosts from './UserPosts'

function RecentActivity({ posts, userEmail }) {
    return (
        <div className="mt-16 max-w-7xl mx-auto bg-white rounded-[2rem] p-6 md:p-12 shadow-xl border border-purple-100/50">
            <h2 className="text-[2.2rem] font-extrabold text-[#4B3573] tracking-tight mb-6">
                Recent Activity
            </h2>
            <UserPosts posts={posts} userEmail={userEmail}/>
            
        </div>
    );
}

export default RecentActivity;
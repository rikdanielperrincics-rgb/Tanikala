import CommunityPost from "./CommunityPost"
import {useState} from "react"

function CommunityPosts({
    posts,
    activeTag,
    tagBgColors,
    userEmail,
    setIsEditModalOpen,
    setEditingPost,
    setDeletingPost,
    setIsDeleteModalOpen,
    setSelectedPostForComments,
    setIsCommentModalOpen,
    refreshPosts
}){
    const openDeleteModal = (post) => {
    setDeletingPost(post);
    setIsDeleteModalOpen(true);
    };
    const openCommentModal = (post) => {
    setSelectedPostForComments(post);
    setIsCommentModalOpen(true);
    };
    return (
            <div className="col-span-12 md:col-span-8 flex flex-col bg-white overflow-y-auto">
            
            {posts.map((post) => (
                <CommunityPost 
                    key={post._id} 
                    post={post} 
                    setEditingPost={setEditingPost}
                    setIsEditModalOpen={setIsEditModalOpen}
                    setIsCommentModalOpen={setIsCommentModalOpen}
                    openCommentModal={openCommentModal}
                    openDeleteModal={openDeleteModal}
                    tagBgColors={tagBgColors}
                    userEmail={userEmail}
                    refreshPosts={refreshPosts}
                    setSelectedPostForComments={setSelectedPostForComments}
                />
            ))}

        </div>
    )
}

export default CommunityPosts

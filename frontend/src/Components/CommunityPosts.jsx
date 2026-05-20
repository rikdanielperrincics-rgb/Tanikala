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
            
            {posts.length ? posts.map((post) => (
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
            )):
            <p className="text-[2rem] text-gray-400 font-light tracking-wide text-center selection:bg-purple-100 justify-center">
                Hmm.. no one's here yet...
            </p>
                
            }

        </div>
    )
}

export default CommunityPosts

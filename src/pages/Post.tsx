import PostContent from "@/components/PostContent";
function Post({setOpenPost}:any) {

    return (
        <div onClick={() => setOpenPost(false)} className="fixed pt-10 inset-0 z-20 bg-black/40 flex flex-col">
            <div onClick={(e) => { e.stopPropagation() }} className="w-[85%] h-[90%] mx-auto bg-white">
              <PostContent />

            </div>
        </div>
    )
}
export default Post

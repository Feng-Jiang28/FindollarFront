function Post({setOpenPost}:any) {

    return (
        <div onClick={() => setOpenPost(false)} className="fixed pt-10 inset-0 z-20 bg-black/40 flex flex-col">
            <div onClick={(e) => { e.stopPropagation() }} className="w-[85%] h-96 mx-auto bg-white">

                          
            </div>
        </div>
    )
}
export default Post
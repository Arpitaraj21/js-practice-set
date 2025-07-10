function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('post data fetched')
        }, 2000)
    })
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('comment data fetched')
        }, 3000)
    })

}

async function getBlogData() {
    try {
        console.log("fetching blog data");
        // const blogData = await fetchPostData();
        // const commentBlog = await fetchCommentData();

        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ]);

        console.log(postData);
        console.log(commentData);
        console.log("fetch complete");

    } catch (error) {
        console.log("Error fetching blog data", error);

    }
}

getBlogData()
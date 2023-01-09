// take in an array of posts
// create a new tag set (so no duplicates)
// add the tags of each post to the tag set
// return a a single array of tags based on the set

import { ref } from "vue"

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set()

    posts.forEach(post => {
      post.tags.forEach(tag => {
        tagSet.add(tag)
      })
    })

    tags.value = [...tagSet]  // 将集合中的每个元素取出放在数组里

    return { tags }
}

export default useTags
import { projectFirestore } from "@/firebase/config"
import { ref, watchEffect } from "vue"

const getCollection = (collection, query) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt')
    if(query) {
        collectionRef = collectionRef.where(...query)
    }

    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach((doc) => {  // 时间戳在服务器端创建，加上doc.data().createdAt保证快照使用的是服务器端的而不是本地的  &&为逻辑与，只有第一个条件满足才会执行第二个
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })  // must wait the server to create the timestamp & send it back
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    watchEffect((onInvalidate) => {
        // unsub from pre collection when watch is stopped (component unmounted)
        onInvalidate(() => unsub())
    })

    return { documents, error }
}

export default getCollection
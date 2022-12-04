const app = Vue.createApp({
    // data, fuctions, templete(template 将注入到id为app的对象中)
    data() {
        return {
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'brandon', img: 'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleisFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

// 表示此app实例控制的id为app的对象
app.mount('#app')

//  challenge - Add to Favs
// - attach a click event to each li tag (for each book)
// - when a user click a li, toggle the is 'isFav' property of that book
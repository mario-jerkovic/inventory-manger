import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export class Firebase {

    private auth: firebase.auth.Auth
    private database: firebase.database.Database

    constructor(
        public apiKey?: string,
        public authDomain?: string,
        public databaseURL?: string,
    ) {
        firebase.initializeApp({
            apiKey,
            authDomain,
            databaseURL,
        })

        this.auth = firebase.auth()
        this.database = firebase.database()

        this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    }

    public onAuthUserListener = (
        next: (user: firebase.User) => void,
        fallback: () => void,
    ) => (
        this.auth.onAuthStateChanged((user) => {
            user ? next(user) : fallback()
        })
    )

    public signInWithEmailAndPassword = async (email: string, password: string) => (
        this.auth.signInWithEmailAndPassword(email, password)
    )

    public articlesRef = () => (
        this.database.ref('articles')
    )

    public createArticle = (name: string, quantity: number) => {
        const now = new Date().toISOString()

        return this.database.ref('articles').push({
            name,
            quantity,
            createdDate: now,
            modifiedDate: now,
        })
    }

    public removeArticle = (id: string) => (
        this.database.ref(`articles/${id}`).remove()
    )

    public updateArticleQuantity = (id: string, quantity: number) => {
        const articleRef = this.database.ref(`articles/${id}`)

        return Promise.all([
            articleRef
                .child('quantity')
                .set(quantity),
            articleRef
                .child('modifiedDate')
                .set(new Date().toISOString()),
        ])
    }
}

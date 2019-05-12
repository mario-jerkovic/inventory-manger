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
    }

    public articlesRef = () => (
        this.database.ref('articles')
    )
}

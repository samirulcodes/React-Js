import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    // in this method whatever appwrite services we call here
    // account creation
    async createAccount({ email, password, name }) {
        // account creation can be fail so that we use, below
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // call another methods 
                // call from login methods below
                return this.login(email, password)

            } else {
                return userAccount
            }
        } catch (error) {
            throw error

        }
    }

    // account login
    // After you've created your account, users can be logged in using the Create Email Session route
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error

        }
    }


    // checking wheteher user is login or not
    async getCurrentUSer() {
        // Get the currently logged in user through get() method
        try {
            return await this.account.get()
        } catch (error) {
            // throw error
            console.log("Appwrite service :: getCurrentUser ::", error);
        }
        // if no value avail. in try catch then it will return null
        return null
    }

    // logout
    async logout() {

        try {
            // delete from all the session(user login anywhere)
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

}


const authService = new AuthService()

// from this object(authService) we can access everything like logout,login, thoruth dot(.) 
export default authService

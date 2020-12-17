import makeUser from '../user'
export default function makeAddUser({ userDb }) {
    
    return async function addUser(userData) {
        const user = makeUser(userData.name, userData.lastName, userData.email, userData.password, userData.country, userData.phoneNumber, userData.postalCode)

        const exists = await userDb.findUser(userData)
        if (exists) throw new Error('user already exists')

        return userDb.addUser(user)
    }
}
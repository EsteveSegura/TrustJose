import { createUser } from '../use-cases'
import makeCreateUser from './createUser.controller'
console.log(makeCreateUser)
const addUser = makeCreateUser({ createUser })
const userController = {
    addUser
}

export default userController
export { addUser }
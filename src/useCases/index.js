import makeAddUser from './createUser.useCase'
import userDb from '../dataAccess';

console.log(userDb)
const createUser = makeAddUser({userDb})

const userService = {
    createUser
}

export default userService
export { createUser }
export default function buildMakeUser({ sanitize }){
    return function makeUser(name,lastName,email,password,country,phoneNumber,postalCode){
        if(!name || name.length < 5) throw new Error('fail1') 

        if(!lastName) throw new Error('fail2') 

        if(!email) throw new Error('fail3')

        if(!password) throw new Error('fail4')

        if(!country) throw new Error('fail5')

        if(!phoneNumber) throw new Error('fail6')

        if(!postalCode) throw new Error('fail7')


        const signupAt = Date.now()
        const updatedAt = Date.now()

        let sanitizedName = sanitize(name).trim()

        return {
            sanitizedName,
            lastName,
            email,
            password,
            country,
            phoneNumber,
            postalCode,
            signupAt,
            updatedAt
        }
    }
}
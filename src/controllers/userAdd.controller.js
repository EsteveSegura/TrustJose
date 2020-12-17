export default function makeCreateUser({ createUser }) {
    console.log(createUser + "-")
    return async function postUser(httpRequest) {
        try {
            const body = httpRequest.body
            const posted = await createUser(body)
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { posted }
            }
        } catch (e) {
            console.log(e)

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}
import { indexModels } from "../../models/index-models.js"

export const login = async (req, res) => {
    try {
        const body = req.body
        console.log("body", req.body)
        const userDetails = await indexModels.users.findOne({
            include: [
                {
                    model: indexModels.userAuth
                },
                {
                    model: indexModels.masterRoles
                }
            ],
            where: {
                email: body.email
            }
        })
        console.log("userDetails", userDetails)
        if (userDetails.userAuth.pswd === body.password) {
            return res.status(200).send({
                status: 200,
                message: "SUCCESS",
                data: {
                    userRole: userDetails.masterRole.roleName,
                    message: 'Login is Successful'
                }
            })
        }
        return res.status(200).send(
            {
                status: 200,
                message: "FAILURE",
                data: { message: 'Email/Password is incorrect' }
            }
        )
    } catch (err) {
        console.log(err)
        return res.status(400).send({
            status: 200,
            message: "FAILURE",
            data: { message: 'Something went wrong, Please try again' }
        })
    }
}
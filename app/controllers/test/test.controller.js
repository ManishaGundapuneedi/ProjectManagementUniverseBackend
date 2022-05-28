import { indexModels } from "../../models/index-models.js"

export const testCall = async (req, res) => {
    try {
        const r = await indexModels.projects.findAll()
        return res.status(200).send(
            {
                status: r,

            }
        )
    } catch (err) {
        console.log(err)
    }
}
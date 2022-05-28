import { indexModels } from "../../models/index-models.js"

export const getProjectsList = async (req, res) => {
    try {
        const { offset = 0, limit = 10, search, filterData } = req.body
        console.log("body", req.body)
        const listData = await indexModels.projects.findAll({
            include: [
                {
                    model: indexModels.masterProjectStatus
                },
                {
                    model: indexModels.masterProjectTypes
                },
                {
                    model: indexModels.resourceRequests,
                    include: {
                        model: indexModels.masterSkills
                    }
                },
                {
                    model: indexModels.resourceProjects,
                    include: {
                        model: indexModels.resources
                    }
                }
            ],
            offset,
            limit
        })
        console.log("listData", listData)

        return res.status(200).send({
            status: 200,
            message: "SUCCESS",
            data: {
                activeCount: 54,
                completed: 35,
                upcoming: 22,
                listData
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(400).send({
            status: 200,
            message: "FAILURE",
            data: { message: 'Something went wrong, Please try again' }
        })
    }
}
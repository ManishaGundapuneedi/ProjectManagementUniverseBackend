import { indexModels } from "../../models/index-models.js"

export const getResourcesList = async (req, res) => {
    try {
        const { offset = 0, limit = 10, search, filterData } = req.body
        console.log("body", req.body)
        const listData = await indexModels.resources.findAll({
            include: [
                {
                    model: indexModels.resourceSkills,
                    include: {
                        model: indexModels.masterSkills
                    }
                },
                {
                    model: indexModels.resourceProjects,
                    include: {
                        model: indexModels.projects,
                        attributes: ['projectName']
                    }
                },
            ],
            offset,
            limit
        })
        console.log("listData", listData)

        return res.status(200).send({
            status: 200,
            message: "SUCCESS",
            data: {
                available: 14,
                occupied: 59,
                inActive: 34,
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

export const getResourcesUtilization = async (req, res) => {
    try {
        const { offset = 0, limit = 10, search, filterData } = req.body

        const listData = await indexModels.resourceUtilization.findAll({
            include: [
                {
                    model: indexModels.resources,

                }
            ]
        })
        console.log("listData", listData)

        return res.status(200).send({
            status: 200,
            message: "SUCCESS",
            data: {
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
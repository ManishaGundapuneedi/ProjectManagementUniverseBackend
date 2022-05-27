import { indexModels } from "../../models/index-models.js"

export const test = async (req, res) => {
    try {
        const students = await indexModels.student.findAndCountAll({
            include: [{
                model: indexModels.masterState
            }, {
                model: indexModels.masterDepartment
            }],
            offset: 5,
            limit: 5

        })
        console.log('678', req.body)
        const studentsw = await indexModels.student.update({ firstName: "---george" }, {
            where: {
                studentId: 14
            }
        })
        const deletess = await indexModels.student.destroy({
            where: {
                studentId: 23
            }
        })
        console.log("body", req.body)
        return res.status(200).send({
            data: students
        })
    } catch (err) {
        console.log(err)
    }
}
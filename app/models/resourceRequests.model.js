export const resourceRequests = (appDB, Sequelize, projects, skills) => {
    const resourceRequests = appDB.define(
        "resourceRequests",
        {
            requestId: {
                type: Sequelize.UUID,
                primaryKey: true,
            },
            projectId: {
                type: Sequelize.UUID,
            },
            skillId: {
                type: Sequelize.UUID,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "resourceRequests" }
    );
    resourceRequests.belongsTo(projects, { foreignKey: 'projectId' })
    resourceRequests.belongsTo(skills, { foreignKey: 'skillId' })

    return resourceRequests
}
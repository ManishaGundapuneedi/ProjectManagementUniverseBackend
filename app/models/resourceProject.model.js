export const resourceProjects = (appDB, Sequelize, resources, projects) => {
    const resourceProjects = appDB.define(
        "resourceProjects",
        {
            resourceId: {
                type: Sequelize.UUID,
                primaryKey: true,
            },
            projectId: {
                type: Sequelize.UUID,
                primaryKey: true,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "resourceProjects" }
    );

    resourceProjects.belongsTo(resources, { foreignKey: 'resourceId', targetKey: 'id' })
    resourceProjects.belongsTo(projects, { foreignKey: 'projectId' })

    return resourceProjects
}
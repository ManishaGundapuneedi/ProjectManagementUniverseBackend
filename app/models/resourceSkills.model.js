export const resourceSkills = (appDB, Sequelize, skills, resource) => {
    const resourceSkills = appDB.define(
        "resourceSkills",
        {
            resourceId: {
                type: Sequelize.UUID,
                primaryKey: true,
            },
            skillId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "resourceSkills" }
    );
    resourceSkills.belongsTo(skills, { foreignKey: 'skillId' })
    resourceSkills.belongsTo(resource, { foreignKey: 'resourceId' })
    return resourceSkills
}
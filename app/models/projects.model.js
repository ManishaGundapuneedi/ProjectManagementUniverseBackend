import DataTypes from "sequelize";

export const projects = (appDB, Sequelize, status, types) => {
    const projectsModel = appDB.define(
        "projects",
        {
            projectId: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            projectName: {
                type: Sequelize.STRING,
            },
            statusId: {
                type: Sequelize.INTEGER,
            },
            projectTypeId: {
                type: Sequelize.INTEGER,
            },
            startDate: {
                type: DataTypes.DATE
            },
            endDate: {
                type: DataTypes.DATE
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "projects" }
    );
    projectsModel.belongsTo(status, { foreignKey: 'statusId' })
    projectsModel.belongsTo(types, { foreignKey: 'projectTypeId', targetKey: 'typeId' })
    return projectsModel
}
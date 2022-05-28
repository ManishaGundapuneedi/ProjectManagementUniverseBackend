import DataTypes from "sequelize";

export const resourceUtilization = (appDB, Sequelize, resources) => {
    const resourceUtilization = appDB.define(
        "resourceUtilization",
        {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            resourceId: {
                type: Sequelize.UUID,
            },
            availableHrs: {
                type: Sequelize.INTEGER,
            },
            billableHrs: {
                type: Sequelize.INTEGER,
            },
            utilizationPerc: {
                type: DataTypes.DOUBLE,
            },
            targetUtilisation: {
                type: Sequelize.INTEGER,
            },
            graphData: {
                type: Sequelize.STRING,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "resourceUtilization" }
    );
    resourceUtilization.belongsTo(resources, { foreignKey: 'resourceId' })
    return resourceUtilization
}
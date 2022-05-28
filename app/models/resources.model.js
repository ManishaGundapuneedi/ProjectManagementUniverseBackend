export const resources = (appDB, Sequelize) => {
    const resources = appDB.define(
        "resources",
        {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            firstName: {
                type: Sequelize.STRING,
            },
            lastName: {
                type: Sequelize.INTEGER,
            },
            experience: {
                type: Sequelize.INTEGER,
            },
            status: {
                type: Sequelize.STRING,
            },
            timelyCompletion: {
                type: Sequelize.INTEGER,
            },
            pastProjectsCount: {
                type: Sequelize.INTEGER,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "resources" }
    );
    return resources
}

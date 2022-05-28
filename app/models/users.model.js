export const users = (appDB, Sequelize, roles, userAuth) => {
    const usersModel = appDB.define(
        "users",
        {
            userId: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            firstName: {
                type: Sequelize.STRING,
            },
            lastName: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            roleId: {
                type: Sequelize.INTEGER,
            },
            authId: {
                type: Sequelize.UUID,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "users" }
    );

    usersModel.belongsTo(roles, { foreignKey: "roleId" })
    usersModel.belongsTo(userAuth, { foreignKey: "authId" })

    return usersModel
}
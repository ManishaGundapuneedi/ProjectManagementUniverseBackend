export const masterRoles = (appDB, Sequelize) => {
    const masterRolesModel = appDB.define(
        "masterRoles",
        {
            roleId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            roleName: {
                type: Sequelize.STRING,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "masterRoles" }
    );
    return masterRolesModel
}
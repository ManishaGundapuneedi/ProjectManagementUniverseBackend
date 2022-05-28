export const userAuth = (appDB, Sequelize) => {
    const userAuth = appDB.define(
        "userAuth",
        {
            authId: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            pswd: {
                type: Sequelize.STRING,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "userAuth" }
    );
    return userAuth
}
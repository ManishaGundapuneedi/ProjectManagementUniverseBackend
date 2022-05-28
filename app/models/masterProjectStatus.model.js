export const masterProjectStatus = (appDB, Sequelize) => {
    const masterProjectStatus = appDB.define(
        "masterProjectStatus",
        {
            statusId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            status: {
                type: Sequelize.STRING,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "masterProjectStatus" }
    );
    return masterProjectStatus
}
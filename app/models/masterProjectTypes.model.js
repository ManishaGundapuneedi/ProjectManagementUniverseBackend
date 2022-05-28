export const masterProjectTypes = (appDB, Sequelize) => {
    const masterProjectTypes = appDB.define(
        "masterProjectTypes",
        {
            typeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            projectType: {
                type: Sequelize.STRING,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "masterProjectTypes" }
    );
    return masterProjectTypes
}
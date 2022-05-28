export const masterSkills = (appDB, Sequelize) => {
    const masterSkills = appDB.define(
        "masterSkills",
        {
            skillId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            skillName: {
                type: Sequelize.STRING,
            }
        },
        { timestamps: false, freezeTableName: true, tableName: "masterSkills" }
    );
    return masterSkills
}
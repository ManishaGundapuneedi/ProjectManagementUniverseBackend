import { dbConfig } from "../config/db.config.js";
import { Sequelize } from "sequelize";
import { users } from "./users.model.js";
import { userAuth } from "./userAuth.model.js";
import { masterRoles } from "./masterRoles.model.js";

const appDB = new Sequelize(dbConfig.db, dbConfig.userName, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
})

export const indexModels = {}

indexModels.masterRoles = masterRoles(appDB, Sequelize)
indexModels.userAuth = userAuth(appDB, Sequelize)
indexModels.users = users(appDB, Sequelize, indexModels.masterRoles, indexModels.userAuth)

//indexModels.student.hasMany(indexModels.studentSports, { foreignKey: "studentId" })
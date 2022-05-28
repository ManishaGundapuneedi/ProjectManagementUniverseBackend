import { dbConfig } from "../config/db.config.js";
import { Sequelize } from "sequelize";
import { users } from "./users.model.js";
import { userAuth } from "./userAuth.model.js";
import { masterRoles } from "./masterRoles.model.js";
import { masterProjectStatus } from "./masterProjectStatus.model.js";
import { masterProjectTypes } from "./masterProjectTypes.model.js";
import { masterSkills } from "./masterSkills.model.js";
import { projects } from "./projects.model.js";
import { resourceProjects } from "./resourceProject.model.js";
import { resourceRequests } from "./resourceRequests.model.js";
import { resourceSkills } from "./resourceSkills.model.js";
import { resources } from "./resources.model.js";
import { resourceUtilization } from "./resourceUtilization.model.js";

const appDB = new Sequelize(dbConfig.db, dbConfig.userName, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
})

export const indexModels = {}

indexModels.masterProjectStatus = masterProjectStatus(appDB, Sequelize)
indexModels.masterProjectTypes = masterProjectTypes(appDB, Sequelize)
indexModels.masterSkills = masterSkills(appDB, Sequelize)
indexModels.masterRoles = masterRoles(appDB, Sequelize)
indexModels.resources = resources(appDB, Sequelize)

indexModels.userAuth = userAuth(appDB, Sequelize)
indexModels.users = users(appDB, Sequelize, indexModels.masterRoles, indexModels.userAuth)
indexModels.projects = projects(appDB, Sequelize, indexModels.masterProjectStatus, indexModels.masterProjectTypes)
indexModels.resourceProjects = resourceProjects(appDB, Sequelize, indexModels.resources, indexModels.projects)
indexModels.resourceRequests = resourceRequests(appDB, Sequelize, indexModels.projects, indexModels.masterSkills)
indexModels.resourceSkills = resourceSkills(appDB, Sequelize, indexModels.masterSkills, indexModels.resources)
indexModels.resourceUtilization = resourceUtilization(appDB, Sequelize, indexModels.resources)

indexModels.projects.hasMany(indexModels.resourceProjects, {
    foreignKey: "projectId"
});
indexModels.projects.hasMany(indexModels.resourceRequests, {
    foreignKey: "projectId"
});
indexModels.resources.hasMany(indexModels.resourceSkills, {
    foreignKey: "resourceId"
});
indexModels.resources.hasMany(indexModels.resourceProjects, {
    foreignKey: "resourceId"
});

//indexModels.student.hasMany(indexModels.studentSports, { foreignKey: "studentId" })
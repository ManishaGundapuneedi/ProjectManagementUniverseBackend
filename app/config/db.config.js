export const dbConfig = {
    host: "jenkins.divami.com",
    userName: "postgres",
    password: "divami",
    db: "PMverse",
    dialect: "postgres",
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}


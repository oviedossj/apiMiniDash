export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    jwtChangePassword: process.env.JWT_SECRET || 'somesecrettoken',
    env: process.env.NODE_ENV || 'dev' || 'production',
    port: process.env.PORT || 3000,
    dbUrl:'postgres://root:9q03OTLiWHxgtimOdpQqOv6jE6lhOkVi@dpg-cjigq7ocfp5c7380cocg-a.oregon-postgres.render.com/mydb_fofv',
    dbUrlMarias:'mariadb://qsn:uR92*nV.Jg@200.58.107.250:3306/qsn',
    DB: {
        dbUser: process.env.DB_USER || 'root',
        dbPassword: process.env.DB_PASSWORD || 'root',
        dbHost: process.env.DB_HOST || 'localhost',
        dbName: process.env.DB_NAME || 'mydb',
        dbPort: process.env.DB_PORT || 3306,
    },
    accessToken: process.env.ACCESS_TOKEN_SECRET || 'Access_secret',
    refressToken: process.env.REFRESH_TOKEN_SECRET || 'Refresh_secret',
  };
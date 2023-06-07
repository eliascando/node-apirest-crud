import  {config} from 'dotenv'
config();

export default {
    port: process.env.PORT || 4000,  
    dbUser: process.env.DB_USER || '',
    dbPass : process.env.DB_PASS || '',
    dbServer : process.env.DB_SERVER || '',
    dbDatabase : process.env.DB_DATABASE || ''
}
export const config = {
    port: process.env.PORT,
    nse: {
        baseURL: process.env.NSE_URL || 'https://www.nseindia.com/api/',
    }
};

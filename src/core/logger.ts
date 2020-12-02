import winston from 'winston';

const logConfiguration = {
    levels: winston.config.syslog.levels,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            level: 'info',
            filename: './logs/koai-movies.log',
        }),
    ],
    format: winston.format.combine(
        winston.format.label({ label: 'koai-server' }),
        winston.format.simple(),
        winston.format.timestamp(),
        winston.format.printf(({ level, message, label, timestamp }) => {
            return `[${label}:${level}] ${message} (${timestamp})]`;
        })
    ),
};

const logger = winston.createLogger(logConfiguration);

export default logger;

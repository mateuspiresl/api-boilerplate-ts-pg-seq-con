import winston from 'winston';

function formatTimestamp(timestamp) {
  if (!timestamp) {
    return '';
  }

  const date = new Date(timestamp);
  const formattedDate = date.toDateString().substr(4);
  const formattedTime = date.toTimeString().substr(0, 8);
  return `${formattedDate} ${formattedTime} `;
}

const formats = [
  winston.format.timestamp(),
  winston.format.splat(),
  winston.format.colorize(),
  winston.format.printf((info) => {
    const formattedTimestamp = formatTimestamp(info.timestamp);
    return `${formattedTimestamp}${info.level}: ${info.message}`;
  }),
];

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      format: winston.format.combine(...formats),
      level: 'debug',
    }),
    new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
  ],
  exitOnError: false,
};

export const logger = winston.createLogger(options);

process.on('uncaughtException', (error: Error) => {
  logger.error('[UNCAUGHT EXCEPTION] %s', error.stack);
});

process.on('unhandledRejection', (error?: Error) => {
  logger.error('[UNHANDLED REJECTION] %s', error?.stack);
});

/**
 * Configuration for Google Sheets integration
 */

module.exports = {
  // Индексы колонок в Google Sheets (0-based)
  COLUMNS: {
    ID: 0,           // Колонка A - Task ID (IT-48)
    PR_LINK: 7,      // Колонка H - ссылка на PR
  },

  // Имя листа в Google Sheets
  SHEET_NAME: 'Sheet1',

  // Паттерн для извлечения Task ID формата "IT-48"
  TASK_ID_PATTERN: /IT-(\d+)/i,

  // Google Sheets ID
  SHEETS_ID: '1vB8-jTKgC51hDz2jxYkYPSQzF8XlSB6HzEEy3hRflG0',

  // Максимальное количество попыток обновления
  MAX_RETRIES: 3,

  // Таймаут для API запросов (ms)
  API_TIMEOUT: 10000,

  // Логирование
  DEBUG: process.env.DEBUG === 'true',
};

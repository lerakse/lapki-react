// Дата форматируется на сервере и передаётся в props готовой строкой,
// чтобы HTML с сервера и разметка после гидратации совпадали
export function formatDateTime(date) {
  return date.toLocaleString('ru-RU', {
    timeZone: 'Europe/Minsk',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

export function unixToFormattedDateParts(unixTimestamp) {
  // Unix zaman damgasını milisaniyeye dönüştür
  const milliseconds = unixTimestamp * 1000;

  // Unix zaman damgasını temsil eden bir Date nesnesi oluştur
  const dateObject = new Date(milliseconds);

  // Tarih ve saat bilgilerini ayrı ayrı al
  const day = dateObject.toLocaleString("en", { weekday: "short" });
  const month = dateObject.toLocaleString("en", { month: "short" });
  const dayOfMonth = dateObject.getDate();
  const year = dateObject.getFullYear();

  // Oluşturulan tarih parçalarını döndür
  return { day, month, dayOfMonth, year };
}

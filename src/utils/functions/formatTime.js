function formatTime(time) {
  const timeActual = Date.now();
  const timeGap = timeActual - time;
  if (timeGap >= 0 && timeGap < 10000) {
    return "Il y a " + parseInt(timeGap / 1000) + " seconde";
  } else if (timeGap >= 10000 && timeGap < 60000) {
    return "Il y a " + parseInt(timeGap / 1000) + " secondes";
  } else if (timeGap >= 60000 && timeGap < 120000) {
    return "Il y a " + parseInt(timeGap / 60 / 1000) + " minute";
  } else if (timeGap >= 120000 && timeGap < 3600000) {
    return "Il y a " + parseInt(timeGap / 60 / 1000) + " minutes";
  } else if (timeGap >= 3600000 && timeGap < 7200000) {
    return "Il y a " + parseInt(timeGap / 60 / 60 / 1000) + " heure";
  } else if (timeGap >= 7200000 && timeGap < 86400000) {
    return "Il y a " + parseInt(timeGap / 60 / 60 / 1000) + " heures";
  } else if (timeGap >= 86400000 && timeGap < 172800000) {
    return "Il y a " + parseInt(timeGap / 60 / 60 / 24 / 1000) + " jour";
  } else if (timeGap >= 172800000 && timeGap < 2628000000) {
    return "Il y a " + parseInt(timeGap / 60 / 60 / 24 / 1000) + " jours";
  } else if (timeGap >= 2628000000 && timeGap < 31540000000) {
    return "Il y a " + parseInt(timeGap / 60 / 60 / 24 / 30 / 1000) + " mois";
  } else if (timeGap >= 31540000000 && timeGap < 63070000000) {
    return (
      "Il y a " + parseInt(timeGap / 60 / 60 / 24 / 30 / 12 / 1000) + " an"
    );
  } else if (timeGap >= 63070000000) {
    return (
      "Il y a " + parseInt(timeGap / 60 / 60 / 24 / 30 / 12 / 1000) + " ans"
    );
  } else {
    return "Error";
  }
}

export default formatTime;

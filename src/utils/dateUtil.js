function getFromatedDate(vlaue, type, inMS) {
  if (!type) return vlaue;

  if (!inMS) {
    vlaue = vlaue * 1000;
  }

  const date = new Date(vlaue);

  let options;

  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
}

export { getFromatedDate };

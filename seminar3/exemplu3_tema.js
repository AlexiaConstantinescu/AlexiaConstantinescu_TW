const formatStringNamed = (template, params) => {
  let modified = template;

  for (const key in params) {
    const regex = new RegExp(`\\{${key}\\}`, "g");
    modified = modified.replace(regex, params[key]);
  }

  return modified;
};

// Exemplu de folosire:
const result = formatStringNamed("un {substantiv} este {adjectiv}", {
  substantiv: "căluț",
  adjectiv: "drăguț",
});

console.log(result);

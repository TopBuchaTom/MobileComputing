let results = flatPersons.sort(
  (a, b) => b.name.charCodeAt(0) - a.name.charCodeAt(0));
for (const result of results)
    console.log(result.name);
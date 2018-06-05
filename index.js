
lowerCaseDrivers = a => {
  return a.map(el =>
    el.toLowerCase()
  )
  // Map, then lowercase each element
}

nameToAttributes = a => {
  return a.map(el =>
    Object.assign({
     firstName: el.split(' ')[0],
      lastName: el.split(' ')[1]
    })
    // Map, then assign each split element into an object
  )
}

attributesToPhrase = a => {
  return a.map(el =>
    `${el.name} is from ${el.hometown}`
  )
  // Map, then string interpolate!
}

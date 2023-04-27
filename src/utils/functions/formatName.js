function formatName(lastName, firstName) {
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase(); //prettier-ignore
}

export default formatName;

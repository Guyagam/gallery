'use strict'



function getDate(date) {
  date = new Date(date)
  console.log(date);
  var dd = String(date.getDate()).padStart(2, '0')
  var mm = String(date.getMonth() + 1).padStart(2, '0')
  var yyyy = date.getFullYear()
  return dd + '/' + mm + '/' + yyyy
}

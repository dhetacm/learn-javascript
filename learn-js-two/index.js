const names = [
  'Mr. Furqan',
  'Mrs. Rina',
  'Mrs. Manda',
  'Mr. Arsyad',
  'Mr. Ipul',
  'Mr. Gatot',
  'Mr. Iwin',
  'Mr. Yusuf',
  'Mr. Panji',
  'Mrs. Dheta',
  'Mr. Christian',
  'Sutak',
  'Sudetak'
]

console.log(`The Ancalagon : ${names}`)

const result_mr = names.filter(names => names.includes('Mr.'))
const result_mrs = names.filter(names => names.includes('Mrs.'))
console.log(`Boys gang : ${result_mr}`)
console.log(`Girls gang : ${result_mrs}`)

const gender = names.map(x => {
  if (x.includes('Mr.')) {
    return x + '(Male)'
  } else if (x.includes('Mrs.')) {
    return x + '(Female)'
  } else {
    return x + '(Unknown)'
  }
})

console.log("Let's make sure our gender :")
console.log(gender)

const search_name = names.filter(names => names.includes('dheta'))
console.log(search_name)

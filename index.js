class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let array = string.split(" ")
    let newArray = []
    array.forEach(function(word){
      if (!(word == 'the' || word == 'a' || word == 'an' || word == 'but' || word == 'of' ||word == 'and'||word =='for'||word =='by'||word=='from'||word=='at')){
        newArray.push(word[0].toUpperCase() + word.slice(1))
      } else {
        newArray.push(word)
      }
    })
    let newString = newArray.join(" ")
    return newString.charAt(0).toUpperCase() + newString.slice(1)
  }


}
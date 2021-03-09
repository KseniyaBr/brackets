module.exports = function check(str, bracketsConfig) {
	let brackets = "[]{}()<>||",
  		emptyArr = [];

  	for(let bracket of str) {
    	let bracketsIndex = brackets.indexOf(bracket)

    if (bracketsIndex === -1){
      continue
    }

    if(bracketsIndex % 2 === 0) {
      emptyArr.push(bracketsIndex + 1)
    } else {
      if(emptyArr.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
    return emptyArr.length === 0
}

function myCloser () {
  let global = 5
  function temp () {
    global++
  }
  temp()
  temp()
  console.log(global)
}

myCloser()

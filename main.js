$(document).ready(function () {
//Variables
var rock = $('#rock')
var paper = $('#paper')
var scissors = $('#scissors')
var options = ['rock', 'paper', 'scissors']
var status = null
var wins = 0
var losses = 0
var ties = 0

//Functions


   function computerSelection() {
    return options[Math.floor(Math.random() * options.length)]
  }

  function test() {
    if (user === comp)
      return 'tie'
  
    switch(user) {
      case 'rock':
        return comp === 'paper' ? 'lose' : 'win'
      case 'paper':
        return comp === 'scissors' ? 'lose' : 'win'
      case 'scissors':
        return comp === 'rock' ? 'lose' : 'win'
      default:
        return
    }
  }

  function scorekeep() {
      switch(status) {
        case 'tie':
          return ties += 1
        case 'win':
          return wins += 1
        case 'lose':
          return losses += 1
        default:
          return
      }
  }

  function game(){
rock.on('click', function() {
    $('h1').text("Fight!!!")
    user = 'rock'
    comp = computerSelection()
    status = test()
    console.log(user)
    console.log(comp)
    console.log(status)
    console.log(scorekeep(status))
})
paper.on('click', function() {
    $('h1').text("Fight!!!")
    user = 'paper'
    comp = computerSelection()
    status = test()
    console.log(user)
    console.log(comp)
    console.log(test())
    console.log(scorekeep(status))
})
scissors.on('click', function() {
    $('h1').text("Fight!!!")
    user = 'scissors'
    comp = computerSelection()
    status = test()
    console.log(user)
    console.log(comp)
    console.log(test())
    console.log(scorekeep(status))
})


  }

game()


})
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
var temp = null
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
          return $('#draw').text(ties += 1)
        case 'win':
        return $('#win').text(wins += 1)
        case 'lose':
        return $('#loss').text(losses += 1)
        default:
          return
      }
  }

function game(){
rock.on('click', function() {
    $('h1').text("Fight!!!")
    $('#pchs').text("ROCK!")
    user = 'rock'
    comp = computerSelection()
    $('#cchs').text(comp)
    status = test()
    console.log(user)
    console.log(comp)
    scorekeep(status)
})
paper.on('click', function() {
    $('h1').text("Fight!!!")
    $('#pchs').text("PAPER!")
    user = 'paper'
    comp = computerSelection()
    status = test()
    console.log(user)
    console.log(comp)
    scorekeep(status)
})
scissors.on('click', function() {
    $('h1').text("Fight!!!")
    $('#pchs').text("SCISSORS!")
    user = 'scissors'
    comp = computerSelection()
    status = test()
    console.log(user)
    console.log(comp)
    console.log(test())
    scorekeep(status)
})


  }

game()


})
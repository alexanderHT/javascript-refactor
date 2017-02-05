# javascript-refactor

change code from procudural to oop and make it MVC

# Code ( location : public\javascripts\app.js )
```
/*
| obj model represent model in mvc
|--------------------------------------------
| obj model generate random data from 1 to 6
*/
const model = {
  diceValue: function () {
    return Math.floor((Math.random() * 6) + 1)
  }
}

/*
| obj controller represent controller in mvc
|--------------------------------------------
| obj controller get a request from view to do something
*/

const controller = {
  addDice: function () {
    $('.dice').append(`<div class="die">${model.diceValue()}</div>`)
  },
  rollDice: function () {
    $('.die').each(function (index, die) {
      $(die).text(model.diceValue)
    })
  }
}

/*
| obj view represent view in mvc
|-----------------------------------
| obj view interactions with the user
*/
const view = {
  viewDiceAdd: function () {
    $('#roller button.add').on('click', function () {
      controller.addDice()
    })
  },
  viewDiceRool: function () {
    $('#roller button.roll').on('click', function () {
      controller.rollDice()
    })
  },
  viewAll: function () {
    view.viewDiceAdd()
    view.viewDiceRool()
  }
}

/* call obj view */
view.viewAll()

```

# How to use
```
1. npm install
2. npm run dev
3. type http://localhost:3000/ on the url
```

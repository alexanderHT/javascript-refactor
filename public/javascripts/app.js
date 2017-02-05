const model = {
  diceValue: function () {
    return Math.floor((Math.random() * 6) + 1)
  }
}

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

view.viewAll()

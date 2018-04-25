
let history = {
    oneA: null,
    twoA: null,
    threeA: null,
    oneB: null,
    twoB: null,
    threeB: null,
    oneC: null,
    twoC: null,
    threeC: null
}

function play(spaceId) {
    let val = prompt('X or O?')
    if(val !== 'X' && val !== 'O') {
        alert('invalid entry, please try again')
    } else {
        let space = document.getElementById(spaceId)
        space.innerHTML = val;
        space.disabled = true;
        saveDetails(spaceId, val);
    }
}

function saveDetails(spaceId, val) {
    history[spaceId] = val;
    if((history.oneA === 'X' && history.oneB === 'X' && history.oneC === 'X') || (history.oneA === 'O' && history.oneB === 'O' && history.oneC === 'O')) {
        endGame()
    } else if((history.oneA === 'X' && history.twoA === 'X' && history.threeA === 'X') || (history.oneA === 'O' && history.twoA === 'O' && history.threeA === 'O')) {
        endGame()
    } 
}

function endGame() {
    setTimeout(function() {
        alert('You win!')
    }, 1500)
}

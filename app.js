let items = document.querySelectorAll('.item')
let count = 0;
let btn = document.querySelector('.start')
let m = document.querySelector('.message')
let winx = document.querySelector('.stats_x')
let countx = 0
let wino = document.querySelector('.stats_о')
let counti = 0
let winn = document.querySelector('.stats_n')
let countn = 0 

let winIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


btn.onclick = () => {
    let i = 0;

    while (i < items.length) {
        items[i].innerHTML = ''
        i++
    }
}


items.forEach((item, i) => {
    item.onclick = () => {
        if (item.innerHTML.length == 0) {
            if (count % 2 == 0 || count == 0) {
                item.innerHTML = 'X'
            }
            else {
                item.innerHTML = 'O'
            }


            count++


            for (let i = 0; i < winIndex.length; i++) {
                let step = 0
                if (items[winIndex[i][step]].innerHTML == 'X' && items[winIndex[i][step + 1]].innerHTML == 'X' && items[winIndex[i][step + 2]].innerHTML == 'X') {
                    alert('Выйграл X')
                    count = 0
                    countx++
                    winx.innerHTML = countx
                    let i = 0

                    while (i < items.length) {
                        items[i].innerHTML = ''
                        i++
                    }
                }
            }

            for (let i = 0; i < winIndex.length; i++) {
                let step = 0
                if (items[winIndex[i][step]].innerHTML == 'O' && items[winIndex[i][step + 1]].innerHTML == 'O' && items[winIndex[i][step + 2]].innerHTML == 'O') {
                    alert('Выйграл O')
                    count = 0
                    counti++
                    wino.innerHTML = counti

                    let i = 0

                    while (i < items.length) {
                        items[i].innerHTML = ''
                        i++
                    }
                }
            }


            if (count == 9) {
                alert('Ничья')
                count = 0
                countn++
                winn.innerHTML = countn

                let i = 0

                while (i < items.length) {
                    items[i].innerHTML = ''
                    i++
                }
            }

        }
    }

})

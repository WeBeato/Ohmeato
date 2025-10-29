const colors = {
    black: { digit: 0, multiplier: 1 },
    brown: { digit: 1, multiplier: 10, tolerance: 1, tc: 100 },
    red: { digit: 2, multiplier: 100, tolerance: 2, tc: 50 },
    orange: { digit: 3, multiplier: 1000, tc: 15 },
    yellow: { digit: 4, multiplier: 10000, tc: 25 },
    green: { digit: 5, multiplier: 100000, tolerance: 0.5 },
    blue: { digit: 6, multiplier: 1000000, tolerance: 0.25, tc:10},
    violet: { digit: 7, multiplier: 10000000, tolerance: 0.1, tc:5},
    gray: { digit: 8, tolerance: 0.05 },
    white: { digit: 9 },
    gold: { multiplier: 0.1, tolerance: 5 },
    silver: { multiplier: 0.01, tolerance: 10 }
};


function formatValue(resValue) {
    let formatted;

    if (resValue >= 1000000) {
        formatted = resValue / 1000000;
        formatted = +formatted.toFixed(2);
        return formatted + '㏁';
    }
    else if (resValue >= 1_000) {
        formatted = resValue / 1000;
        formatted = +formatted.toFixed(2);
        return formatted + '㏀';
    }
    else {
        formatted = +resValue.toFixed(2);
        return formatted + 'Ω';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const resBands = document.querySelectorAll('input[name="bands"]');
    resBands.forEach(band => {
        band.addEventListener('change', calcRes);
    });
});

function calcRes() {
    document.querySelector('.output p').textContent = '';

    if (document.getElementById('4bands').checked) {
        document.getElementById('res__4bands').style.display = 'flex';
        document.getElementById('res__5bands').style.display = 'none';
        document.getElementById('res__6bands').style.display = 'none';


        // Res 4Bands Digit 1
        let r4BD1Show = false;
        document.querySelector('#res__4bands .digit1')
            .addEventListener('click', () => {
                if (r4BD1Show) {
                    document.querySelector('.digit1 .digit-colors').classList.remove('digit-colors--show')
                    r4BD1Show = false;
                } else {
                    document.querySelector('.digit1 .digit-colors').classList.add('digit-colors--show')
                    r4BD1Show = true;
                }
            })
            ;

        const digit1Btns = document.querySelectorAll('#res__4bands .digit1 .digit-btn');
        digit1Btns.forEach(digitBtn => {
            digitBtn.addEventListener('click', () => {
                const btnColor = digitBtn.dataset.color;
                const digit1 = document.getElementById('digit1');
                digit1.style.backgroundColor = btnColor;
                digit1.setAttribute('data-color', btnColor);

            })
        });


        // Res 4Bands Digit 2
        let r4BD2Show = false;
        document.querySelector('#res__4bands .digit2')
            .addEventListener('click', () => {
                if (r4BD2Show) {
                    document.querySelector('.digit2 .digit-colors').classList.remove('digit-colors--show')
                    r4BD2Show = false;
                } else {
                    document.querySelector('.digit2 .digit-colors').classList.add('digit-colors--show')
                    r4BD2Show = true;
                }
            })
            ;

        const digit2Btns = document.querySelectorAll('#res__4bands .digit2 .digit-btn');
        digit2Btns.forEach(digitBtn => {
            digitBtn.addEventListener('click', () => {
                const btnColor = digitBtn.dataset.color;
                const digit2 = document.getElementById('digit2');
                digit2.style.backgroundColor = btnColor;
                digit2.setAttribute('data-color', btnColor);
            })
        });


        // Res 4Bands Multiplier
        let r4BMShow = false;
        document.querySelector('#res__4bands .multiplier')
            .addEventListener('click', () => {
                if (r4BMShow) {
                    document.querySelector('.multiplier .multiplier-colors').classList.remove('multiplier-colors--show')
                    r4BMShow = false;
                } else {
                    document.querySelector('.multiplier .multiplier-colors').classList.add('multiplier-colors--show')
                    r4BMShow = true;
                }
            })
            ;

        const multiplierBtns = document.querySelectorAll('#res__4bands .multiplier .multiplier-btn');
        multiplierBtns.forEach(multiplierBtn => {
            multiplierBtn.addEventListener('click', () => {
                const btnColor = multiplierBtn.dataset.color;
                const multiplier = document.getElementById('multiplier');
                multiplier.style.backgroundColor = btnColor;
                multiplier.setAttribute('data-color', btnColor);
            })
        });



        // Res 4Bands Tolerance
        let r4BTShow = false;
        document.querySelector('#res__4bands .tolerance')
            .addEventListener('click', () => {
                if (r4BTShow) {
                    document.querySelector('.tolerance .tolerance-colors').classList.remove('tolerance-colors--show')
                    r4BTShow = false;
                } else {
                    document.querySelector('.tolerance .tolerance-colors').classList.add('tolerance-colors--show')
                    r4BTShow = true;
                }
            })
            ;

        const toleranceBtns = document.querySelectorAll('#res__4bands .tolerance .tolerance-btn');
        toleranceBtns.forEach(toleranceBtn => {
            toleranceBtn.addEventListener('click', () => {
                const btnColor = toleranceBtn.dataset.color;
                const tolerance = document.getElementById('tolerance');
                tolerance.style.backgroundColor = btnColor;
                tolerance.setAttribute('data-color', btnColor);
            })
        });

        // Get Input Colors
        let inputColors = [];
        const resBands = document.querySelector('#res__4bands');
        const observer = new MutationObserver(() => {
            const bands = document.querySelectorAll('#res__4bands .band');
            inputColors = [...bands].map(band => band.dataset.color);
            resValue();
        });

        observer.observe(resBands, {

            attributes: true,
            subtree: true,
            attributeFilter: ['data-color']
        });

        function resValue() {
            const band1 = colors[inputColors[0]].digit;
            const band2 = colors[inputColors[1]].digit;
            const multiplier = colors[inputColors[2]].multiplier;
            const tolerance = colors[inputColors[3]].tolerance;
            const result = (band1 * 10 + band2) * multiplier;
            const formattedValue = formatValue(result);

            document.querySelector('.output p')
                .textContent = `${formattedValue}, ${tolerance}%`;
        }

    }


    if (document.getElementById('5bands').checked) {
        document.getElementById('res__4bands').style.display = 'none';
        document.getElementById('res__5bands').style.display = 'flex';
        document.getElementById('res__6bands').style.display = 'none';


        // Res 5Bands Digit 1
        let r5BD1Show = false;
        document.querySelector('#res__5bands .r5digit1')
            .addEventListener('click', () => {
                if (r5BD1Show) {
                    document.querySelector('.r5digit1 .digit-colors').classList.remove('digit-colors--show')
                    r5BD1Show = false;
                } else {
                    document.querySelector('.r5digit1 .digit-colors').classList.add('digit-colors--show')
                    r5BD1Show = true;
                }
            })
            ;

        const digit1Btns = document.querySelectorAll('#res__5bands .r5digit1 .digit-btn');
        digit1Btns.forEach(digitBtn => {
            digitBtn.addEventListener('click', () => {
                const btnColor = digitBtn.dataset.color;
                const digit1 = document.getElementById('r5digit1');
                digit1.style.backgroundColor = btnColor;
                digit1.setAttribute('data-color', btnColor);
            })
        });


        // Res 5Bands Digit 2
        let r5BD2Show = false;
        document.querySelector('#res__5bands .r5digit2')
            .addEventListener('click', () => {
                if (r5BD2Show) {
                    document.querySelector('.r5digit2 .digit-colors').classList.remove('digit-colors--show')
                    r5BD2Show = false;
                } else {
                    document.querySelector('.r5digit2 .digit-colors').classList.add('digit-colors--show')
                    r5BD2Show = true;
                }
            })
            ;

        const digit2Btns = document.querySelectorAll('#res__5bands .r5digit2 .digit-btn');
        digit2Btns.forEach(digitBtn => {
            digitBtn.addEventListener('click', () => {
                const btnColor = digitBtn.dataset.color;
                const digit2 = document.getElementById('r5digit2');
                digit2.style.backgroundColor = btnColor;
                digit2.setAttribute('data-color', btnColor);
            })
        });


        // Res 5Bands Digit 3
        let r5BD3Show = false;
        document.querySelector('#res__5bands .r5digit3')
            .addEventListener('click', () => {
                if (r5BD3Show) {
                    document.querySelector('.r5digit3 .digit-colors').classList.remove('digit-colors--show')
                    r5BD3Show = false;
                } else {
                    document.querySelector('.r5digit3 .digit-colors').classList.add('digit-colors--show')
                    r5BD3Show = true;
                }
            })
            ;

        const digit3Btns = document.querySelectorAll('#res__5bands .r5digit3 .digit-btn');
        digit3Btns.forEach(digitBtn => {
            digitBtn.addEventListener('click', () => {
                const btnColor = digitBtn.dataset.color;
                const digit3 = document.getElementById('r5digit3');
                digit3.style.backgroundColor = btnColor;
                digit3.setAttribute('data-color', btnColor);
            })
        });


        // Res 5Bands Multiplier
        let r5BMShow = false;
        document.querySelector('#res__5bands .r5multiplier')
            .addEventListener('click', () => {
                if (r5BMShow) {
                    document.querySelector('.r5multiplier .multiplier-colors').classList.remove('multiplier-colors--show')
                    r5BMShow = false;
                } else {
                    document.querySelector('.r5multiplier .multiplier-colors').classList.add('multiplier-colors--show')
                    r5BMShow = true;
                }
            })
            ;

        const multiplierBtns = document.querySelectorAll('#res__5bands .r5multiplier .multiplier-btn');
        multiplierBtns.forEach(multiplierBtn => {
            multiplierBtn.addEventListener('click', () => {
                const btnColor = multiplierBtn.dataset.color;
                const multiplier = document.getElementById('r5multiplier');
                multiplier.style.backgroundColor = btnColor;
                multiplier.setAttribute('data-color', btnColor);
            })
        });



        // Res 5Bands Tolerance
        let r5BTShow = false;
        document.querySelector('#res__5bands .r5tolerance')
            .addEventListener('click', () => {
                if (r5BTShow) {
                    document.querySelector('.r5tolerance .tolerance-colors').classList.remove('tolerance-colors--show')
                    r5BTShow = false;
                } else {
                    document.querySelector('.r5tolerance .tolerance-colors').classList.add('tolerance-colors--show')
                    r5BTShow = true;
                }
            })
            ;

        const toleranceBtns = document.querySelectorAll('#res__5bands .r5tolerance .tolerance-btn');
        toleranceBtns.forEach(toleranceBtn => {
            toleranceBtn.addEventListener('click', () => {
                const btnColor = toleranceBtn.dataset.color;
                const tolerance = document.getElementById('r5tolerance');
                tolerance.style.backgroundColor = btnColor;
                tolerance.setAttribute('data-color', btnColor);
            })
        });


        // Get Input Colors
        let inputColors = [];
        const resBands = document.querySelector('#res__5bands');
        const observer = new MutationObserver(() => {
            const bands = document.querySelectorAll('#res__5bands .band');
            inputColors = [...bands].map(band => band.dataset.color);
            resValue();
        });

        observer.observe(resBands, {

            attributes: true,
            subtree: true,
            attributeFilter: ['data-color']
        });

        function resValue() {
            const band1 = colors[inputColors[0]].digit;
            const band2 = colors[inputColors[1]].digit;
            const band3 = colors[inputColors[2]].digit;
            const multiplier = colors[inputColors[3]].multiplier;
            const tolerance = colors[inputColors[4]].tolerance;
            const result = (band1 * 100 + band2 * 10 + band3) * multiplier;
            const formattedValue = formatValue(result);
            console.log(`${formattedValue}, ${tolerance}%`);

            document.querySelector('.output p')
                .textContent = `${formattedValue}, ${tolerance}%`;
        };
    }


    if (document.getElementById('6bands').checked) {
        document.getElementById('res__4bands').style.display = 'none';
        document.getElementById('res__5bands').style.display = 'none';
        document.getElementById('res__6bands').style.display = 'flex';


        // Res 6Bands Digit 1
        let r6BD1Show = false;
        document.querySelector('#res__6bands .r6digit1')
            .addEventListener('click', () => {
                if (r6BD1Show) {
                    document.querySelector('.r6digit1 .digit-colors').classList.remove('digit-colors--show')
                    r6BD1Show = false;
                } else {
                    document.querySelector('.r6digit1 .digit-colors').classList.add('digit-colors--show')
                    r6BD1Show = true;
                }
            })
            ;

        const digit1Btns = document.querySelectorAll('#res__6bands .r6digit1 .digit-btn');
        digit1Btns.forEach(digitBtn => {
            digitBtn.addEventListener('click', () => {
                const btnColor = digitBtn.dataset.color;
                const digit1 = document.getElementById('r6digit1');
                digit1.style.backgroundColor = btnColor;
                digit1.setAttribute('data-color', btnColor);
            })
        });


        // Res 6Bands Digit 2
        let r6BD2Show = false;
        document.querySelector('#res__6bands .r6digit2')
            .addEventListener('click', () => {
                if (r6BD2Show) {
                    document.querySelector('.r6digit2 .digit-colors').classList.remove('digit-colors--show')
                    r6BD2Show = false;
                } else {
                    document.querySelector('.r6digit2 .digit-colors').classList.add('digit-colors--show')
                    r6BD2Show = true;
                }
            })
            ;

        const digit2Btns = document.querySelectorAll('#res__6bands .r6digit2 .digit-btn');
        digit2Btns.forEach(digitBtn => {
            digitBtn.addEventListener('click', () => {
                const btnColor = digitBtn.dataset.color;
                const digit1 = document.getElementById('r6digit2');
                digit1.style.backgroundColor = btnColor;
                digit1.setAttribute('data-color', btnColor);
            })
        });


        // Res 6Bands Digit 3
        let r6BD3Show = false;
        document.querySelector('#res__6bands .r6digit3')
            .addEventListener('click', () => {
                if (r6BD3Show) {
                    document.querySelector('.r6digit3 .digit-colors').classList.remove('digit-colors--show')
                    r6BD3Show = false;
                } else {
                    document.querySelector('.r6digit3 .digit-colors').classList.add('digit-colors--show')
                    r6BD3Show = true;
                }
            })
            ;

        const digit3Btns = document.querySelectorAll('#res__6bands .r6digit3 .digit-btn');
        digit3Btns.forEach(digitBtn => {
            digitBtn.addEventListener('click', () => {
                const btnColor = digitBtn.dataset.color;
                const digit1 = document.getElementById('r6digit3');
                digit1.style.backgroundColor = btnColor;
                digit1.setAttribute('data-color', btnColor);
            })
        });


        // Res 6Bands Multiplier
        let r6BMShow = false;
        document.querySelector('#res__6bands .r6multiplier')
            .addEventListener('click', () => {
                if (r6BMShow) {
                    document.querySelector('.r6multiplier .multiplier-colors').classList.remove('multiplier-colors--show')
                    r6BMShow = false;
                } else {
                    document.querySelector('.r6multiplier .multiplier-colors').classList.add('multiplier-colors--show')
                    r6BMShow = true;
                }
            })
            ;

        const multiplierBtns = document.querySelectorAll('#res__6bands .r6multiplier .multiplier-btn');
        multiplierBtns.forEach(multiplierBtn => {
            multiplierBtn.addEventListener('click', () => {
                const btnColor = multiplierBtn.dataset.color;
                const multiplier = document.getElementById('r6multiplier');
                multiplier.style.backgroundColor = btnColor;
                multiplier.setAttribute('data-color', btnColor);
            })
        });



        // Res 6Bands Tolerance
        let r6BTShow = false;
        document.querySelector('#res__6bands .r6tolerance')
            .addEventListener('click', () => {
                if (r6BTShow) {
                    document.querySelector('.r6tolerance .tolerance-colors').classList.remove('tolerance-colors--show')
                    r6BTShow = false;
                } else {
                    document.querySelector('.r6tolerance .tolerance-colors').classList.add('tolerance-colors--show')
                    r6BTShow = true;
                }
            })
            ;

        const toleranceBtns = document.querySelectorAll('#res__6bands .r6tolerance .tolerance-btn');
        toleranceBtns.forEach(toleranceBtn => {
            toleranceBtn.addEventListener('click', () => {
                const btnColor = toleranceBtn.dataset.color;
                const tolerance = document.getElementById('r6tolerance');
                tolerance.style.backgroundColor = btnColor;
                tolerance.setAttribute('data-color', btnColor);
            })
        });


        // Res 6Bands TC
        let r6BTCShow = false;
        document.querySelector('#res__6bands .tc')
            .addEventListener('click', () => {
                if (r6BTCShow) {
                    document.querySelector('.tc .tc-colors').classList.remove('tc-colors--show')
                    r6BTCShow = false;
                } else {
                    document.querySelector('.tc .tc-colors').classList.add('tc-colors--show')
                    r6BTCShow = true;
                }
            })
            ;

        const tcBtns = document.querySelectorAll('#res__6bands .tc .tc-btn');
        tcBtns.forEach(tcBtn => {
            tcBtn.addEventListener('click', () => {
                const btnColor = tcBtn.dataset.color;
                const tc = document.getElementById('tc');
                tc.style.backgroundColor = btnColor;
                tc.setAttribute('data-color', btnColor);
            })
        });


        // Get Input Colors
        let inputColors = [];
        const resBands = document.querySelector('#res__6bands');
        const observer = new MutationObserver(() => {
            const bands = document.querySelectorAll('#res__6bands .band');
            inputColors = [...bands].map(band => band.dataset.color);
            resValue();
        });

        observer.observe(resBands, {

            attributes: true,
            subtree: true,
            attributeFilter: ['data-color']
        });

        function resValue() {
            const band1 = colors[inputColors[0]].digit;
            const band2 = colors[inputColors[1]].digit;
            const band3 = colors[inputColors[2]].digit;
            const multiplier = colors[inputColors[3]].multiplier;
            const tolerance = colors[inputColors[4]].tolerance;
            const tc = colors[inputColors[5]].tc;
            const result = (band1 * 100 + band2 * 10 + band3) * multiplier;
            const formattedValue = formatValue(result);

            document.querySelector('.output p')
                .textContent = `${formattedValue}, ${tolerance}%, ${tc}ppm`;
        };
    }
}


// example = ['yellow', 'violet', 'red', 'silver'];
// example1 = ['blue', 'gray', 'black', 'red', 'gold'];
// example2 = ['green', 'blue', 'black', 'orange', 'violet', 'red'];
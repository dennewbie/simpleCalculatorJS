let digitsArray = new Array();
        let numbersArray = new Array();
        let operationsArray = new Array();

        let nDigitsInserted = 0;
        let nNumbersInserted = 0;
        let isNegative = false;
        let isFloat = false;

        let idLabel = "#resultLabel";
        let oneButton = "#oneButton",
            twoButton = "#twoButton",
            threeButton = "#threeButton",
            fourButton = "#fourButton",
            fiveButton = "#fiveButton",
            sixButton = "#sixButton",
            sevenButton = "#sevenButton",
            eightButton = "#eightButton",
            nineButton = "#nineButton",
            zeroButton = "#zeroButton";
        let plusButton = "#plusButton",
            minusButton = "#minusButton",
            mulButton = "#mulButton",
            divButton = "#divButton",
            equalButton = "#equalButton",
            dotButton = "#dotButton";
        let sqrtButton = "#sqrtButton",
            changeSignButton = "#changeSignButton",
            deleteAllButton = "#deleteAllButton",
            deleteLastButton = "#deleteLastButton";

        digitsArray[0] = '0';
        nDigitsInserted++;


        $(window).load(function () {
            $(oneButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(oneButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(twoButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(twoButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(threeButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(threeButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(fourButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(fourButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(fiveButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(fiveButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(sixButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(sixButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(sevenButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(sevenButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(eightButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(eightButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(nineButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(nineButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(zeroButton).click(function () {
                if (digitLimits() == false) {
                    var number = getNumber(zeroButton);
                    digitsArray[nDigitsInserted] = number;
                    nDigitsInserted += 1;
                }

                updateLabel(digitsArray);
            });

            $(changeSignButton).click(function () {
                var labelValue = getLabelValue();
                if (labelValue != undefined) {
                    var oppositeValue = -labelValue;
                    changeSignTextLabel(oppositeValue);
                }
            });

            $(deleteAllButton).click(function () {
                deleteAll();
                deleteOlderNumbersAndOperations();
            });

            $(deleteLastButton).click(function () {
                deleteLastDigit();
            });

            $(sqrtButton).click(function () {
                var number = Math.sqrt(getLabelValue());
                if (Number.isNaN(number)) {
                    alert("Error with Square Root...");
                    deleteAll();
                    deleteOlderNumbersAndOperations();
                    return;
                }

                $(idLabel).text(number);
            });

            $(dotButton).click(function () {
                if (isFloat == true) {
                    alert("Number has already a dot.");
                } else {
                    isFloat = true;
                    if (nDigitsInserted == 0) {
                        digitsArray[0] = '0';
                        digitsArray[1] = '.';
                        nDigitsInserted += 2;
                    } else {
                        digitsArray[nDigitsInserted] = ".";
                        nDigitsInserted += 1;
                    }
                    updateLabel(digitsArray);
                }

            });

            $(plusButton).click(function () {
                saveLabelValue();
                operationsArray.push("+");
            });

            $(minusButton).click(function () {
                saveLabelValue();
                operationsArray.push("-");
            });

            $(mulButton).click(function () {
                saveLabelValue();
                operationsArray.push("*");
            });

            $(divButton).click(function () {
                saveLabelValue();
                operationsArray.push("/");
            });

            $(equalButton).click(async function () {
                if (digitLimits() === true) {
                    return;
                }

                await saveLabelValue();
                deleteAll();
                getResult();
                deleteOlderNumbersAndOperations();
            });
        });

        function updateLabelWithResult(result) {
            if (Number.isNaN(result) || result == undefined || result == null) {
                //fatalError();
                return;
            } else {
                $(idLabel).text(result);
            }
        }

        function getResult() {
            let result = 0.00;
            while (operationsArray.length > 0) {
                let singleOperation = operationsArray.shift();
                numbersArray = numbersArray.filter(function (value) {
                    return !Number.isNaN(value);
                });

                let firstNumber = parseFloat(numbersArray.shift()), secondNumber = parseFloat(numbersArray.shift());
                if (Number.isNaN(firstNumber) || firstNumber == undefined || firstNumber == null) {
                    firstNumber = 0.00;
                } 

                if (Number.isNaN(secondNumber) || secondNumber == undefined || secondNumber == null) {
                    secondNumber = 0.00;
                }

                switch (singleOperation) {
                    case "+":
                        result = parseFloat(firstNumber + secondNumber);
                        break;
                    case "-":
                        result = parseFloat(firstNumber - secondNumber);
                        break;
                    case "*":
                    result = parseFloat(firstNumber * secondNumber);
                        break;
                    case "/":
                    result = parseFloat(firstNumber / secondNumber);
                        break;
                    default:
                        fatalError();
                        break;
                }

                numbersArray.unshift(result);
            }
            updateLabelWithResult(result);
        }

        function fatalError() {
            deleteAll();
            deleteOlderNumbersAndOperations();
            alert("It seems there is an error. Please send a report at:\n caruso.denny@gmail.com\n");
            location.reload();
        }

        async function saveLabelValue() {
            var labelValue = parseFloat(getLabelValue());

            if (labelValue != undefined) {
                if (Number.isNaN(labelValue)) {
                    numbersArray.push(0);
                } else {
                    numbersArray.push(labelValue);
                }
                nNumbersInserted += 1;
                deleteAll();
            }
            return;
        }

        function deleteOlderNumbersAndOperations() {
            resetNumbersInserted();
            numbersArray.splice(0, numbersArray.length);
            operationsArray.splice(0, operationsArray.length);
        }

        function deleteAll() {
            digitsArray.splice(0, digitsArray.length);

            resetDigitsInserted();
            isNegative = false;
            isFloat = false;
            resetLabel();
        }

        function getLabelValue() {
            var labelValue = $(idLabel).text();
            if (labelValue != 0 && labelValue != undefined && labelValue != null) {
                return parseFloat(labelValue);
            } else {
                return undefined;
            }
        }

        function deleteLastDigit() {
            var deletedItem = digitsArray.pop();
            if (deletedItem === '.') {
                isFloat = false;
            }

            if (nDigitsInserted > 1) {
                updateLabel(digitsArray);
                nDigitsInserted--;
            } else {
                resetLabel();
                resetDigitsInserted();
                isFloat = false;
                isNegative = false;
            }
        }

        function resetLabel() {
            $(idLabel).text("0");
        }

        function resetDigitsInserted() {
            nDigitsInserted = 0;
        }

        function resetNumbersInserted() {
            nNumbersInserted = 0;
        }

        function getNumber(idButton) {
            if (nDigitsInserted == 1 && digitsArray[0] == 0) {
                digitsArray.pop();
                resetDigitsInserted();
                resetLabel();
            }
            return ($(idButton).val());
        }

        function digitLimits() {
            if (nDigitsInserted > 20 || $(idLabel).text().length > 20) {
                alert("Overflow. Please try again...");
                return true;
            } else {
                return false;
            }
        }

        function printArray(array) {
            for (let index = 0; index < array.length; index++) {
                console.log(array[index]);
            }
        }

        function updateLabel(array) {
            var finalValue = "";
            if (isNegative == true) {
                finalValue += '-';
            }
            for (let index = 0; index < array.length; index++) {
                finalValue += array[index];
            }

            if (finalValue != "") {
                $(idLabel).text(finalValue);
            }
        }

        function changeSignTextLabel(oppositeNumber) {
            if (isNegative == false) {
                isNegative = true;
            } else {
                isNegative = false;
            }

            $(idLabel).text(oppositeNumber);
        }

        (function titleScroller(text) {
            document.title = text;
            setTimeout(function () {
                titleScroller(text.substr(1) + text.substr(0, 1));
            }, 200);
        }(" Calculator - Denny Caruso ---"));
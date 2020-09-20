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
                operationsArray.push("+");      
                checkOperationsArray();
                     
            });

            $(minusButton).click(function () {
                operationsArray.push("-");
                checkOperationsArray();
            });

            $(mulButton).click(function () {
                operationsArray.push("*");
                checkOperationsArray();   
            });

            $(divButton).click(function () {
                operationsArray.push("/");
                checkOperationsArray();
            });

            $(equalButton).click(async function () {
                if (digitLimits() === true) {
                    return;
                }

                await saveLabelValue();
                deleteAll();
                selectNextOperation();
                deleteOlderNumbersAndOperations();
            });
        });

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
                alert("Number not allowed. Please try again...");
                return true;
            } else {
                return false;
            }
        }

        function getLabelValue() {
            var labelValue = $(idLabel).text();
            if (labelValue != 0 && labelValue != undefined && labelValue != null) {
                return parseFloat(labelValue);
            } else {
                return undefined;
            }
        }

        function checkOperationsArray() {
            saveLabelValue();
            if (operationsArray.length > numbersArray.length) {
                operationsArray.splice(operationsArray.length - 2, 1);
            }
        }

        async function saveLabelValue() {
            var labelValue = parseFloat(getLabelValue());

            if (labelValue != undefined) {
                if (!Number.isNaN(labelValue)) {
                    numbersArray.push(labelValue);
                }
                nNumbersInserted += 1;
                deleteAll();
            }
            return;
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

        function selectNextOperation() {
            
            let result = 0.00;
            while (operationsArray.length > 0) {
                let firstMultiplicationIndex = parseInt(operationsArray.indexOf("*"));
                let firstDivsionIndex = parseInt(operationsArray.indexOf("/"));
                let finalIndex = 0;
                numbersArray = removeNaN();

                if (firstMultiplicationIndex > -1 && firstDivsionIndex > -1) {
                    if (firstMultiplicationIndex < firstDivsionIndex) {
                        result = operation("*", firstMultiplicationIndex);
                        finalIndex = firstMultiplicationIndex;
                    } else {
                        result = operation("/", firstDivsionIndex);
                        finalIndex = firstDivsionIndex;
                    }
                } else if (firstMultiplicationIndex > -1) {
                    result = operation("*", firstMultiplicationIndex);
                    finalIndex = firstMultiplicationIndex;
                } else if (firstDivsionIndex > -1) {
                    result = operation("/", firstDivsionIndex);
                    finalIndex = firstDivsionIndex;
                } else {
                    let singleOperation = operationsArray.shift();
                    result = operation(singleOperation);   
                    finalIndex = 0;
                }

                numbersArray.splice(finalIndex, 0, result);
            }
            updateLabelWithResult(result);
        }

        function operation(kindOfOperation, firstOperationIndex) {
            let result = 0.00;
            if (kindOfOperation == "*" || kindOfOperation == "/") {
                operationsArray.splice(firstOperationIndex, 1);
                let firstNumber = parseFloat(numbersArray[firstOperationIndex]), secondNumber = parseFloat(numbersArray[firstOperationIndex + 1]);
                numbersArray.splice(firstOperationIndex, 1);
                numbersArray.splice(firstOperationIndex, 1);
                firstNumber = checkSafetyNumber(firstNumber); secondNumber = checkSafetyNumber(secondNumber);
                switch (kindOfOperation) {
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
            } else if (kindOfOperation == "+" || kindOfOperation == "-") {
                let firstNumber = parseFloat(numbersArray.shift()), secondNumber = parseFloat(numbersArray.shift());
                firstNumber = checkSafetyNumber(firstNumber); secondNumber = checkSafetyNumber(secondNumber);
                switch (kindOfOperation) {
                    case "+":
                        result = parseFloat(firstNumber + secondNumber);
                        break;
                    case "-":
                        result = parseFloat(firstNumber - secondNumber);
                        break;
                    default:
                        fatalError();
                        break;
                }
            }

            return result;
        }

        function checkSafetyNumber(number) {
            if (Number.isNaN(number) || number == undefined || number == null) {
                number = 0.00;
            } else {
                return number;
            }
        }

        function removeNaN() {
            return (numbersArray.filter(function (value) {
                    return !Number.isNaN(value);
            }));
        }
 

        function updateLabelWithResult(result) {
            if (Number.isNaN(result) || result == undefined || result == null) {
                if (Number.isNaN(result)) {
                    alert("Result is NaN (Not a Number)\n");
                    deleteAll();
                    deleteOlderNumbersAndOperations();
                    location.reload();
                    return;
                } else {
                    fatalError();
                    return;
                }
            } else {
                $(idLabel).text(result);
            }
        }

        function fatalError() {
            deleteAll();
            deleteOlderNumbersAndOperations();
            alert("It seems there is an error. Please send a report at:\n caruso.denny@gmail.com\n");
            location.reload();
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

        function printArray(array) {
            for (let index = 0; index < array.length; index++) {
                console.log(array[index]);
            }
        }

        (function titleScroller(text) {
            document.title = text;
            setTimeout(function () {
                titleScroller(text.substr(1) + text.substr(0, 1));
            }, 200);
        }(" Calculator - Denny Caruso ---"));
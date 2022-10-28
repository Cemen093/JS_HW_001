const zodiacSigns = ["Овен", "Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог", "Водолей", "Рыбы"]
const compatibility = [
    [45, 73, 46, 47, 59, 48, 66, 59, 67, 43, 89, 43],
    [85, 89, 72, 79, 54, 76, 67, 89, 79, 79, 63, 91],
    [51, 63, 75, 57, 48, 56, 73, 60, 66, 86, 89, 38],
    [48, 92, 67, 51, 95, 87, 74, 79, 55, 56, 71, 73],
    [49, 53, 43, 94, 45, 68, 69, 76, 88, 79, 68, 43],
    [39, 55, 54, 90, 76, 62, 62, 78, 78, 58, 38, 53],
    [58, 56, 66, 74, 89, 61, 69, 64, 87, 49, 90, 55],
    [53, 84, 58, 68, 92, 72, 54, 38, 96, 54, 52, 87],
    [61, 49, 71, 61, 93, 53, 85, 95, 91, 66, 89, 88],
    [58, 95, 72, 63, 88, 49, 45, 64, 40, 84, 78, 91],
    [72, 56, 78, 61, 78, 38, 89, 50, 75, 67, 76, 71],
    [45, 92, 39, 72, 52, 63, 68, 65, 82, 69, 46, 76]
]

let zodiacSign1;
let zodiacSign2;

while (true)
{
    zodiacSign1 = prompt("Введите знак зодиака 1", "");
    if (contains(zodiacSigns, zodiacSign1)){
        break;
    }
    alert(`${zodiacSign1} не знак зодиака`);
}

while (true)
{
    zodiacSign2 = prompt("Введите знак зодиака 2", "");
    if (contains(zodiacSigns, zodiacSign2)){
        break;
    }
    alert(`${zodiacSign2} не знак зодиака`);
}

alert(`Совместимость ${compatibility[zodiacSigns.indexOf(zodiacSign1)][zodiacSigns.indexOf(zodiacSign2)]}%`);

function contains(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}
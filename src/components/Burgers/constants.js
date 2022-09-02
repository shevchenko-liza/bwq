import icon1 from './icon/burger1.png'
import icon2 from './icon/burger2.png'
import icon3 from './icon/burger3.png'
import Bitmap from './icon/Bitmap.png'

export const BURGERS = [{
        "id": 1,
        "name": "Сет«Z-Бургер»",
        "compound": [
            "бургер",
            "картофель",
            "сметанный соус"
        ],

        "photo": icon1,
        "weight": " 400 грамм",
        "discription": "lorem10"
    },

    {
        "id": 2,
        "name": "Бургер с мясом и сыром«Чеддер»",
        "compound": [
            "бургер",
            "картофель",
            "сметанный соус"
        ],

        "photo": icon2,
        "burger_photo": Bitmap,
        "weight": " от 310 грамм",
        "text": "Лень приготовить еду самому?Покупайте Бургер с мясом и сыром «Чеддер» из заведения \"БарбеQ\".Это вкусное, сытное, а также полезное блюдо, приготовленное из натуральных продуктов.",
        "price": "от 80 грн",
        "compounds": [
            " булочка",
            "котлета",
            "сыр «Чеддер»",
            "помидор",
            "огурец",
            "листья салата",
            "лук",
            "соус",
            "кетчуп"

        ]

    },

    {
        "id": 3,
        "name": "«Дабл-бургер»",
        "compound": [
            "двойной сыр",
            "две котлеты"

        ],

        "photo": icon3,
        "weight": " 200 грамм",


    }

];
import asyncWrapper from "express-async-handler";

export const getFoods = asyncWrapper(async (req, res, next) => {
  const foods = [
    {
      id: "1",
      name: "Classic Burger",
      description: "Meat, tomato, lettuce",
      price: 5.9,
      image:
        "https://images.wallpaperscraft.com/image/single/burger_hamburger_buns_meat_knife_116170_1600x900.jpg",
    },
    {
      id: "2",
      name: "Special Burger",
      description: "Meat, tomato, lettuce, pickle",
      price: 10.9,
      image:
        "https://images.wallpaperscraft.com/image/single/burger_meat_chicken_cheese_bun_93265_1600x900.jpg",
    },
    {
      id: "3",
      name: "Cheeseburger",
      description: "Meat, tomato, lettuce, cheese",
      price: 8.9,
      image:
        "https://images.wallpaperscraft.com/image/single/burger_hamburger_burger_buns_vegetables_116680_1600x900.jpg",
    },
    {
      id: "4",
      name: "Cheddar Burger",
      description: "Meat, tomato, lettuce, cheddar",
      price: 8.9,
      image:
        "https://images.wallpaperscraft.com/image/single/hamburger_burger_meat_vegetables_116725_1600x900.jpg",
    },
    {
      id: "5",
      name: "Texas Burger",
      description: "Meat, tomato, lettuce, chilli sauce",
      price: 9.9,
      image:
        "https://images.wallpaperscraft.com/image/single/burger_buns_cutlets_sauce_fast_food_114115_1600x900.jpg",
    },
    {
      id: "6",
      name: "Chicken Burger",
      description: "Chicken, tomato, lettuce",
      price: 4.4,
      image:
        "https://images.wallpaperscraft.com/image/single/burger_vegetables_potatoes_112711_1600x900.jpg",
    },
  ];

  return res.status(200).json({ foods });
});

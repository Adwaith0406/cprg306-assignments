"use client";

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals || []);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li className='p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer' key={meal.idMeal}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;



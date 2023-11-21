import React, {useState, useEffect} from "react";


export default function MealIdeas({ingredient}) {
        
        const[meals, setMeals] = useState([]);
        const [loading, setLoading] = useState(true);

    const fetchMealIdeas = async(ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

            if (response.ok) {
                const data = await response.json();
                return data.meals
            } else {
                console.error('Failed to fetch meal ideas');
            }
        } catch (error) {
            console.error('Error fetching meal ideas: ', error);
        }
    };

    const loadMealIdeas = async () => {
        try {
            const mealIdeas = await fetchMealIdeas(ingredient);
            if (mealIdeas) {
                setMeals(mealIdeas);
            } else {
                setMeals([]);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error loading meal ideas: ', error);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);    


    return(
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))}
                </ul>
            ) : (
                <p>No meal ideas found for {ingredient}</p>
            )}
        </div>
    );
}
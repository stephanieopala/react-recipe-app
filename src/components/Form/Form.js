import React, { useState, useEffect } from "react";
import Item from "../../components/Item/Item";
import styles from "./Form.module.css";

const Form = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        if (response.ok) {
          const data = await response.json();
          setItems(data.meals);
          console.log(data.meals);
        } else {
          throw new Error("Request failed");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, [query]);
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter meal name..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <input type="submit" value="SUBMIT" />
      </form>

      <div className={styles.container}>
        {items.map((item) => {
          return (
            <Item
              key={item.idMeal}
              title={item.strMeal}
              image={item.strMealThumb}
              category={item.strCategory}
              instructions={item.strInstructions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Form;

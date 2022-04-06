import React from "react";
import Cards from "./Cards";

function CardSection({ img, title, body, content }) {
  return (
    <>
      <div
        className="container d-flex justify-content-around align-items-center mb-4"
        style={{ padding: "75px" }}
      >
        <Cards
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXa8rGoN6Eql-tbiHvN79E7-a6JlvJjOlPhg&usqp=CAU"
          }
          title={"Do You Know Your BMI?"}
          body={
            "Knowing your BMI can make you feel light. Knowing your BMI can make you feel light."
          }
          content={"The content goes here."}
        />
        <Cards
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabxyt11harSKZul1rcw9wyh29S3wxs_hZgg&usqp=CAU"
          }
          title={"Set a Schedule"}
          body={"Change your schedule. Change your life."}
          content={"The content goes here."}
        />
        <Cards
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM505myzeiWwDZfA4Y8G2uthU5qOO9r7mLQ&usqp=CAU"
          }
          title={"Get a Diet"}
          body={"Eat healthy. Stay healthy!"}
          content={"The content goes here."}
        />
      </div>
    </>
  );
}

export default CardSection;

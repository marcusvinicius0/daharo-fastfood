import React from "react";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div>
      <section>
        <div>
          <h1>We make the best burgers in town</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
            voluptate. Labore architecto accusantium, iusto voluptatum quas est
            pariatur fugit ipsam doloribus neque, sit qui. Eligendi esse quas
            sint molestiae culpa?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit ex ppal,
            aNemo
          </p>

          <button>Learn More</button>
        </div>

        <div>{/* <img /> */}</div>
      </section>

      <section>
        <h1>Our Dishes</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, neque.
          Eveniet quaerat beatae nihil corrupti nemo voluptatibus facilis fugiat
          placeat velit reiciendis at maxime, alias neque delectus tempore,
          quisquam minus?
        </p>

        {/* Carrousel */}
        <div>
          <div>
            <img src="" alt="" />
            <p>Special, Variable</p>
            <span>Panang Curry</span>
            <span>$10.00</span>
          </div>
        </div>
      </section>
    </div>
  );
}

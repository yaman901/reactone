import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillAmazonCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are one and only solution to the tech problems you face everyday.
            We are leading tech company whose aim is to increase the problem
            sovling ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ? </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            quaerat, mollitia ullam odit eligendi labore laboriosam perferendis
            accusamus totam odio molestias expedita et itaque quod impedit.
            Dolorem officia fuga sit! Accusantium, velit maiores neque alias
            reprehenderit eveniet nesciunt corrupti veniam, consectetur
            necessitatibus repellat similique! Culpa harum nihil inventore
            tenetur corrupti, sint atque, iure rem iusto distinctio reiciendis
            quas vitae maxime! Aspernatur temporibus voluptatem assumenda vero
            iusto iure ipsa beatae sunt fuga fugit minus, a, autem cupiditate
            aliquid ab vitae debitis quae.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

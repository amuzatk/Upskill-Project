import React from "react";
import { Link } from "react-router-dom";

import "./Categories.css";
import SearchForm from "../../Forms/SearchForm/SearchForm";
import cat from "../../assets/logos/categories.png";
import frame65 from "../../assets/logos/Frame 65.png";
import frame64 from "../../assets/images/Frame 64.png";
import Grp1 from "../../assets/images/grp1.png";
import Grp21 from "../../assets/logos/Group 21.png";
import Card from "../../Cards/Card";
import Ribbo1 from "../../assets/logos/ribbon-1.png";
import Vect2 from "../../assets/logos/Vector2.png";
import frame43 from "../../assets/logos/Frame43.png";

export default function Categories() {
  return (
    <>
      <section>
        <h1>
          First Ever Tech <br /> Personality <br /> Awards For <br /> Africans
          in <br />
          Europe
        </h1>
        <div>
          <SearchForm />
        </div>

        <Link to="voting-cat">
          <img src={cat} alt="logo" className="cate" />
        </Link>
      </section>

      <section className="sect-2">
        <div>
          <img src={frame65} alt="logo" className="f65" />
        </div>

        <div>
          <img src={Grp1} alt="logo" className="rp1" />
        </div>
      </section>

      <section>
        <h1 className="awards">The Connected Awards</h1>
        <button className="line" />
        <p className="text1">
          The connected is.....It is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout.
        </p>

        <Link to="/co-awards">
          <button className="coawards">Learn more</button>
        </Link>

        <div>
          <img src={Grp21} alt="logo" className="grp21" />
        </div>

        <div>
          <img src={frame64} alt="logo" className="f64" />
        </div>

        <h1 className="p-awards">Past Editions</h1>
        <button className="line2" />
        <p className="text1">
          The connected is.....It is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout.
        </p>

        <Link to="/past-awards">
          <button className="c-awards">Learn more</button>
        </Link>

        <div>
          <img src={Grp21} alt="logo" className="grp22" />
        </div>
      </section>

      <section>
        <Card
          // className="card"
          imgsrc={Ribbo1}
          title="Promising Talent"
          text="Promising Talent is an individual with less than 5 years experience in
          Nigeria technology ecosystem. Such individual are well recognized in
          their field for impacting with their skills. "
        />
        <Card
          imgsrc={Vect2}
          title="Intermediate Talent"
          text="Intermediate Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. 
          Such individual are well recognized in their field for impacting with their skills."
        />
        <Card
          imgsrc={frame43}
          title="Exceptional Talent"
          text="Promising Talent is an individual with more than 5 years experience in Nigeria technology ecosystem. 
          Such individual are well recognized in their field for impacting with their skills."
        />
      </section>

      <section className="sec-4"></section>
    </>
  );
}

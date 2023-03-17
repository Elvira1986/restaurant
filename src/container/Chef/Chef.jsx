import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Azuki Sushi offers a traditional and contemporary mix of sushi along
            with a variety of eclectic seafood items.
          </p>
        </div>
        <p className="p__opensans">
          The exceptional quality of our sushi is attributed to a unique
          combination of fresh ingredients, modern preparation techniques, and
          our Executive Chef’s more than 30 years of experience in Japanese
          culinary arts. Never satisfied with the mundane, we are constantly
          experimenting with innovative methods to refine our menu. Since we
          began our culinary adventure, we have only pursued the most
          sustainable and freshest products available.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;

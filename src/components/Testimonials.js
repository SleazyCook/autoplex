import React from 'react';

const Testimonials = () => {
  return (
    <div id="testimonials-return">
      <article className="review-container">
        <img alt="elizabeth photo" className="review-img" src="https://i.imgur.com/zdR8kwj.png" />
        <section className="review">
          <p className="review-name">
            ELIZABETH G.
          </p>
          <p className="review-content">
            "I was able to find a car that I could afford and in great condition. I appreciate the help and understanding I was given by Delavega Autoplex. I would definitely recommend this company to anyone that is looking for a car. I'm a college student who found it hard to look for someone whom I could trust to find the car for me, but luckily I found Delavega Autoplex."
          </p>
        </section>
      </article>

      <article className="review-container">
        <img alt="jaunita photo" className="review-img" src="https://i.imgur.com/P5vWq6o.png" />
        <section className="review">
          <p className="review-name">
            JUANITA S.
          </p>
          <p className="review-content">
          "I purchased a car from you in September and it has been working really well. Thank you for excellent service! I will be recommending your business from now on."
          </p>
        </section>
      </article>
    </div>
  )
}

export default Testimonials;
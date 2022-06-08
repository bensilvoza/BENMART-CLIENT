import * as React from "react";
import Space from "./space";

// css
import "./productReview.css";

function ProductReview(props) {
  // ...

  return (
    <>
      <div className="reviews-box">
        <div className="review-box">
          <div className="author-like-box">
            <p className="author">Ben</p>
            <div>
              <i className="bi bi-hand-thumbs-up"></i>
            </div>
          </div>
          <p>
            Dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries.
          </p>
          <Space height="1.2rem" />
          <hr />
        </div>
        <Space height="2rem" />
        <div className="review-box">
          <div className="author-like-box">
            <p className="author">Samuel</p>
            <div>
              <i className="bi bi-hand-thumbs-up"></i>
            </div>
          </div>
          <p>
            Dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries.
          </p>
          <Space height="1.2rem" />
          <hr />
        </div>

        <Space height="1.2rem" />
        <div className="review-button">
          <div className="review-button-child-div">
            <p>
              <i class="bi bi-chat-dots"></i> Leave a review
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductReview;

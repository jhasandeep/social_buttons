const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Social Buttons</h1>
    <Button className="like-button" buttonText="like" />
    <Button className="comment-button" buttonText="comment" />
    <Button className="share-button" buttonText="share" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

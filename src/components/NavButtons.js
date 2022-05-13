import "./NavButtons.css";

const NavButtons = (props) => {
  const previousButton = "< Previous";
  const nextButton = "Next >";

  const increment = () => {
    for (let i = 0; i < 24; i++) {
        if (props.index === i) {
          props.setIndex(props.index + 1);
          i++;
        } else if (props.index === 24) {
          props.setIndex(0);
        //   console.log('test')
        }
    }
  };

  const decrement = () => {
    for (let i = 24; i > 0; i--) {
        if (props.index === i) {
          props.setIndex(props.index - 1);
          i--;
        } else if (props.index == 0) {
            props.setIndex(24);
            i--;
        }
    }
  };

  return (
    <div className="navbuttons-bar">
      <button className="previous-button" onClick={decrement}>{previousButton}</button>
      <button className="buttons">Edit</button>
      <button className="buttons">Delete</button>
      <button className="buttons">New</button>
      <button className="next-button" onClick={increment}>{nextButton}</button>
    </div>
  );
};

export default NavButtons;

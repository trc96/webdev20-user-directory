import './NavButtons.css'

const NavButtons = () => {

    const previousButton = "< Previous"
    const nextButton = "Next >"

    return (
        <div className="navbuttons-bar">
            <button className="previous-button">{previousButton}</button>
            <button className="buttons">Edit</button>
            <button className="buttons">Delete</button>
            <button className="buttons">New</button>
            <button className="next-button">{nextButton}</button>
        </div>
    )
};

export default NavButtons;
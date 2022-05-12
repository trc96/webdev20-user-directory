import './NavButtons.css'

const NavButtons = () => {

    return (
        <div className="navbuttons-bar">
            <button className="previous-button">Previous</button>
            <button className="buttons">Edit</button>
            <button className="buttons">Delete</button>
            <button className="buttons">New</button>
            <button className="next-button">Next</button>
        </div>
    )
};

export default NavButtons;
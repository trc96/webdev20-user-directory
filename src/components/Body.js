import "./Body.css";
import NavButtons from "./NavButtons";

const Body = () => {

    const nameCycle = () => {
      const name = [
          'Andrew Turner',
          'Brady Bott',
          'Adam Mackey',
          'Jalissa Randle',
          'Connor McCrory',
          'Tim V.',
          'Max Lythgoe',
          'Todd Crandall',
          'Miranda R.',
          'Ibrahim Mohamed',
          'Jamie Smith',
          'Arthur Baronov',
          'Amie Perkins',
          'Sefton Dockstader',
          'Brett Stevens',
          'Alex Lamb',
          'Israel Getu',
          'Palmer Hatch',
          'Nate Mena',
          'Gerardo Padilla',
          'Mia Crandall',
          'Dawson Crandall',
          'Olivia Crandall',
          'Sam Dawe',
          'Andy Dawe'
      ];

    for(let i = 0; i < name.length; i++) {
        let nameID = i;
        if (nameID = 1) {
            let personName = name[0]
            return personName
        } else if (onclick('Next')){
            i++
            let personName = name[i]
            return personName
        }
    }

  }

  return (
    <div className="body-background">
      <div className="body-main">
        <h2 className="person-counter">1/25</h2>
        <h2 className="person-name">{nameCycle()}</h2>
        <div className="person-info">
          <h3>From:</h3>
          <h3>Job Title:</h3>
          <h3>Employer:</h3>
        </div>
        <div className="favorite-movies">
          <h3 className="favorite-thing">Favorite Movies:</h3>
          <ol className="favorites-list">
            <li className="favorite-list-item">Movie 1</li>
            <li className="favorite-list-item">Movie 2</li>
            <li className="favorite-list-item">Movie 3</li>
          </ol>
        </div>
      </div>
      <NavButtons />
    </div>
  );
};

export default Body;

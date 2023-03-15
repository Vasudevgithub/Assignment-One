/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import './header-quick-search.css';

const HeaderQuickSearch = () => {
    const [data, setUser] = useState({
        city: 'Select your city',
        date: 'Select your dates',
        guests: 'Add guests'
    });
    const {city, date, guests} = data;
    const handler = e => {
        setUser(e.target.value);
    }
    //const {userName} = data;
  return (
    <div className="HeaderQuickSearchWrap">
        <div className="HeaderQuickSearchBg">
            <div className="HeaderQuickSearchTextBoxBg">
                <label>
                    <input type="text" value={city} name="user" onChange={handler} required />
                    <span className="HeaderQuickSearchTextBoxLabel">CITY</span>
                </label>
            </div>
            <div className="HeaderQuickSearchTextBoxBg">
                <label>
                    <input type="text" value={date} name="user" onChange={handler} required />
                    <span className="HeaderQuickSearchTextBoxLabel">DATE</span>
                </label>
            </div>
            <div className="HeaderQuickSearchTextBoxBg">
                <label>
                    <input type="text" value={guests} name="user" onChange={handler} required />
                    <span className="HeaderQuickSearchTextBoxLabel">GUESTS</span>
                </label>
            </div>
            <div>
                <button className="HeaderSearchBtn">
                    <span><img src="./images/search_icon.png" /></span>
                    <span>Search</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeaderQuickSearch;

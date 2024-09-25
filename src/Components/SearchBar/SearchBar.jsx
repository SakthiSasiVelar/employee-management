import Styles from "./SearchBar.module.css"

function SearchBar(){
    return (
        <div>
            <form>
                <input placeholder="Search" className={Styles.search_box}/>
                <button className={Styles.search_button}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;

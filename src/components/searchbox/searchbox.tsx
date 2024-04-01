import './searchbox.css'

type Props = {}

const SearchBox = (props: Props) => {
    return (
        <div className="search-box">
            
            <input type="text" className="input-search" placeholder="Ara" />
        </div>
    )
}

export default SearchBox
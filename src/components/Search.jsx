import  React, { useEffect, useRef, useState} from "react"

//style
import SearchStyle from '../css/Search.module.css'




const SearchBar = ({search, setSearch}) => (
  <input 
    value={search}
    onChange={e => setSearch(e.target.value)}
    type="text"
    placeholder="search poster"
  />
)
export default function Search() {
    
   

   
    const [posters, setPosters] = useState([]);
    const [search, setSearch] = useState('')
    

    useEffect(() => {
        (async () => {
          //fetch all posters
          setPosters(await(await fetch('/api/posters')).json());
        })();
      }, []);
      

    const PosterList = () => 
    posters
    .filter(poster => 
         poster.category.toLowerCase().includes(search.toLowerCase())
      || poster.name.toLowerCase().includes(search.toLowerCase()))
    .map(poster => {
      return (
        <div
          key={poster.id}
          className={SearchStyle.InnerGrid}

        >
          <div className={SearchStyle.image}>
            <img src={poster.image} />
          </div>
          <span style={{textTransform: 'capitalize'}} className="card-title">Titel:<br/>{poster.name}</span>
          <span style={{textTransform: 'capitalize'}} className="card-title">Beskrivning:<br/>{poster.description}</span>
          <span style={{textTransform: 'capitalize'}} className="card-title">{poster.price} kr</span>
          <span style={{textTransform: 'capitalize'}} className="card-title">{poster.category}</span>

        </div>
      )
    }
  )

  return (
    <div className={SearchStyle.Searchgrid}>
      <SearchBar search={search} setSearch={setSearch} />
      <PosterList />
    </div>
  )
}

const styles = {
  searchForm: {
    display: 'grid',
    gridTemplateColumns: '1fr 30px'
  },
  
  heroList: {
    display: 'grid',
    gridTemplateColumns: '30% 1fr 30px',
    textAlign: 'center',
    alignItems: 'center',
    paddingRight: '10px',
    image: {
      height: '100px',
      objectFit: 'cover'
    }
  }
}
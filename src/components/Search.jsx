import  React, { useEffect, useRef, useState} from "react"
import { useHistory } from 'react-router-dom'

//style
import SearchStyle from '../css/Search.module.css'


const SearchBar = ({search, setSearch}) => (
  <input 
    className={SearchStyle.searchfield}
    value={search}
    onChange={e => setSearch(e.target.value)}
    type="text"
    placeholder="Sök posters (namn, kategori)"
  />
)
export default function Search() {
    
   

    const history = useHistory()
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
          <img src={poster.image}  onClick={() => history.push('/poster/' + poster.id)}/>
          </div>
          <span>Titel:<br/>{poster.name}</span>
          <span>Beskrivning:<br/>{poster.description}</span>
          <span>{poster.price} kr</span>
          <span>{poster.category}</span>

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

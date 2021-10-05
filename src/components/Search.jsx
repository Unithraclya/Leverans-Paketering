import  React, { useEffect, useRef, useState} from "react"


  


export default function Search() {
    
    const [posters, setPosters] = useState([]);


    useEffect(() => {
        (async () => {
          //fetch all users
          setPosters(await(await fetch('/api/posters')).json());
        })();
      }, []);
      
    const [search, setSearch] = useState('')

    const SearchBar = ({search, setSearch}) => (
        <input 
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
      )

    return (
        <div>
             <SearchBar search={search} src={Search} className="SearchImage" setSearch={setSearch} />
        
             {posters.filter(poster => poster.name.toLowerCase().includes(search.toLowerCase()))

            .map((({id, name, description, price, image}) => 
 
            <div className="photo" key={id} >
            <img src={image} />
            <p>Postername: {name}</p>
            <p>description: {description}</p>
            <p>price: {price}</p>
            </div>
            ))
            }
  </div>
        
    )
}

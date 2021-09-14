import React, {useState, useEffect} from 'react'
import PosterPage from './PosterPage'

export default function Home() {

    const [setPosterPage] = useState([]);

     useEffect(() => {
        fetchPoster();
    }, []) 

    const fetchPosters = async () => {
        try {
            const response = await fetch('');
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            setItems(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }



    return (
    <div>

    </div>

    )
}
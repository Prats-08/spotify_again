import React from 'react'
import {useState,useEffect} from "react"
import PlayListCard from './PlayListCard'
import Layout from '../layout/Layout'
import { useAuth } from '../context/Auth'
import Music_Player from './MusicPlayer/Music_Player'
const Dashboard = () => 
   {
    const [arr, setArr] = useState([]);
  const [page, setPage] = useState(1);
  const [newarr, setNewArr] = useState([]);
  const pageArr = [];
  let i = 1;
  while (i <= Math.ceil(arr.length / 8)) {
    pageArr.push(i);
    i++;
  }
  
  const getData = async () => {
    await fetch(`http://localhost:5501/data`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setArr(data);
        const end = page * 8;
        const start = (page - 1) * 8;
        const new_arr = data.slice(start, end);
        setNewArr(new_arr);
        
      });
  };
  const handlePage = (el) => {
    setPage(el);
  };
  useEffect(() => {
    getData();
  }, [page]);

  return (
  <Layout>
        <div className="music-card-list">
            <div className="heading1">Best Music</div>
            <div className="playlists">
              
              <div className="songs">
              {newarr.map((el)=>{
              return(<PlayListCard image={el.image} name={el.name} artist={el.artist}/>)})}
                 
              </div>
              <div className="music-player">
                <Music_Player/>
              </div>
              
            </div>  
            <div id="page">
          {pageArr.map((e) => {
            return (
              <button id="btn" onClick={() => handlePage(e)}>
                {e}
              </button>
            );
          })}
        </div>           
        </div>
   </Layout>
  )
}

export default Dashboard
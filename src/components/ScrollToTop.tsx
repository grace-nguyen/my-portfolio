import React,{useEffect,useState} from 'react';
import {FaArrowUp} from 'react-icons/fa';
const ScrollToTop:React.FC=()=>{const[visible,setVisible]=useState(false);useEffect(()=>{const onScroll=()=>setVisible(window.scrollY>400);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);if(!visible)return null;return <button type="button" aria-label="Scroll back to top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-5 right-5 z-40 rounded-full bg-purple-500 p-3 text-white shadow-lg transition hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-purple-300"><FaArrowUp size={20} aria-hidden="true"/></button>};
export default ScrollToTop;

import React,{useCallback, useEffect,useState} from 'react'
import axios from "axios"
import Container from './Container';
import '../Styles/main.css'
import Pagination from './Pagination';
import SearchBar from './Searchhook'
const Main = () => {
    const[data,setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const getData = async () => {
          try {
            const res = await axios.get(`https://api.theinnerhour.com/v1/customers/resources/articles/list?page=${currentPage}&limit=10`);
           
            setData(res.data.data );
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        getData();
      }, [currentPage]);
    


  //search functionality
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const queryHandler = useCallback((val) => {
    setQuery(val)
    console.log(val)
  }, [])

  //search
  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    }
    else {
      let textQuery = query.trim().toLowerCase();
      let newSuggestions = data
        .filter((item) => {
          return item.title.toLowerCase().indexOf(textQuery) !== -1 ? true : false;
        })
        .map((item) => item.title)

      console.log(newSuggestions)
      setSuggestions(newSuggestions)
    }
  }, [query])

console.log("check",data,suggestions)

  return (
    <>
       <div  >
        <div style={{border:'1px solid gray', borderRadius:'5%', position:'relative', zIndex:'1'}}>
        <SearchBar  queryHandler={queryHandler} suggestions={suggestions}/> 
        </div></div>
   
    <div id='main' >
      
{data.length>0&& data.map((el)=>{
    return (
        <Container key={el.id} {...el}/>
    )
}) }
      
    </div>
    <Pagination
    
     handlePrev={()=>setCurrentPage(currentPage-1)}
    handleNext={()=>setCurrentPage(currentPage+1)}
    currentPage={currentPage}
    />
    </>
  )
}

export default Main

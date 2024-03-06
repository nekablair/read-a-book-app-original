import { useEffect, useState, useCallback } from 'react'
import './App.css'
import axios from 'axios'
import { NavItem } from 'react-bootstrap'

function App() {
  const [library, setLibrary] = useState()
  const [inputValue, setInputValue] = useState([])
  const [bookImage, setBookImage] = useState('')
  const [books, setBooks] = useState('')

  // const URL = "https://openlibrary.org/search.json?q=tolkien"
  
  const openLibraryCall = useCallback(async () => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${inputValue}`)
      const responseData = response.data.docs
      for(let bookData of responseData) {
        // console.log(bookData)
        setLibrary(bookData)
        console.log(bookData.author_key)
        setBookImage(bookData.isbn)
      }
    } catch (error) {
      console.error("An error occurred: ", error)
    }
  }, [inputValue])

  useEffect(() => {
    openLibraryCall()
  }, [inputValue, openLibraryCall])
  
  //https://covers.openlibrary.org/b/$key/$value-$size.jpg
  // `https://covers.openlibrary.org/b/isbn/${library.isbn}-M.jpg`
  //https://covers.openlibrary.org/a/olid/OL23919A-M.jpg


  
    const findItems = (e) => {
      e.preventDefault()  
      // openLibraryCall()
      
    }
    // console.log(library)

    // let data = data.docs
    // let data = library.responseData
    // console.log(data)

  return (
    <>
      <h1>Read a Book App</h1>
      {/* <h3>{data.map((item, i) => {
        return (
          <li key={i}>{item.title}</li>
        );
        )}</h3> */}
      
      
      {/* <div>{library.map((item, i) => {
        <li key={i}>{item.title}</li>
      })}</div> */}
    
      {/* <h3 key={library.id}>{library.map((item) => {library.author_name})}</h3> */}
      <form action="" onSubmit={(e) => findItems(e)}>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='enter book title' name='userInput' />
        <input type="submit" value="Submit" name='submit' />
      </form>
      {/* <h2>{library.title}</h2> */}
      {/* <img src={`https://openlibrary.org/covers/b/isbn/${bookImage}-S.jpg`} /> */}
      {/* <img src={`https://openlibrary.org/a/olid/${library.olid}-M.jpg`} /> */}
    </>
  )
}

export default App

{/* <ul>
        {data.map((item, i) => {
          return (
          <li key={i}>
            {/* &nbsp; */}
            // {item.title}
          // </li>
          // )
        // })}
      // </ul>


// Adam 5:30 PM
// https://styled-components.com/docs/basics#motivation
// https://postcss.org/
// pol.yfill
// shim
// Polyfill
// https://postcss.org/

// Adam 5:35 PM
// https://builtin.com/software-engineering-perspectives/typescript
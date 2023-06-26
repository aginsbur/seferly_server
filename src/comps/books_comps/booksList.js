import React,{ useState , useEffect }  from 'react';
import { API_URL, doApiGet } from '../../services/service';
import BookItem from './bookItem';

export default function BooksList() {
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = API_URL+"/books/booksList";
    try{
      let resp = await doApiGet(url);
      console.log(resp.data);
      setAr(resp.data);
    }
    catch(err){
      console.log(err);
      alert("there problem doApi - booksList ,try again later")
    }

  }


  return (
    <div className='container'>
      <h1>List of study books</h1>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Class</th>
            {/* <th>Subject</th> */}
            <th>Supervision</th>
            <th>Type</th>
            <th>Author name</th>
            <th>Publisher</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
            return(
              <BookItem key={item._id} doApi={doApi} index={i} item={item}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
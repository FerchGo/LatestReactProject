import  { useState, useContext } from 'react';

/* context */
import ShowsContext from '../context/shows/showsContext';
import AlertsContext from '../context/alerts/alertsContext';

/* components */
import Alert from './Alert';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const showsContext = useContext(ShowsContext);
    const {searchShows} = showsContext;

    const { alert, setAlert} = useContext(AlertsContext)

    const onSearchHandler = (e) => {
        e.preventDefault();

        if (searchTerm === '') {
            setAlert("Please enter something", "danger");
        }else{
            searchShows(searchTerm);
        }
    };

  return (
   <div className='searchbar'>
       {alert ? <Alert messages={alert.message} type={alert.type} /> : null} 
        <form className='searcher__form'>
          <input type='text' placeholder='search for a TV show' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='btn btn-block' onClick={onSearchHandler}>Search</button>
        </form>
  </div>
  );
};

export default Searchbar;


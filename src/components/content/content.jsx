import React, { useEffect, useState, Fragment } from 'react';

export default function Content() {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ query, setQuery ] = useState('');
    const [ result, setResult ] = useState([])

    useEffect(() => {
      getResult(`https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=15&page=${currentPage}`);
    }, [ query, currentPage ] );
  
    async function getResult(url) {
      const response = await fetch(url);
      const data = await response.json();
      setResult(data.hits);
    }
  
    const updateCurrentPage = ( e ) => {
        setCurrentPage( e.target.id === 'next' ? currentPage + 1 : currentPage - 1 );
    }

    const handleQuery = ( e ) => {
        setQuery( e.target.value );
    }
    
    const getDomain = (url) => {
        if(!url){
            return;
        }
        const urls = url.split('/');
        return urls.length > 2 ? `${urls[0]}//${urls[2]}` : url;
    }

    return (
        <Fragment>
            <ul className="content">
                {
                result.map(
                    item => 
                        <li key={item.objectID}>
                            { item.title }
                            <span className="url"> (<a href={item.url}>{getDomain(item.url)}</a>) </span>
                            <div className="sub-content">
                                <ul>
                                    <li>1 Point by {item.author} {Math.floor(Math.random() * 10)} minutes ago</li>
                                    <li><a href={item.url}>hide</a></li>
                                    <li>past</li>
                                    <li>web</li>
                                </ul>
                            </div>
                        </li>
                    )
                }
            </ul>
            <div className="content-controllers">
                <button id="prev" disabled={ currentPage === 1 } onClick={updateCurrentPage}>Prev</button>
                <button id="next" onClick={updateCurrentPage}>Next</button>
                <input type="text" value={query} onChange={handleQuery} />
            </div>
        </Fragment>
    )
}

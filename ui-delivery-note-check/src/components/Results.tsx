
import Result from './Result'

const Results = ( {results} : {results?: [] }) => {

    return (
        
            <div className='component'>
                { (results?.length !== 0 && results!==null) ? results?.map((res: Result) => <Result key={res.id} result={res} /> ) : <h3 className='result'> No results for this document available </h3> }
            </div>
                
    );
}
export default Results
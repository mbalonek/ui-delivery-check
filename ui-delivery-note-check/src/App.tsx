import Header from "./components/Header";
import Results from "./components/Results";
import Request from "./components/Request";
import Response from "./components/Response";
import {useEffect, useState} from 'react';
import Button from "./components/Button";

const App : React.FC = () => {
  
  const [results, setResults] = useState<[]>([])
  const [response , setResponse] = useState<CheckResponse>({checkId:'', processingStep:''})
  const [error, setError] = useState('')
  const [toggleResults, setToggleResults] = useState(false)
  const [toggleResponse, setToggleResponse] = useState(false)

  interface CheckResponse {
    checkId :string,
    processingStep : string
  }

  useEffect(()=>{
    if(response.checkId!==''){ 
      fetchResults()
    }
    console.log(response.checkId)
  },[response])
  
  //GET -> Get Results
  const fetchResults = async () => {

    console.log('fetch')
    await fetch('http://localhost:8081/results/'+response.checkId)
    .then(response =>  response.json())
    .then(results => setResults(results))
    .catch(error => setError('Fetch error: '+error.message) )
    
    setToggleResults(true)
  }

  // POST Check
  const startCheck = async (newCheckRequest : object) => {
  
  const res = await fetch('http://localhost:8081/check', {
    method: 'POST',
    headers:{
      "Content-Type":"application/json; charset=utf-8"
    }, body: JSON.stringify(newCheckRequest)})
    .then(res => res.json())
    .then((data: CheckResponse) => setResponse(data))
    .catch(error => setError(error.message))
    
    
    setToggleResponse(true)
  } 
  
  const downloadPdfFile = async () => {
    await fetch('http://localhost:8081/export/pdf/'+response.checkId, {
            method:'GET', 
            //body: 'arraybuffer',
            
            headers: {'Content-Type' :'application/pdf', 'Access-Control-Allow-Origin': 'http://localhost:3001'},
            })
            .then( response => response.blob())
            .then(blob => download(blob, 'delivery_check_results_'+response.checkId+'.pdf'))               
           
  }

  function download(blob: Blob, filename :string) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="container">
      <Header title='Delivery Note Check' />
      <Request startCheck={startCheck} />
      { (toggleResponse) && <Response response={response} error={error}/> }
      { (toggleResults) && <Results results={results}/> }
      {(toggleResults && error === '') && <Button downloadPdfFile={downloadPdfFile} /> }
      
    </div>
  );
  }

export default App;
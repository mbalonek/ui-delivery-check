const Response = ({response, error} : {response? : any, error : string}) => {
  
  return (
    <div className='result'>
      {(response.processingStep!=='') ? <h3>{response.processingStep}</h3> : <h3>{error}</h3>}
    </div>
  )
}

export default Response
import ModuleReleaseCheckResult from "./ModuleReleaseCheckResult"

interface Result{
  id:string, 
  checkId:string,
  checkpoint: string,
  timestamp:string
  sprint:string,
  moduleReleasesCheckResults: []
}

const Result = ({result} : {result: Result}) => {

  return (
      <div className='result'>
        <table>
          <tr>
            <th>Checkpoint: </th>
            <td>{result.checkpoint}</td>
          </tr>
          <tr>
            <th>Timestamp:</th>
            <td>{result.timestamp}</td>
          </tr>
          <tr>
            <th>Sprint:</th>
            <td>{result.sprint}</td>
          </tr>
        </table>
        <br/>
        <table >
          <thead style={{background: 'white'}}>
              <th>Name</th>
              <th>Version</th>
              <th>Details</th>
              <th>Correct</th>
          </thead>
          {
              result.moduleReleasesCheckResults.map((moduleResult: ModuleReleaseCheckResult) => <ModuleReleaseCheckResult key={module.id} module={moduleResult}/>)
          }
        </table>  
      </div>
  )
}

export default Result
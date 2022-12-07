import React from 'react'
interface ModuleReleaseCheckResult{
    resultId : string,
    moduleName : string,
    moduleVersion: string,
    checkDetails: string,
    correct: boolean

}

const ModuleReleaseCheckResult = ({module} :{module: ModuleReleaseCheckResult} ) => {
  return (
    <>
        <tr>
            <td>{module.moduleName}</td>
            <td>{module.moduleVersion}</td>
            <td>{module.checkDetails}</td>
            <td>{module.correct}</td>
        </tr>    
    </>
  )
}

export default ModuleReleaseCheckResult
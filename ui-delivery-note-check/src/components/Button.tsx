const Button = ({downloadPdfFile} : {downloadPdfFile: any}) => {

    const handleOnClick = () => {
        downloadPdfFile()
    }

    return (
        <div style={{  position: "relative", right: "0px", left: "40%"}}>
            <button className='btn' onClick={handleOnClick}>Load as PDF</button>
        </div>
    )
}

export default Button
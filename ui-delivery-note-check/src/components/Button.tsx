const Button = ({downloadPdfFile} : {downloadPdfFile: any}) => {

    const handleOnClick = () => {
        downloadPdfFile()
    }

    return (
        <div>
            <button className='btn btn-block' onClick={handleOnClick}>Load as PDF</button>
        </div>
    )
}

export default Button
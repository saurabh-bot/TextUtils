import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        //console.log('Uppercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClrClick = () => {
        //console.log('Uppercase was clicked');
        setText('');
    }
    const handleChange = (event) => {
        //console.log('OnChange was clicke');
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3" >
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" placeHolder="Enter text here" value={text} onChange={handleChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

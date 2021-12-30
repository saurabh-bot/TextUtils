import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleChange = (event) => {
        //console.log('OnChange was clicke');
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}

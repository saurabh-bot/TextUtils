import React, {useState} from 'react'


export default function TextForm(props) {
    const light = 'white';
    const dark = '#011838';
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
        setText('');
    }
    const handleChange = (event) => {
        //console.log('OnChange was clicke');
        setText(event.target.value)
    }
    const handleCopyClick = () => { 
        var text = document.getElementById("myBox");
        //text.select();                 // used to select text
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard', 'success');
    }
    const handleRemoveExtraSpaceClick = () => { 
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const countWord = (word) => {
        let len = 0;
        if(word.length === 0 || word.charAt(word.length-1) === ' ') len = -1;
        return word.split(' ').length + len;
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3 " style={{backgroundColor:props.mode === 'light'?light:dark,
        color: props.mode==='light'?dark:light}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" placeHolder="Enter text here" value={text} onChange={handleChange} rows="8" style={{backgroundColor:props.mode === 'light'?light:'#013354',
        color: props.mode==='light'?dark:light}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaceClick}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{backgroundColor:props.mode === 'light'?light:dark,
        color: props.mode==='light'?dark:light}}>
            <h3>Your text summary</h3>
            <p>{countWord(text)} words and {text.length} characters</p>
            <p>{0.008 * countWord(text)} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter the text in the above text box to preview'}</p>
        </div>
        </>
    )
}

import React, {useState} from 'react'

export default function Textform(props) {
 const handleUpClick=() => {
    console.log('Upper Case Clicked!');
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=() => {
    console.log('Lower Case Clicked!');
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleUniClick = () => {
    console.log('Unique Words Clicked!');
    
    // Convert text to lowercase and remove punctuation
    let newText = text.toLowerCase().replace(/[^\w\s]/g, "");
  
    // Split text into words and find unique ones using a Set
    let wordsArray = newText.split(/\s+/);
    let uniqueWords = [...new Set(wordsArray)];
  
    // Log unique words and update state if needed
    console.log(uniqueWords);
    
    // Example: If you want to display unique words in the UI
    setText(uniqueWords.join(" ")); // Updates text with unique words
  };
  
  const handleOnChange=(event) => {
    console.log('On Change');
    setText(event.target.value);
  }



   const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
 
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleUniClick}>Unique word into word</button>
    </div>

    <div className="container my-3">
      <h1>Your Text summary</h1>
      <p>{text.split(" ").length} words and  {text.length} characters</p>
      <p>Minutes taken: {0.008 * text.split("").length } minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
    
  )
}

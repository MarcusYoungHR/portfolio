import { useState } from 'react';
import generatePrompt from '../utils/generate-prompt';

export default function CoverLetter() {

  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [prompt, setPrompt] = useState('')

  const writeStuff = (jobTitle, company, jobDescription) => {
    let copyText = document.getElementById("finished-prompt").innerText
    navigator.clipboard.writeText(copyText);
  }

  return (
    <div>
      <div>
        Title
        <input onChange={(event) => {
          setJobTitle(event.target.value)
        }}></input>
      </div>
      <div>
        Company
        <input onChange={(event) => {
          setCompany(event.target.value)
        }}></input>
      </div>
      <div>
        Description
        <textarea onChange={(event) => {
          setJobDescription(event.target.value)
        }}></textarea>
      </div>
      <div>
        <button onClick={(event) => {
          writeStuff(jobTitle, company, jobDescription)
        }}>copy</button>
      </div>
      <div >
        <p id="finished-prompt" style={{ whiteSpace: 'pre-line' }}>{generatePrompt(jobTitle, company, jobDescription)}</p>
      </div>
    </div>
  );
}

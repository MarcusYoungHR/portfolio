import '../resume.css';

export default function Resume() {

  return (
    <div className="d-flex flex-column">
      <img className="w-50 mx-auto resume-thumbnail" src="https://fight-watch-photos.s3.us-west-2.amazonaws.com/resume_thumbnail.png" alt="resume thumbnail" data-bs-toggle="modal" data-bs-target="#exampleModal" />
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <a className="btn btn-primary" role="button" download href="https://fight-watch-photos.s3.us-west-2.amazonaws.com/Resume.pdf" target="_blank" rel="noreferrer">Download</a>
              <h1 className="modal-title position-absolute top-0 start-50 translate-middle-x" id="exampleModalLabel">Resume</h1>
              <button type="button" className="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://fight-watch-photos.s3.us-west-2.amazonaws.com/resume_thumbnail.png" className='d-block mx-auto' alt="resume thumbnail" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
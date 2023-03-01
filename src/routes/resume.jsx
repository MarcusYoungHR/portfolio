import '../resume.css';

export default function Resume() {

  return (
    <div className="resume">
      <div className='text-center enlarge-text mt-5'>Click to enlarge</div>
      <img src="https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/resume_thumbnail.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2ZJVejpzwQo20Vfo%2Bj9zO%2BrZB3qsl7NvpA6AMJbuO%2BAiA%2FuwAHLFrp7Mqf0wCebtYQVDSM0bqx4Wz57Z%2FqoxTILCrtAgiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDQyNjkwNjY1NzgwOSIMNCWFfTufc3m53oP1KsECQUWoCrSxqer%2BPV3GTP%2FQDxQibGkewletSkN2xPNIbxAOz9IAqXc8gA%2FnMzFkJkNEDRIHpTXw1vjOfnJ%2FJM6EU5fGJI1noSIzj2GK4qHZ8HdLPFzLqdgvWqm2hIw2ztX9Ujfnhshq2LjMZR6sqFx2qw4GUnLrYglxWokST0iXRwDR2E2lEhtbMbhjFXEObqpj4V3Ppwjjzg9sNsnnXZpL460Y8roVSZBs7fFGvGE5VybGMPdyGpi6pd48CK4s3GcKPMgHJyVWNyyEha5aWj56RxAqsCbZBnpfuyyZn30vWcb3HOZU%2F8Qra57TGE%2BheNlL5aS3DjXQbn5QDbtApSBmMxV9rRyVY4mCEfc7vQ0%2BdI%2B1AqfxOOrThVqcLyG8gEPmr0PVkcuGT8LpTpY7NyLQP1tXR4KQNlceXZL2H2WC3i3UMOSy%2F58GOrQCnWABOVggixLfGeiQAMZWTBHRJlJjPCEiELzJLPrF4n9HjMqmn8aISzuPBDEweJLgxtGbE8%2BH8OBfPGl40jSqC%2BwYmm2rBMJZvGXy%2FfOORpDCB7cX2tfj2fpDHq%2BdTh5lLbV93fWH5FiZ4bwMY0gytPCF2MfV%2B34pToobc1YJdj96T7YZudrWuY2VrqYq%2BjZj6KxZQI73WiSy7dMMyhiLjDBRlA8UwYNDvrmbd6UAWSEaP%2FFzsf152y1i77Tg%2FGBI0TvHDikMvrbYTcAQ6PgcUMwx%2BLQC0RDmGi%2Bm4q3xB4wbsELM%2BWcLGqsRVDvLColjrwJrwhzSHBbpBTsryGX2rYoky6qNudHlKii8fQYPcRYOqIANj21o1z%2BzsatY1lSGiO8njuDkfdNCodhzbCesTMoOO3U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T230437Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWGZM6UQIYMGCCO5R%2F20230301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=47d11ab8d34ce62db52cdd2b8a08b4eef522253ff74c526858aeb72ca0e47a57" className='resume-thumbnail d-block pb-3 mx-auto' alt="resume thumbnail" data-bs-toggle="modal" data-bs-target="#exampleModal" />
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
                <a className="btn btn-primary" role="button" download href="Resume.pdf">Download</a>
              <h1 className="modal-title position-absolute top-0 start-50 translate-middle-x" id="exampleModalLabel">Resume</h1>
              <button type="button" className="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="https://marcus-portfolio-static-files.s3.us-west-2.amazonaws.com/resume_thumbnail.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2ZJVejpzwQo20Vfo%2Bj9zO%2BrZB3qsl7NvpA6AMJbuO%2BAiA%2FuwAHLFrp7Mqf0wCebtYQVDSM0bqx4Wz57Z%2FqoxTILCrtAgiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDQyNjkwNjY1NzgwOSIMNCWFfTufc3m53oP1KsECQUWoCrSxqer%2BPV3GTP%2FQDxQibGkewletSkN2xPNIbxAOz9IAqXc8gA%2FnMzFkJkNEDRIHpTXw1vjOfnJ%2FJM6EU5fGJI1noSIzj2GK4qHZ8HdLPFzLqdgvWqm2hIw2ztX9Ujfnhshq2LjMZR6sqFx2qw4GUnLrYglxWokST0iXRwDR2E2lEhtbMbhjFXEObqpj4V3Ppwjjzg9sNsnnXZpL460Y8roVSZBs7fFGvGE5VybGMPdyGpi6pd48CK4s3GcKPMgHJyVWNyyEha5aWj56RxAqsCbZBnpfuyyZn30vWcb3HOZU%2F8Qra57TGE%2BheNlL5aS3DjXQbn5QDbtApSBmMxV9rRyVY4mCEfc7vQ0%2BdI%2B1AqfxOOrThVqcLyG8gEPmr0PVkcuGT8LpTpY7NyLQP1tXR4KQNlceXZL2H2WC3i3UMOSy%2F58GOrQCnWABOVggixLfGeiQAMZWTBHRJlJjPCEiELzJLPrF4n9HjMqmn8aISzuPBDEweJLgxtGbE8%2BH8OBfPGl40jSqC%2BwYmm2rBMJZvGXy%2FfOORpDCB7cX2tfj2fpDHq%2BdTh5lLbV93fWH5FiZ4bwMY0gytPCF2MfV%2B34pToobc1YJdj96T7YZudrWuY2VrqYq%2BjZj6KxZQI73WiSy7dMMyhiLjDBRlA8UwYNDvrmbd6UAWSEaP%2FFzsf152y1i77Tg%2FGBI0TvHDikMvrbYTcAQ6PgcUMwx%2BLQC0RDmGi%2Bm4q3xB4wbsELM%2BWcLGqsRVDvLColjrwJrwhzSHBbpBTsryGX2rYoky6qNudHlKii8fQYPcRYOqIANj21o1z%2BzsatY1lSGiO8njuDkfdNCodhzbCesTMoOO3U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230301T230437Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWGZM6UQIYMGCCO5R%2F20230301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=47d11ab8d34ce62db52cdd2b8a08b4eef522253ff74c526858aeb72ca0e47a57" className='d-block mx-auto' alt="resume thumbnail" />
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
export default function Skills() {
  return (
    <div className="row min-vh-100 mt-5">
      <div className="col-12">
        <div className="row row-cols-1 row-cols-xl-2">
          <div className="col">
            <div className="row text-bg-dark rounded py-2 my-2 mx-0">
              <div className="col">
                <h3>Front End:</h3>
              </div>
              <div className="col">
                <div>
                  JavaScript, React, HTML, CSS, Vue, Angular, jQuery, Bootstrap,
                  Material-UI, Redux
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row text-bg-dark rounded py-2 my-2 mx-0">
              <div className="col">
                <h3>Back End:</h3>
              </div>
              <div className="col">
                <div>Node, Python, Express, PHP, GraphQ, Mocha, Chai</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row text-bg-dark rounded py-2 my-2 mx-0">
              <div className="col">
                <h3>Database:</h3>
              </div>
              <div className="col">
                <div>MySQL, MongoDB, Sequelize, Mongoose</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row text-bg-dark rounded py-2 my-2 mx-0">
              <div className="col">
                <h3>Dev Ops:</h3>
              </div>
              <div className="col">
                <div>AWS, EC2, S3, Nginx, Redis, Cloudfront, Route 53</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row text-bg-dark rounded py-2 my-2 mx-0">
              <div className="col">
                <h3>Misc:</h3>
              </div>
              <div className="col">
                <div>Project Management, Confluence, Jira, Trello</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12  ">
        <div className="row text-bg-dark rounded-4 p-2 mx-0 fs-1">
          <div className="col-auto mx-auto">
            <div className="row">
              <div className="col-auto">
                <a
                  href="tel:+19713810572"
                  className="col text-light text-decoration-none "
                >
                  <i className="bi bi-telephone-fill opacity-hover"></i>
                </a>
              </div>
              <a
                href="tel:+19713810572"
                className="col text-light text-decoration-none opacity-hover"
              >
                (971) 381-0572
              </a>
            </div>
          </div>
          <div className="col-auto mx-auto">
            <a
              href="https://github.com/MarcusYoungHR"
              target="_blank"
              rel="noopener noreferrer"
              className="link-light"
            >
              <i className="bi bi-github opacity-hover"></i>
            </a>
          </div>
          <div className="col-auto mx-auto">
            <a href="mailto:marcusyoung0603@gmail.com" className="link-light">
              <i className="bi bi-envelope-paper opacity-hover"></i>
            </a>
          </div>
          <div className="col-auto mx-auto">
            <a
              href="https://www.linkedin.com/in/marcusyoung1994/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-light"
            >
              <i className="bi bi-linkedin opacity-hover"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

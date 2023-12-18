import {
  Modal,
  Button,
  InputGroup,
  Row,
  Col,
  FormControl,
  Form as FormBootstrap,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductivityContext } from "../../store/context/productivity-context";

const days = [
  { name: "Sunday", abbreviation: "Sun", id: "btn1" },
  { name: "Monday", abbreviation: "Mon", id: "btn2" },
  { name: "Tuesday", abbreviation: "Tue", id: "btn3" },
  { name: "Wednesday", abbreviation: "Wed", id: "btn4" },
  { name: "Thursday", abbreviation: "Thu", id: "btn5" },
  { name: "Friday", abbreviation: "Fri", id: "btn6" },
  { name: "Saturday", abbreviation: "Sat", id: "btn7" },
];

export default function TaskAddEdit({
  type,
  setType,
  handleTypeChange,
  editing,
  setModalIsShowing,
  modalIsShowing,
}) {
  const [recurrence, setRecurrence] = useState([]);
  const {selectedTaskId} = useContext(ProductivityContext);
  console.log(selectedTaskId)

  const closeModal = () => setModalIsShowing(false);

  return (
    <Modal show={modalIsShowing} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{editing ? "Edit Task" : "Add Task"}</Modal.Title>
      </Modal.Header>
      <Form method="post">
        <Modal.Body id="task-add-edit-modal">
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text>Name</InputGroup.Text>
                <FormControl placeholder="name" aria-label="name" name="name" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text>Description</InputGroup.Text>
                <FormControl
                  placeholder="description"
                  aria-label="description"
                  name="description"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <ToggleButtonGroup type="checkbox" className="mb-3 w-100" onChange={setRecurrence}>
                {days.map((day, index) => (
                  <ToggleButton
                    id={day.id}
                    value={day.name}
                    variant="outline-primary"
                    key={day.name}
                  >
                    {day.abbreviation}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Col>
          </Row>
          <FormBootstrap.Select
            className="mb-3"
            aria-label="Default select example"
            name="measurement"
            onChange={handleTypeChange}
            defaultValue="default"
          >
            <option value="default" disabled>
              Select Measurement
            </option>
            <option value="time">Timer</option>
            <option value="iterative">Incremental</option>
            <option value="checkbox">Check</option>
          </FormBootstrap.Select>
          <InputGroup>
            {type === "time" ? (
              <>
                <InputGroup.Text>Goal</InputGroup.Text>
                <FormControl type="text" aria-label="hours" name="hours" className="text-end"/>
                <InputGroup.Text>:</InputGroup.Text>
                <FormControl type="text" aria-label="minutes" name="minutes" className="text-end"/>
              </>
            ) : type === "iterative" ? (
              <>
                <InputGroup.Text>Goal</InputGroup.Text>
                <FormControl type="text" aria-label="hours" name="goal" />
              </>
            ) : null}
          </InputGroup>
          <input
            type="hidden"
            name="recurrence"
            value={recurrence}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Create Task
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

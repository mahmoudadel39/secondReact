import React, { useState } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import { TodoItem } from './TodoItem';

export function Todos(props) {
  let { setshowToDo } = props;

  let closeToDo = () => {
    setshowToDo(false);
  };

  let [cours, setCours] = useState('');
  let [courses, setCourses] = useState([]);

  let getInput = (e) => {
    setCours(e.target.value);
  };

  let formHandler = (e) => {
    e.preventDefault();
    if (cours.trim() !== '') {
      setCourses([...courses, { name: cours }]);
      setCours('');
    }
  };

  let deleteCours = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol size="12">
                    <MDBInput
                      label="Enter Your Course"
                      id="form1"
                      type="text"
                      value={cours}
                      onInput={getInput}
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn onClick={formHandler} type="submit">
                      Save
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn onClick={closeToDo} color="warning">
                      Hide To-Do
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">Course Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {courses.map((course, index) => (
                      <TodoItem
                        key={index}
                        index={index}
                        cours={course}
                        deleteCours={deleteCours}
                      />
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

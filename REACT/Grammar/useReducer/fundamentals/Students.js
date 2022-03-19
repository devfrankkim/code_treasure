function Students({ students, dispatch }) {
  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <span
            style={{
              cursor: "pointer",
              marginRight: "1rem",
              fontSize: "2rem",
              textDecoration: student.isHere ? "line-through" : "none",
              color: student.isHere ? "blue" : "black",
            }}
            onClick={() =>
              dispatch({ type: "toggle-student", payload: student.id })
            }
          >
            {student.name}
          </span>
          <button
            onClick={() =>
              dispatch({ type: "delete-student", payload: student.id })
            }
          >
            삭제
          </button>
        </div>
      ))}
    </>
  );
}

export default Students;

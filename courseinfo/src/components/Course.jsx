const CourseHeader = ( {title }) => <h2>{title}</h2>
const Part = ({ name, exercises }) => <p>{name} {exercises}</p>
const Content = ({ parts }) => parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)
const Sum = ({ parts }) => <p><strong>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>

const Course = ({ course }) => {
    return (
      <div>
      <CourseHeader title={course.name}/>
      <Content parts={course.parts}/>
      <Sum parts={course.parts}/>
      </div>
    )
  }

  export default Course
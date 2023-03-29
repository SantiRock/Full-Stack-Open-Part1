const Header = (props) => {
  console.log('header: ', props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log('part: ', props)
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log('content: ', props)
  const [one, two, three] = props.parts
  return (
    <>
      <Part part={one.name} exercises={one.exercises}/>
      <Part part={two.name} exercises={two.exercises}/>
      <Part part={three.name} exercises={three.exercises}/>
    </>
  )
}

const Total = (props) => {
  console.log('total: ', props)
  const [one, two, three] = props.parts
  return (
    <p>Number of exercises {one.exercises + two.exercises + three.exercises}</p>
  )
}

// App------------

const Courseinfo = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      } 
    ]
  }
  
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
  
export default Courseinfo;
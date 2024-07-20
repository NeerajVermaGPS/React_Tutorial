import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
  const [age, setAge] = useState(18)
  const [salary, setSalary] = useState(50000)

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  return (
    <div>
      <Title />
      <Count text="Age" val={age}/>
      <Button incrementFunc={incrementAge}>Increment Age</Button>
      <Count text="Salary" val={salary}/>
      <Button incrementFunc={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent

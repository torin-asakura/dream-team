import React from 'react'
import { useQuery } from '@apollo/client'

import { MY_QUERY } from './queries'

const Index = () => {
  const { loading, error, data } = useQuery(MY_QUERY)

  const Data = ({ data }) => (
    <>
      {Object.keys(data).map((item) => (
        <h1>{JSON.stringify(data[item])}</h1>
      ))}
    </>
  )

  return (
    <>
      {loading && <h1>Loading</h1>}
      {error && <h1>error</h1>}
      {data && <Data data={data}/>}
    </>
  )
}

export { Index }

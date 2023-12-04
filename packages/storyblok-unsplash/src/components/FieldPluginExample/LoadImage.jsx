import { useFieldPlugin } from '@storyblok/field-plugin/react'
import { useQuery } from 'react-query'

export default function LoadImage({ acessKey }) {
  const {
    actions: { setContent },
  } = useFieldPlugin()

  const { data, isLoading, refetch } = useQuery('fetchData', () =>
    fetch(`https://api.unsplash.com/photos/random?client_id=${acessKey}`).then(
      (response) => response.json(),
      {
        manual: true,
      },
    ),
  )

  const forceUpdate = () => {
    refetch()
  }

  if (isLoading) return <p>Loading...</p>
  function save() {
    setContent(data)
  }
  return (
    <div>
      <button onClick={forceUpdate}>Get a random Image</button>
      <img
        src={data.urls.small}
        alt=""
      />

      <button onClick={save}>Save</button>
    </div>
  )
}

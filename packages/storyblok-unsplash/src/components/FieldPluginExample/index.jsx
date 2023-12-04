import './example.css'
import { useFieldPlugin } from '@storyblok/field-plugin/react'
import LoadImage from './LoadImage'

const FieldPlugin = () => {
  const { data } = useFieldPlugin()
  const acessKey = data?.options?.access_key
  return (
    <div>
      {acessKey ? (
        <>
          <LoadImage acessKey={acessKey ?? ''} />
        </>
      ) : (
        <p>This plugin requers you to add a api key</p>
      )}
      {/* <h1>{acessKey}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button>Get a random Image</button> */}
    </div>
  )
}

export default FieldPlugin

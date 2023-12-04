import FieldPluginExample from './components/FieldPluginExample'
import { FunctionComponent } from 'react'
import { FieldPluginProvider } from '@storyblok/field-plugin/react'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

const App: FunctionComponent = () => {
  return (
    <FieldPluginProvider
      Loading={Loading}
      Error={Error}
    >
      <QueryClientProvider client={queryClient}>
        <FieldPluginExample />
      </QueryClientProvider>
    </FieldPluginProvider>
  )
}

const Loading: FunctionComponent = () => <p>Loading...</p>
const Error: FunctionComponent<{ error: Error }> = (props) => {
  console.error(props.error)
  return <p>An error occured, please see the console for more details.</p>
}
export default App

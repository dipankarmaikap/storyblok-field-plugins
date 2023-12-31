import { FunctionComponent } from 'react'
import { useFieldPlugin } from '@storyblok/field-plugin/react'
import ModalToggle from './FieldPluginExample/ModalToggle'

const FieldPlugin: FunctionComponent = () => {
  const plugin = useFieldPlugin()

  return <div>

    <pre>{JSON.stringify(plugin, null, 2)}</pre>
    <ModalToggle/>
  </div>
}

export default FieldPlugin

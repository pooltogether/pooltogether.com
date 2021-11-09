import { Index } from 'lib/components/Index'
import { PageContainer } from 'lib/components/PageContainer'

// Rendered in Layout.jsx
export default function IndexPage(props) {
  return (
    <>
      <PageContainer ignoreStyles pageComponent={<Index navHeight={75} />} />
    </>
  )
}

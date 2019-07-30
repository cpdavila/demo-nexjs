//Method #1
/* import withLayout from '../components/MyLayout'
const Page = () => <p>This is the about page</p>
export default withLayout(Page) */

//Method #2
import Layout from '../components/MyLayout2'

const aboutPageContent = <p>This is about page Layout #2</p>

export default function Index() {
  return <Layout content={aboutPageContent} />
}

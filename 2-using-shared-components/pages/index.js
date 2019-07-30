//Ejemplo con Hight Order Component
/* import withLayout from '../components/MyLayout'
const Page = () => <p>Hello Next.js</p>
export default withLayout(Page) */

//Ejemplo con Page content as a prop
import Layout from '../components/MyLayout2'

const indexPageContent = <p>Hello Next.js Layout #2</p>

export default function Index() {
  return <Layout content={indexPageContent} />
}

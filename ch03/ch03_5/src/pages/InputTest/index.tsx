import Basic from './Basic'
import Size from './Size'
import Color from './Color'
import Border from './Border'

export default function inputTest() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-5xl text-center">inputTest</h2>
      <div className="mt-4">
        <Border />
        <Size />
        <Basic />
        <Color />
      </div>
    </section>
  )
}

import { nanoid } from 'nanoid'
import SingleColor from './SingleColor'

export const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {/* map over the colors and render a single color */}
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />
      })}
    </section>
  )
}

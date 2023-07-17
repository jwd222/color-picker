import { toast } from 'react-toastify'

const SingleColor = ({ index, color }) => {
  //destucture to get the values
  const { hex, weight } = color

  //copy to clipboard functionality
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard')
      } catch (error) {
        toast.error('Failed copy to clipboard')
      }
    } else {
      toast.error('Clipboard access not available')
    }
  }

  return (
    <article
      //for 10 shades of each color use different color text based on the color shades
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor

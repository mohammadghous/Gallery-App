// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickTabItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const imageChange = () => {
    onClickTabItem(id)
  }
  const classStyle = isActive ? 'classStyle' : ''
  return (
    <>
      <li className="image-item-details">
        <button
          type="button"
          className={`button ${classStyle}`}
          onClick={imageChange}
        >
          <img
            className="thumbnailImage"
            src={thumbnailUrl}
            alt={thumbnailAltText}
          />{' '}
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem

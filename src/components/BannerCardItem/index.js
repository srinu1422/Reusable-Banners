// Write your code here.
import './index.css'

const BannerCards = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} list-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph"> {description}</p>
        <button className="btn" type="button">
          {' '}
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerCards

import { Link } from "react-router-dom"

export const Button = ({ title, linkRoute, linkExternal, type, className, extra }) => {

  return (
    <>
      {linkRoute ?
        <Link to={linkRoute}>
          <button className={`btn btn--${type} ${className} ${extra}`}>
            {title}
          </button>
        </Link> :
        <a href={linkExternal} target="_blank" rel="noreferrer" className={`btn btn--${type} ${className} ${extra}`}>
          <button className='btn'>
            {title}
          </button>
        </a>
      }
    </>
  )
}
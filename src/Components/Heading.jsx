
const Heading = (props) => {
    const {heading, subHeading} = props
  return (
    <>
    <h2 className="section_common_heading">
                {heading}
    </h2>
    <p className="section_common_subheading">
        {subHeading}
    </p>
    </>
  )
}

export default Heading
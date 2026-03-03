import { memo } from "react";

const  Heading =memo(({children}:{children:React.ReactNode})=> {
  return (
    <h2 className="mt-3 mb-3">{children}</h2>
  )
})

export default Heading;

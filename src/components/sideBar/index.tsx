import Desktop from "./desktop";
import { useMediaQuery } from "react-responsive";
import Mobile from "./mobile";


const SideBar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })
  const isMobile = useMediaQuery(
    {
      query: '(max-width: 768px)' 
    }
  )
  return (
    <>

    {isDesktopOrLaptop && <Desktop />}
    {isMobile && <Mobile  />}
    </>
  )
}
export default SideBar;
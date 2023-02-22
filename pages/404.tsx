import { NextPage } from "next";

const Custom404: NextPage = () => {
  window.location.href = 'next-portfolio/#' + window.location.pathname.replace('/next-portfolio', '')

  return <></>
}

export default Custom404
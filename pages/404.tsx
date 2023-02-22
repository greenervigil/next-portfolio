import { NextPage } from "next";

const Cusom404: NextPage = () => {
  window.location.href = 'next-portfolio/#' + window.location.pathname.replace('/next-portfolio', '')
  
  return <></>
}
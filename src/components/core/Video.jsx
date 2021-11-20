import React from "react"

const Video = (props) => {
  const { className, source, type } = props

  return (
    <video
      className={className}
      playsInline
      autoPlay
      muted
      loop
    >
      <source src={source} type={type}/>
    </video>
  );
}

export default Video
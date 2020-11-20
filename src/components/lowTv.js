import React from "react"

function LowTv() {
  return (
    <div className="lowtv">
      <h1>DIARIO DE BORDO</h1>

      <div className="sidebar-lowtv">
        <iframe
          width="560"
          height="250"
          src="https://www.youtube.com/embed/nxzqJwMTQLk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="250"
          src="https://www.youtube.com/embed/tyUk1P7nNkc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="250"
          src="https://www.youtube.com/embed/vb4XUz5L5bg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default LowTv

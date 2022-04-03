/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function Map() {
  return (
      <section>
            <div>
            <div className="text-center ">
        <h1 className="font-Lato text-slate-600 italic text-3xl pt-10 pb-2">
          Find us here.
        </h1>
      </div>
            <iframe width="100%" height="300px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/en/map/touchbykren-map2_741906?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=false&allowEdit=false&moreControl=true&searchControl=false&tilelayersControl=false&embedControl=false&datalayersControl=false&onLoadPanel=undefined&captionBar=false&fullscreenControl=false&locateControl=false&measureControl=false"></iframe>
            </div>
    </section>
  )
}

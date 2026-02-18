"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    pannellum: any
  }
}

interface PanoramaViewerProps {
  imageUrl: string
  title?: string
}

export function PanoramaViewer({ imageUrl, title }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Load pannellum script
    if (!window.pannellum) {
      const script = document.createElement("script")
      script.src = "https://cdn.pannellum.org/2.5/pannellum.js"
      script.async = true
      script.onload = () => {
        initPannellum()
      }
      document.head.appendChild(script)

      // Load pannellum CSS
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://cdn.pannellum.org/2.5/pannellum.css"
      document.head.appendChild(link)
    } else {
      initPannellum()
    }

    function initPannellum() {
      if (containerRef.current && window.pannellum) {
        window.pannellum.viewer(containerRef.current.id, {
          type: "equirectangular",
          panorama: imageUrl,
          autoLoad: true,
          showControls: true,
          mouseZoom: true,
          showFullscreenCtrl: true,
          keyboardZoom: true,
          title: title,
        })
      }
    }
  }, [imageUrl, title])

  return (
    <div
      ref={containerRef}
      id="panorama-viewer"
      style={{
        width: "100%",
        height: "500px",
      }}
    />
  )
}

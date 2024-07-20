import { Page, drawShapesOnCanvas } from "@dgmjs/core";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface DGMPageViewProps extends React.HTMLAttributes<HTMLDivElement> {
  page: Page;
  darkMode?: boolean;
  maxScale?: number;
  scaleAdjust?: number;
  update?: boolean;
  showDOM?: boolean;
}

export interface DGMPageViewHandle {
  repaint: () => void;
  focus: () => void;
  getWrapperRef: () => HTMLDivElement | null;
}

export const DGMPageView = forwardRef<DGMPageViewHandle, DGMPageViewProps>(
  (
    {
      page,
      darkMode = false,
      maxScale = 1,
      scaleAdjust = 1,
      update = false,
      showDOM = false,
      style,
      children,
      ...others
    },
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const heightRatio = page.size ? page.size[1] / page.size[0] : 0.75;
    const [size, setSize] = useState([0, 0]);

    const repaint = (width: number, height: number) => {
      if (canvasRef.current) {
        drawShapesOnCanvas(
          [page],
          canvasRef.current,
          darkMode,
          page.size,
          [width, height],
          maxScale,
          scaleAdjust,
          update,
          showDOM
        );
      }
    };

    useImperativeHandle(ref, () => ({
      repaint: () => repaint(size[0], size[1]),
      focus: () => wrapperRef.current?.focus(),
      getWrapperRef: () => wrapperRef.current,
    }));

    useEffect(() => {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const rect = entry.contentRect;
          const { width } = rect;
          const height = Math.round(width * heightRatio);
          setSize([width, height]);
          if (wrapperRef.current) {
            wrapperRef.current.style.height = `${height}px`;
          }
          repaint(width, height);
        }
      });
      wrapperRef.current && observer.observe(wrapperRef.current);
      return () => observer.disconnect();
    }, [darkMode, page]);

    return (
      <div
        ref={wrapperRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...style,
        }}
        {...others}
      >
        <div className="relative">
          <canvas ref={canvasRef} style={{ width: "100%" }} />
        </div>
        {children}
      </div>
    );
  }
);

DGMPageView.displayName = "DGMPageView";
